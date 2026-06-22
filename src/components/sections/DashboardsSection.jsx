import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Building2, Briefcase, Shield, Check, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import siteConfig from '../../lib/config';

const tabIcons = { User, Building2, Briefcase, Shield };

export function DashboardsSection() {
  const [activeTab, setActiveTab] = useState('auditor');
  const roleData = siteConfig.roleOverviews[activeTab];

  return (
    <section id="dashboards" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-blue-grad">Built for Every Role.</span>
          </h2>
          <p className="text-[var(--text2)] text-lg max-w-2xl mx-auto">
            Four distinct portal experiences, each optimized for the user's unique workflow
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center mb-12">
          <div className="glass rounded-2xl p-1.5 flex gap-1 flex-wrap justify-center">
            {siteConfig.dashboardTabs.map((tab) => {
              const Icon = tabIcons[tab.icon];
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2 btn-animated ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-[var(--text2)] hover:text-[var(--text)] hover:bg-[var(--hover-bg)]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Role Overview */}
            <div className="glass rounded-3xl p-8 mb-8 border border-[var(--border)]">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-2 font-display">{roleData.title}</h3>
                  <p className="text-blue-400 text-lg mb-4">{roleData.subtitle}</p>
                  <p className="text-[var(--text2)] leading-relaxed mb-6">{roleData.description}</p>
                  <div className="space-y-3">
                    {roleData.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text2)]">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {roleData.metrics.map((metric, i) => (
                    <div key={i} className="glass rounded-2xl p-6 text-center">
                      <div className="text-2xl font-bold text-blue-grad">{metric.value}</div>
                      <div className="text-xs text-[var(--text2)] mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <DashboardPreview tab={activeTab} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function DashboardPreview({ tab }) {
  const windowBar = (
    <div className="bg-gray-900/50 px-6 py-4 border-b border-[var(--border)] flex items-center gap-4">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-amber-500" />
      <div className="w-3 h-3 rounded-full bg-emerald-500" />
      <span className="text-sm text-[var(--text2)] ml-2 capitalize">{tab} Portal</span>
    </div>
  );

  if (tab === 'auditor') {
    return (
      <div className="glass rounded-3xl overflow-hidden">
        {windowBar}
        <div className="p-8 grid md:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-6">
            <div className="text-sm text-[var(--text2)] mb-2">Today's Shift</div>
            <div className="text-2xl font-bold text-[var(--text)]">Andheri Branch</div>
            <div className="text-sm text-blue-400 mt-1">10:00 AM - 4:00 PM</div>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400">GPS Active</span>
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-sm text-[var(--text2)] mb-2">This Month</div>
            <div className="text-2xl font-bold text-[var(--text)]">18 Visits</div>
            <div className="text-sm text-emerald-400 mt-1">+3 vs last month</div>
            <div className="mt-4 h-2 bg-gray-800/50 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-blue-500 rounded-full" />
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-sm text-[var(--text2)] mb-2">Pending Expenses</div>
            <div className="text-2xl font-bold text-[var(--text)]">Rs.2,400</div>
            <div className="text-sm text-amber-400 mt-1">3 claims awaiting</div>
            <button className="mt-4 w-full py-2 rounded-lg bg-blue-600/20 text-blue-400 text-sm hover:bg-blue-600/30 transition-colors btn-animated">
              Submit Claim
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (tab === 'ca') {
    return (
      <div className="glass rounded-3xl overflow-hidden">
        {windowBar}
        <div className="p-8 grid md:grid-cols-4 gap-6">
          {[
            { label: 'Active Auditors', value: '24', color: 'text-blue-400' },
            { label: 'Pending Verifications', value: '7', color: 'text-emerald-400' },
            { label: "Today's Visits", value: '18', color: 'text-amber-400' },
            { label: 'Monthly Revenue', value: 'Rs.4.2L', color: 'text-[var(--text)]' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center">
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-[var(--text2)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="px-8 pb-8">
          <div className="glass rounded-2xl p-6">
            <div className="text-sm font-medium mb-4">Live Auditor Map</div>
            <div className="h-48 bg-gray-900/30 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <span className="text-[var(--text2)] text-sm">Interactive Map View</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (tab === 'company') {
    return (
      <div className="glass rounded-3xl overflow-hidden">
        {windowBar}
        <div className="p-8 grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6">
            <div className="text-sm font-medium mb-4">Assigned Auditors</div>
            <div className="space-y-3">
              {[
                { name: 'Rahul Sharma', tier: 'GOLD', score: '4.2', status: 'On Site', statusColor: 'text-emerald-400', bg: 'bg-blue-500/20', text: 'text-blue-400' },
                { name: 'Priya Patel', tier: 'SILVER', score: '3.8', status: 'En Route', statusColor: 'text-amber-400', bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
              ].map((auditor, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${auditor.bg} flex items-center justify-center`}>
                    <span className={`${auditor.text} text-sm font-bold`}>{auditor.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-[var(--text)]">{auditor.name}</div>
                    <div className="text-xs text-[var(--text2)]">{auditor.tier} Tier - {auditor.score}â˜…</div>
                  </div>
                  <span className={`text-xs ${auditor.statusColor}`}>{auditor.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-sm font-medium mb-4">Verification Status</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-[var(--text2)]">Today's Visits</span>
                <span className="text-sm text-[var(--text)]">5/5 Verified</span>
              </div>
              <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                <div className="h-full w-full bg-emerald-500 rounded-full" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[var(--text2)]">This Week</span>
                <span className="text-sm text-[var(--text)]">23/25 Verified</span>
              </div>
              <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                <div className="h-full w-11/12 bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (tab === 'admin') {
    return (
      <div className="glass rounded-3xl overflow-hidden">
        {windowBar}
        <div className="p-8 grid md:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-6">
            <div className="text-sm text-[var(--text2)] mb-2">Platform Revenue</div>
            <div className="text-2xl font-bold text-[var(--text)]">Rs.24.8L</div>
            <div className="text-sm text-emerald-400 mt-1">+12% this month</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-sm text-[var(--text2)] mb-2">Active Users</div>
            <div className="text-2xl font-bold text-[var(--text)]">1,247</div>
            <div className="text-sm text-blue-400 mt-1">+89 new this week</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-sm text-[var(--text2)] mb-2">KYC Pending</div>
            <div className="text-2xl font-bold text-amber-400">23</div>
            <div className="text-sm text-[var(--text2)] mt-1">Awaiting verification</div>
          </div>
        </div>
        <div className="px-8 pb-8">
          <div className="glass rounded-2xl p-6">
            <div className="text-sm font-medium mb-4">System Health</div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Uptime', value: '99.9%', color: 'text-emerald-400' },
                { label: 'API Latency', value: '45ms', color: 'text-blue-400' },
                { label: 'DB Connections', value: '12', color: 'text-emerald-400' },
                { label: 'Alerts', value: '2', color: 'text-amber-400' },
              ].map((metric, i) => (
                <div key={i} className="text-center">
                  <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                  <div className="text-xs text-[var(--text2)]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}


