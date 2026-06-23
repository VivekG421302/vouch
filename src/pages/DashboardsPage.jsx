import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  User, Building2, Briefcase, Shield, Check, ChevronRight,
  LayoutDashboard, Zap, ArrowRight,
} from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import siteConfig from '../lib/config';

const tabIcons = { User, Building2, Briefcase, Shield };

const tabMeta = {
  auditor:  { grad: 'text-blue-grad',    ring: 'border-blue-500/40',    glow: 'shadow-blue-500/20',   accent: 'text-blue-400',    activeBg: 'bg-blue-600' },
  ca:       { grad: 'text-emerald-grad', ring: 'border-emerald-500/40', glow: 'shadow-emerald-500/20',accent: 'text-emerald-400', activeBg: 'bg-emerald-600' },
  company:  { grad: 'text-violet-grad',  ring: 'border-violet-500/40',  glow: 'shadow-violet-500/20', accent: 'text-violet-400',  activeBg: 'bg-violet-600' },
  admin:    { grad: 'text-amber-grad',   ring: 'border-amber-500/40',   glow: 'shadow-amber-500/20',  accent: 'text-amber-400',   activeBg: 'bg-amber-600' },
};

function DashboardPreview({ tab }) {
  const bar = (label) => (
    <div className="bg-gray-900/50 px-6 py-4 border-b border-[var(--border)] flex items-center gap-4">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-amber-500" />
      <div className="w-3 h-3 rounded-full bg-emerald-500" />
      <span className="text-sm text-[var(--text2)] ml-2 capitalize">{label} Portal</span>
    </div>
  );

  if (tab === 'auditor') return (
    <div className="glass rounded-3xl overflow-hidden">
      {bar('auditor')}
      <div className="p-6 grid md:grid-cols-3 gap-4">
        {[
          { label: "Today's Shift", main: 'Andheri Branch', sub: '10:00 AM – 4:00 PM', tag: { text: 'GPS Active', color: 'text-emerald-400', dot: 'bg-emerald-400' } },
          { label: 'This Month', main: '18 Visits', sub: '+3 vs last month', bar: { fill: 'w-3/4', color: 'bg-blue-500' } },
          { label: 'Pending Expenses', main: 'Rs.2,400', sub: '3 claims awaiting', btn: true },
        ].map((card, i) => (
          <div key={i} className="glass rounded-2xl p-5">
            <div className="text-sm text-[var(--text2)] mb-2">{card.label}</div>
            <div className="text-xl font-bold text-[var(--text)]">{card.main}</div>
            <div className="text-sm mt-1 text-blue-400">{card.sub}</div>
            {card.tag && (
              <div className="mt-3 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${card.tag.dot} animate-pulse`} />
                <span className={`text-xs ${card.tag.color}`}>{card.tag.text}</span>
              </div>
            )}
            {card.bar && (
              <div className="mt-3 h-1.5 bg-gray-800/50 rounded-full overflow-hidden">
                <div className={`h-full ${card.bar.fill} ${card.bar.color} rounded-full`} />
              </div>
            )}
            {card.btn && (
              <button className="mt-3 w-full py-2 rounded-lg bg-blue-600/20 text-blue-400 text-xs hover:bg-blue-600/30 transition-colors btn-animated">
                Submit Claim
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  if (tab === 'ca') return (
    <div className="glass rounded-3xl overflow-hidden">
      {bar('ca')}
      <div className="p-6 grid md:grid-cols-4 gap-4">
        {[
          { label: 'Active Auditors', value: '24', color: 'text-blue-400' },
          { label: 'Pending Verifications', value: '7', color: 'text-emerald-400' },
          { label: "Today's Visits", value: '18', color: 'text-amber-400' },
          { label: 'Monthly Revenue', value: 'Rs.4.2L', color: 'text-[var(--text)]' },
        ].map((s, i) => (
          <div key={i} className="glass rounded-2xl p-5 text-center">
            <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-[var(--text2)] mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="px-6 pb-6">
        <div className="glass rounded-2xl p-5">
          <div className="text-sm font-medium mb-3">Live Auditor Map</div>
          <div className="h-40 bg-gray-900/30 rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: '1s' }} />
            <span className="text-[var(--text2)] text-sm">Interactive Map View</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (tab === 'company') return (
    <div className="glass rounded-3xl overflow-hidden">
      {bar('company')}
      <div className="p-6 grid md:grid-cols-2 gap-4">
        <div className="glass rounded-2xl p-5">
          <div className="text-sm font-medium mb-4">Assigned Auditors</div>
          <div className="space-y-3">
            {[
              { name: 'Rahul Sharma', tier: 'GOLD', score: '4.2', status: 'On Site', sc: 'text-emerald-400', bg: 'bg-blue-500/20', tc: 'text-blue-400' },
              { name: 'Priya Patel', tier: 'SILVER', score: '3.8', status: 'En Route', sc: 'text-amber-400', bg: 'bg-emerald-500/20', tc: 'text-emerald-400' },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${a.bg} flex items-center justify-center flex-shrink-0`}>
                  <span className={`${a.tc} text-xs font-bold`}>{a.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-[var(--text)]">{a.name}</div>
                  <div className="text-xs text-[var(--text2)]">{a.tier} · {a.score}★</div>
                </div>
                <span className={`text-xs ${a.sc}`}>{a.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="text-sm font-medium mb-4">Verification Status</div>
          <div className="space-y-3">
            {[
              { label: "Today's Visits", value: '5/5', fill: 'w-full' },
              { label: 'This Week', value: '23/25', fill: 'w-11/12' },
            ].map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[var(--text2)]">{s.label}</span>
                  <span className="text-[var(--text)]">{s.value} Verified</span>
                </div>
                <div className="h-1.5 bg-gray-800/50 rounded-full overflow-hidden">
                  <div className={`h-full ${s.fill} bg-emerald-500 rounded-full`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (tab === 'admin') return (
    <div className="glass rounded-3xl overflow-hidden">
      {bar('admin')}
      <div className="p-6 grid md:grid-cols-3 gap-4">
        {[
          { label: 'Platform Revenue', value: 'Rs.24.8L', sub: '+12% this month', sc: 'text-emerald-400' },
          { label: 'Active Users', value: '1,247', sub: '+89 new this week', sc: 'text-blue-400' },
          { label: 'KYC Pending', value: '23', valueColor: 'text-amber-400', sub: 'Awaiting verification', sc: 'text-[var(--text2)]' },
        ].map((s, i) => (
          <div key={i} className="glass rounded-2xl p-5">
            <div className="text-sm text-[var(--text2)] mb-2">{s.label}</div>
            <div className={`text-2xl font-bold ${s.valueColor || 'text-[var(--text)]'}`}>{s.value}</div>
            <div className={`text-sm mt-1 ${s.sc}`}>{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="px-6 pb-6">
        <div className="glass rounded-2xl p-5">
          <div className="text-sm font-medium mb-3">System Health</div>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Uptime', value: '99.9%', color: 'text-emerald-400' },
              { label: 'API Latency', value: '45ms', color: 'text-blue-400' },
              { label: 'DB Connections', value: '12', color: 'text-emerald-400' },
              { label: 'Alerts', value: '2', color: 'text-amber-400' },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div className={`text-lg font-bold ${m.color}`}>{m.value}</div>
                <div className="text-xs text-[var(--text2)]">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return null;
}

export function DashboardsPage() {
  const [activeTab, setActiveTab] = useState('auditor');
  const roleData = siteConfig.roleOverviews[activeTab];
  const meta = tabMeta[activeTab];

  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-blue-400 text-sm font-medium mb-8">
              <LayoutDashboard className="w-4 h-4" />
              Role-Based Portals
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">
              Four portals.
              <br />
              <span className="text-blue-grad">One platform.</span>
            </h1>
            <p className="text-[var(--text2)] text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Every stakeholder in the audit ecosystem gets their own tailored experience — built around their specific workflow, not a generic dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.redirects.signup}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 btn-animated"
              >
                Try for free <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.redirects.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl glass text-[var(--text)] font-semibold hover:bg-[var(--hover-bg)] transition-all flex items-center justify-center gap-2"
              >
                Book a demo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Dashboard Explorer */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tabs */}
          <AnimatedSection className="flex justify-center mb-10">
            <div className="glass rounded-2xl p-1.5 flex gap-1 flex-wrap justify-center">
              {siteConfig.dashboardTabs.map((tab) => {
                const Icon = tabIcons[tab.icon];
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2 btn-animated ${
                      isActive
                        ? `${tabMeta[tab.id].activeBg} text-white shadow-lg`
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
              transition={{ duration: 0.35 }}
            >
              {/* Role Overview */}
              <div className={`glass rounded-3xl p-8 mb-6 border ${meta.ring}`}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className={`text-3xl font-bold mb-2 font-display ${meta.grad}`}>{roleData.title}</h2>
                    <p className={`text-lg mb-4 ${meta.accent}`}>{roleData.subtitle}</p>
                    <p className="text-[var(--text2)] leading-relaxed mb-6">{roleData.description}</p>
                    <div className="space-y-2">
                      {roleData.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-[var(--text2)]">
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${meta.accent}`} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {roleData.metrics.map((m, i) => (
                      <div key={i} className="glass rounded-2xl p-5 text-center">
                        <div className={`text-2xl font-bold ${meta.grad}`}>{m.value}</div>
                        <div className="text-xs text-[var(--text2)] mt-1">{m.label}</div>
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

      {/* Bottom CTA */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="glass rounded-3xl p-12 text-center border border-blue-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                  Ready to see your portal?
                </h2>
                <p className="text-[var(--text2)] text-lg mb-8 max-w-xl mx-auto">
                  Get access to all four role dashboards in a single subscription. No extra cost per portal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={siteConfig.redirects.signup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 btn-animated"
                  >
                    Start Free Trial <ChevronRight className="w-5 h-5" />
                  </a>
                  <Link
                    to="/pricing"
                    className="px-8 py-4 rounded-xl glass text-[var(--text)] font-semibold hover:bg-[var(--hover-bg)] transition-all flex items-center justify-center gap-2"
                  >
                    Compare plans
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
