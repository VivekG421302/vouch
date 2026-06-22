import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { MapPin, Plus, Filter, CheckCircle, Clock } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import siteConfig from '../lib/config';

// Leaflet icon fix for React
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const statusColors = {
  completed: 'bg-emerald-500',
  'in-progress': 'bg-amber-500',
};

const typeColors = {
  statutory: 'text-blue-400',
  internal: 'text-emerald-400',
  tax: 'text-amber-400',
  gst: 'text-violet-400',
  stock: 'text-rose-400',
  forensic: 'text-cyan-400',
};

function AddMarker({ onAdd }) {
  useMapEvents({
    click(e) {
      onAdd(e.latlng);
    },
  });
  return null;
}

export function AuditMapPage() {
  const [locations, setLocations] = useState(siteConfig.auditLocations);
  const [filter, setFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newLocation, setNewLocation] = useState({ name: '', area: '', type: 'statutory' });
  const [clickPosition, setClickPosition] = useState(null);

  const filteredLocations = filter === 'all' 
    ? locations 
    : locations.filter(l => l.type === filter || l.status === filter);

  const handleMapClick = useCallback((latlng) => {
    setClickPosition(latlng);
    setShowAddForm(true);
  }, []);

  const handleAddLocation = () => {
    if (!clickPosition || !newLocation.name) return;
    const location = {
      id: locations.length + 1,
      name: newLocation.name,
      lat: clickPosition.lat,
      lng: clickPosition.lng,
      area: newLocation.area || 'New Area',
      type: newLocation.type,
      status: 'in-progress',
      date: new Date().toISOString().split('T')[0],
    };
    setLocations([...locations, location]);
    setShowAddForm(false);
    setNewLocation({ name: '', area: '', type: 'statutory' });
    setClickPosition(null);
  };

  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-blue-grad">Audit Coverage Map</span>
          </h1>
          <p className="text-[var(--text2)] text-lg max-w-2xl mx-auto">
            Real-time view of all audit locations across Mumbai. Click anywhere on the map to add a new location.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-grad">{locations.length}</div>
              <div className="text-xs text-[var(--text2)]">Total Locations</div>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">{locations.filter(l => l.status === 'completed').length}</div>
              <div className="text-xs text-[var(--text2)]">Completed</div>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">{locations.filter(l => l.status === 'in-progress').length}</div>
              <div className="text-xs text-[var(--text2)]">In Progress</div>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-[var(--text)]">12</div>
              <div className="text-xs text-[var(--text2)]">Areas Covered</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection className="mb-6">
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="w-4 h-4 text-[var(--text2)]" />
            {['all', 'statutory', 'internal', 'tax', 'gst', 'stock', 'forensic', 'completed', 'in-progress'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all btn-animated ${
                  filter === f
                    ? 'bg-blue-600 text-white'
                    : 'glass text-[var(--text2)] hover:text-[var(--text)]'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Map */}
        <AnimatedSection>
          <div className="glass rounded-3xl overflow-hidden border border-[var(--border)]">
            <div className="h-[500px] relative">
              <MapContainer
                center={[19.0760, 72.8777]}
                zoom={11}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredLocations.map((loc) => (
                  <Marker key={loc.id} position={[loc.lat, loc.lng]}>
                    <Popup>
                      <div className="p-2 min-w-[200px]">
                        <div className="font-bold text-[var(--text)]">{loc.name}</div>
                        <div className="text-sm text-[var(--text2)]">{loc.area}</div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`w-2 h-2 rounded-full ${statusColors[loc.status]}`} />
                          <span className="text-xs capitalize">{loc.status.replace('-', ' ')}</span>
                        </div>
                        <div className={`text-xs mt-1 ${typeColors[loc.type]}`}>
                          {loc.type.charAt(0).toUpperCase() + loc.type.slice(1)} Audit
                        </div>
                        <div className="text-xs text-[var(--text2)] mt-1">{loc.date}</div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
                <AddMarker onAdd={handleMapClick} />
              </MapContainer>

              {/* Add Location Form Overlay */}
              {showAddForm && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 glass rounded-2xl p-4 border border-blue-500/30"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Plus className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">Add New Location</span>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={newLocation.name}
                      onChange={(e) => setNewLocation({ ...newLocation, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border)] text-sm text-[var(--text)] focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Area"
                      value={newLocation.area}
                      onChange={(e) => setNewLocation({ ...newLocation, area: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border)] text-sm text-[var(--text)] focus:outline-none focus:border-blue-500"
                    />
                    <select
                      value={newLocation.type}
                      onChange={(e) => setNewLocation({ ...newLocation, type: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border)] text-sm text-[var(--text)] focus:outline-none focus:border-blue-500"
                    >
                      <option value="statutory">Statutory</option>
                      <option value="internal">Internal</option>
                      <option value="tax">Tax</option>
                      <option value="gst">GST</option>
                      <option value="stock">Stock</option>
                      <option value="forensic">Forensic</option>
                    </select>
                    <div className="flex gap-2">
                      <button
                        onClick={handleAddLocation}
                        className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors btn-animated"
                      >
                        Add Location
                      </button>
                      <button
                        onClick={() => { setShowAddForm(false); setClickPosition(null); }}
                        className="px-3 py-2 rounded-lg glass text-sm text-[var(--text2)] hover:text-[var(--text)]"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Location List */}
        <AnimatedSection className="mt-8">
          <h3 className="text-xl font-bold mb-4">Recent Locations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLocations.slice(-6).reverse().map((loc) => (
              <motion.div
                key={loc.id}
                whileHover={{ y: -3 }}
                className="glass rounded-2xl p-4 border border-[var(--border)]"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-semibold text-sm">{loc.name}</div>
                    <div className="text-xs text-[var(--text2)]">{loc.area}</div>
                  </div>
                  {loc.status === 'completed' ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Clock className="w-4 h-4 text-amber-400" />
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className={`${typeColors[loc.type]}`}>
                    {loc.type.charAt(0).toUpperCase() + loc.type.slice(1)}
                  </span>
                  <span className="text-[var(--text2)]">â€¢</span>
                  <span className="text-[var(--text2)]">{loc.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


