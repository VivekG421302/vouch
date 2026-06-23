import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Radar, CalendarDays, Shield, Banknote, FileText, BrainCircuit, Check, ArrowRight, Zap } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import siteConfig from '../lib/config';

const iconMap = { Radar, CalendarDays, Shield, Banknote, FileText, BrainCircuit };

const colorMap = {
  blue: 'bg-blue-500/20 text-blue-400',
  emerald: 'bg-emerald-500/20 text-emerald-400',
  violet: 'bg-violet-500/20 text-violet-400',
  amber: 'bg-amber-500/20 text-amber-400',
  rose: 'bg-rose-500/20 text-rose-400',
  cyan: 'bg-cyan-500/20 text-cyan-400',
};

const glowMap = {
  blue: 'group-hover:shadow-blue-500/20',
  emerald: 'group-hover:shadow-emerald-500/20',
  violet: 'group-hover:shadow-violet-500/20',
  amber: 'group-hover:shadow-amber-500/20',
  rose: 'group-hover:shadow-rose-500/20',
  cyan: 'group-hover:shadow-cyan-500/20',
};

const gradMap = {
  blue: 'from-blue-500/10',
  emerald: 'from-emerald-500/10',
  violet: 'from-violet-500/10',
  amber: 'from-amber-500/10',
  rose: 'from-rose-500/10',
  cyan: 'from-cyan-500/10',
};

