import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, ExternalLink, Mail, Phone, MapPin, Globe, Link2, Copy, Check } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import siteConfig from '../lib/config';

export function ConfigPage() {
  const [config, setConfig] = useState(siteConfig);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(null);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const updateField = (section, key, value) => {
    setConfig(prev => ({ ...prev, [section]: { ...prev[section], [key]: value } }));
  };

  const updateRedirect = (key, value) => {
    setConfig(prev => ({ ...prev, redirects: { ...prev.redirects, [key]: value } }));
  };

  const updateSocial = (key, value) => {
    setConfig(prev => ({ ...prev, social: { ...prev.social, [key]: value } }));
  };

  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-2 font-display">
                <span className="text-blue-grad">Site Configuration</span>
              </h1>
              <p className="text-[var(--text2)]">Manage all content, links, and redirects from one place.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium flex items-center gap-2 hover:bg-emerald-500 transition-colors btn-animated"
            >
              <Save className="w-4 h-4" /> {saved ? 'Saved!' : 'Save Changes'}
            </motion.button>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {/* Brand Settings */}
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-3xl p-8 border border-[var(--border)]">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-400" /> Brand Settings
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Brand Name', key: 'name', value: config.brand.name },
                  { label: 'Tagline', key: 'tagline', value: config.brand.tagline },
                  { label: 'Logo Letter', key: 'logo', value: config.brand.logo },
                  { label: 'Founded', key: 'founded', value: config.brand.founded },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-sm text-[var(--text2)] mb-1 block">{field.label}</label>
                    <input
                      type="text"
                      value={field.value}
                      onChange={(e) => updateField('brand', field.key, e.target.value)}
                      className="w-full px-4 py-2 rounded-xl bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                ))}
                <div className="md:col-span-2">
                  <label className="text-sm text-[var(--text2)] mb-1 block">Description</label>
                  <textarea
                    value={config.brand.description}
                    onChange={(e) => updateField('brand', 'description', e.target.value)}
                    rows={2}
                    className="w-full px-4 py-2 rounded-xl bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.2}>
            <div className="glass rounded-3xl p-8 border border-[var(--border)]">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-400" /> Contact Information
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-[var(--text2)] mb-1 block flex items-center gap-1">
                    <Mail className="w-3 h-3" /> Email
                  </label>
                  <input
                    type="email"
                    value={config.contact.email}
                    onChange={(e) => updateField('contact', 'email', e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-[var(--text2)] mb-1 block flex items-center gap-1">
                    <Phone className="w-3 h-3" /> Phone
                  </label>
                  <input
                    type="text"
                    value={config.contact.phone}
                    onChange={(e) => updateField('contact', 'phone', e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-[var(--text2)] mb-1 block flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Address
                  </label>
                  <input
                    type="text"
                    value={config.contact.address}
                    onChange={(e) => updateField('contact', 'address', e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={0.3}>
            <div className="glass rounded-3xl p-8 border border-[var(--border)]">
              <h2 className="text-xl font-bold mb-6">Social Media Links</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(config.social).map(([key, value]) => (
                  <div key={key}>
                    <label className="text-sm text-[var(--text2)] mb-1 block capitalize">{key}</label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={value}
                        onChange={(e) => updateSocial(key, e.target.value)}
                        className="flex-1 px-4 py-2 rounded-xl bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:border-blue-500 transition-colors"
                      />
                      <button
                        onClick={() => copyToClipboard(value, 'social-' + key)}
                        className="px-3 py-2 rounded-xl glass hover:bg-[var(--hover-bg)] transition-colors"
                      >
                        {copied === ('social-' + key) ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[var(--text2)]" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Redirects */}
          <AnimatedSection delay={0.4}>
            <div className="glass rounded-3xl p-8 border border-[var(--border)]">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-violet-400" /> External Redirects
              </h2>
              <p className="text-sm text-[var(--text2)] mb-4">
                These URLs are used for all CTA buttons across the site. Change them to point to your actual services.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(config.redirects).map(([key, value]) => (
                  <div key={key}>
                    <label className="text-sm text-[var(--text2)] mb-1 block capitalize">{key}</label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={value}
                        onChange={(e) => updateRedirect(key, e.target.value)}
                        className="flex-1 px-4 py-2 rounded-xl bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:border-blue-500 transition-colors"
                      />
                      <button
                        onClick={() => copyToClipboard(value, 'redirect-' + key)}
                        className="px-3 py-2 rounded-xl glass hover:bg-[var(--hover-bg)] transition-colors"
                      >
                        {copied === ('redirect-' + key) ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[var(--text2)]" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Preview */}
          <AnimatedSection delay={0.5}>
            <div className="glass rounded-3xl p-8 border border-emerald-500/30">
              <h2 className="text-xl font-bold mb-4 text-emerald-400 flex items-center gap-2">
                <Link2 className="w-5 h-5" /> Quick Preview
              </h2>
              <div className="space-y-2 text-sm text-[var(--text2)]">
                <p>All buttons on this site redirect to:</p>
                <div className="grid md:grid-cols-2 gap-2 mt-3">
                  {[
                    { label: 'Start Free Trial', url: config.redirects.signup },
                    { label: 'Watch Demo', url: config.redirects.demo },
                    { label: 'Get Started', url: config.redirects.signup },
                    { label: 'Documentation', url: config.redirects.docs },
                    { label: 'Support', url: config.redirects.support },
                    { label: 'API', url: config.redirects.api },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between glass rounded-xl p-3">
                      <span className="text-[var(--text)] font-medium">{item.label}</span>
                      <span className="text-xs text-blue-400 truncate max-w-[200px]">{item.url}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}


