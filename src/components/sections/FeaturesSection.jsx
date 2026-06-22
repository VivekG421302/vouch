import { motion } from 'framer-motion';
import { Radar, CalendarDays, Shield, Banknote, FileText, BrainCircuit, Check } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import siteConfig from '../../lib/config';

const iconMap = {
  Radar, CalendarDays, Shield, Banknote, FileText, BrainCircuit,
};

const colorMap = {
  blue: 'bg-blue-500/20 text-blue-400',
  emerald: 'bg-emerald-500/20 text-emerald-400',
  violet: 'bg-violet-500/20 text-violet-400',
  amber: 'bg-amber-500/20 text-amber-400',
  rose: 'bg-rose-500/20 text-rose-400',
  cyan: 'bg-cyan-500/20 text-cyan-400',
};

const borderColorMap = {
  blue: 'border-blue-500/30',
  emerald: 'border-emerald-500/30',
  violet: 'border-violet-500/30',
  amber: 'border-amber-500/30',
  rose: 'border-rose-500/30',
  cyan: 'border-cyan-500/30',
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-blue-grad">The Core Pillars</span>
          </h2>
          <p className="text-[var(--text2)] text-lg max-w-2xl mx-auto">
            Every feature engineered for the unique demands of field audit operations
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {siteConfig.features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <StaggerItem key={feature.id}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-3xl p-8 card-3d group cursor-pointer relative overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl ${colorMap[feature.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-[var(--text2)] text-sm leading-relaxed mb-6">{feature.description}</p>
                    <div className="space-y-2 mb-6">
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
  );
}

function FeatureVisual({ type }) {
  if (type === 'geo-fence') {
    return (
      <div className="relative h-48 bg-gray-900/30 rounded-2xl overflow-hidden flex items-center justify-center">
        <div className="absolute w-32 h-32 rounded-full border border-blue-500/30" />
        <div className="absolute w-24 h-24 rounded-full border border-blue-500/50" />
        <div className="absolute w-16 h-16 rounded-full border border-blue-500/70" />
        <div className="absolute w-4 h-4 rounded-full bg-blue-500 animate-radar" />
        <div className="absolute w-3 h-3 rounded-full bg-emerald-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-emerald-400/50" />
        <div className="absolute bottom-2 left-2 text-xs text-blue-400 font-mono">200m radius</div>
        <div className="absolute top-2 right-2 text-xs text-emerald-400 font-mono">VERIFIED</div>
      </div>
    );
  }

  if (type === 'attendance') {
    return (
      <div className="glass rounded-xl p-4">
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
          {['M','T','W','T','F','S','S'].map(d => <span key={d} className="text-[var(--text2)]">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          <div className="aspect-square rounded-lg bg-gray-800/30" />
          <div className="aspect-square rounded-lg bg-blue-500/30 flex items-center justify-center text-xs text-blue-300">2</div>
          <div className="aspect-square rounded-lg bg-emerald-500/30 flex items-center justify-center text-xs text-emerald-300">3</div>
          <div className="aspect-square rounded-lg bg-blue-500/30 flex items-center justify-center text-xs text-blue-300">4</div>
          <div className="aspect-square rounded-lg bg-gray-800/30 flex items-center justify-center text-xs text-[var(--text2)]">5</div>
          <div className="aspect-square rounded-lg bg-amber-500/30 flex items-center justify-center text-xs text-amber-300">6</div>
          <div className="aspect-square rounded-lg bg-gray-800/30 flex items-center justify-center text-xs text-[var(--text2)]">7</div>
        </div>
        <div className="flex items-center gap-3 mt-3 text-xs flex-wrap">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" />ABC Corp</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" />XYZ Ltd</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" />Pending</span>
        </div>
      </div>
    );
  }

  if (type === 'vault') {
    return (
      <div className="relative h-40 flex items-center justify-center">
        <div className="absolute w-28 h-36 rounded-xl bg-gradient-to-br from-blue-600/80 to-blue-800/80 border border-blue-400/30 transform -rotate-6 translate-x-4 translate-y-2 shadow-xl" />
        <div className="absolute w-28 h-36 rounded-xl bg-gradient-to-br from-violet-600/80 to-violet-800/80 border border-violet-400/30 transform rotate-3 -translate-x-2 shadow-xl" />
        <div className="relative w-28 h-36 rounded-xl bg-gradient-to-br from-emerald-600/80 to-emerald-800/80 border border-emerald-400/30 flex flex-col items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
          <Shield className="w-8 h-8 text-emerald-300 mb-2" />
          <span className="text-xs text-emerald-300 font-mono">ENCRYPTED</span>
        </div>
      </div>
    );
  }

  if (type === 'payroll') {
    return (
      <div className="glass rounded-xl p-4 space-y-3">
        <div className="flex justify-between text-sm"><span className="text-[var(--text2)]">Basic Salary</span><span className="text-[var(--text)] font-mono">Rs.25,000</span></div>
        <div className="flex justify-between text-sm"><span className="text-[var(--text2)]">DA + Conveyance</span><span className="text-emerald-400 font-mono">+Rs.7,000</span></div>
        <div className="border-t border-[var(--border)] pt-2 flex justify-between text-sm"><span className="text-[var(--text2)]">TDS (10%)</span><span className="text-red-400 font-mono">-Rs.1,500</span></div>
        <div className="flex justify-between font-bold text-emerald-400"><span>Net Salary</span><span className="font-mono">Rs.30,500</span></div>
      </div>
    );
  }

  if (type === 'invoice') {
    return (
      <div className="glass rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-[var(--text2)]">Invoice #INV-2026-001</span>
          <span className="text-xs text-emerald-400">PAID</span>
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
      <div className="glass rounded-xl p-4">
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