function FeatureVisual({ type }) {
  if (type === 'geo-fence') {
    return (
      <div className="relative h-44 bg-gray-900/30 rounded-2xl overflow-hidden flex items-center justify-center mt-4">
        <div className="absolute w-32 h-32 rounded-full border border-blue-500/30 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute w-24 h-24 rounded-full border border-blue-500/50" />
        <div className="absolute w-16 h-16 rounded-full border border-blue-500/70" />
        <div className="absolute w-4 h-4 rounded-full bg-blue-500/30 animate-radar" />
        <div className="absolute w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
        <div className="absolute bottom-2 left-3 text-xs text-blue-400 font-mono">200m radius</div>
        <div className="absolute top-2 right-3 text-xs text-emerald-400 font-mono">✓ VERIFIED</div>
      </div>
    );
  }
  if (type === 'attendance') {
    return (
      <div className="glass rounded-xl p-3 mt-4">
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
          {['M','T','W','T','F','S','S'].map((d, i) => <span key={i} className="text-[var(--text2)]">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {[null,'blue','emerald','blue',null,'amber',null].map((c, i) => (
            <div key={i} className={`aspect-square rounded-lg flex items-center justify-center text-xs ${c ? `bg-${c}-500/30 text-${c}-300` : 'bg-gray-800/30 text-[var(--text2)]'}`}>
              {i + 1}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-3 text-xs flex-wrap">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />ABC Corp</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />XYZ Ltd</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />Pending</span>
        </div>
      </div>
    );
  }
  if (type === 'vault') {
    return (
      <div className="relative h-36 flex items-center justify-center mt-4">
        <div className="absolute w-24 h-32 rounded-xl bg-gradient-to-br from-blue-600/80 to-blue-800/80 border border-blue-400/30 transform -rotate-6 translate-x-4 translate-y-2 shadow-xl" />
        <div className="absolute w-24 h-32 rounded-xl bg-gradient-to-br from-violet-600/80 to-violet-800/80 border border-violet-400/30 transform rotate-3 -translate-x-2 shadow-xl" />
        <div className="relative w-24 h-32 rounded-xl bg-gradient-to-br from-emerald-600/80 to-emerald-800/80 border border-emerald-400/30 flex flex-col items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
          <Shield className="w-7 h-7 text-emerald-300 mb-2" />
          <span className="text-xs text-emerald-300 font-mono">ENCRYPTED</span>
        </div>
      </div>
    );
  }
  if (type === 'payroll') {
    return (
      <div className="glass rounded-xl p-3 space-y-2 mt-4">
        <div className="flex justify-between text-sm"><span className="text-[var(--text2)]">Basic Salary</span><span className="text-[var(--text)] font-mono">Rs.25,000</span></div>
        <div className="flex justify-between text-sm"><span className="text-[var(--text2)]">DA + Conveyance</span><span className="text-emerald-400 font-mono">+Rs.7,000</span></div>
        <div className="border-t border-[var(--border)] pt-2 flex justify-between text-sm"><span className="text-[var(--text2)]">TDS (10%)</span><span className="text-red-400 font-mono">-Rs.1,500</span></div>
        <div className="flex justify-between font-bold"><span className="text-[var(--text2)]">Net Salary</span><span className="text-emerald-400 font-mono">Rs.30,500</span></div>
      </div>
    );
  }
  if (type === 'invoice') {
    return (
      <div className="glass rounded-xl p-3 mt-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-[var(--text2)]">Invoice #INV-2026-001</span>
          <span className="text-xs text-emerald-400 font-medium">● PAID</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-[var(--text2)]">Subtotal</span><span className="text-[var(--text)]">Rs.42,500</span></div>
          <div className="flex justify-between"><span className="text-[var(--text2)]">GST (18%)</span><span className="text-blue-400">Rs.7,650</span></div>
          <div className="border-t border-[var(--border)] pt-2 flex justify-between font-bold"><span className="text-[var(--text)]">Total</span><span className="text-[var(--text)] font-mono">Rs.50,150</span></div>
        </div>
      </div>
    );
  }
  if (type === 'ai') {
    return (
      <div className="glass rounded-xl p-3 mt-4">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
            <BrainCircuit className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="text-sm text-[var(--text)] mb-1">Anomaly Detected</div>
            <div className="text-xs text-[var(--text2)]">Auditor #2473 has 3 consecutive geo-fence violations</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-cyan-400">
          <BrainCircuit className="w-3 h-3" />
          <span>Auto-escalated to CA Admin</span>
        </div>
      </div>
    );
  }
  return null;
}

const pageStat = [
  { value: '6', label: 'Core Modules' },
  { value: '99.8%', label: 'GPS Accuracy' },
  { value: '50K+', label: 'Audits Verified' },
  { value: '< 2s', label: 'Verification Speed' },
];

export function FeaturesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-blue-400 text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Platform Capabilities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">
              Every tool auditors
              <br />
              <span className="text-blue-grad">actually need.</span>
            </h1>
            <p className="text-[var(--text2)] text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Six precision-built modules that eliminate manual friction from field audit operations — from geo-fencing to GST invoicing.
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
              <a
                href={siteConfig.redirects.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl glass text-[var(--text)] font-semibold hover:bg-[var(--hover-bg)] transition-all flex items-center justify-center gap-2"
              >
                Watch Demo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>

          {/* Stats Row */}
          <AnimatedSection delay={0.2} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pageStat.map((s, i) => (
                <div key={i} className="glass rounded-2xl p-6 text-center border border-[var(--border)]">
                  <div className="text-3xl font-bold text-blue-grad mb-1">{s.value}</div>
                  <div className="text-sm text-[var(--text2)]">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-10 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {siteConfig.features.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <StaggerItem key={feature.id}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className={`glass rounded-3xl p-8 group cursor-pointer relative overflow-hidden h-full border border-[var(--border)] hover:border-opacity-60 hover:shadow-xl ${glowMap[feature.color]} transition-all duration-300`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradMap[feature.color]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl ${colorMap[feature.color]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-[var(--text)]">{feature.title}</h3>
                      <p className="text-[var(--text2)] text-sm leading-relaxed mb-5">{feature.description}</p>
                      <div className="space-y-2 mb-4">
                        {feature.details.map((detail, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm text-[var(--text2)]">
                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                      <FeatureVisual type={feature.id} />
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="glass rounded-3xl p-12 text-center border border-blue-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                  Ready to automate your audit workflow?
                </h2>
                <p className="text-[var(--text2)] text-lg mb-8 max-w-xl mx-auto">
                  Join 500+ CA firms who've eliminated manual friction with Vouch.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={siteConfig.redirects.signup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 btn-animated"
                  >
                    Start Free — 14 days <ChevronRight className="w-5 h-5" />
                  </a>
                  <Link
                    to="/pricing"
                    className="px-8 py-4 rounded-xl glass text-[var(--text)] font-semibold hover:bg-[var(--hover-bg)] transition-all flex items-center justify-center gap-2"
                  >
                    See Pricing
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
