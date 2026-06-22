import { motion } from 'framer-motion';
import { Scale, ShieldCheck, Calculator, Receipt, Package, Search, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import siteConfig from '../../lib/config';

const iconMap = {
  Scale, ShieldCheck, Calculator, Receipt, Package, Search,
};

const colorMap = {
  blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  amber: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  violet: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  rose: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
};

export function AuditTypesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-blue-grad">Types of Audits</span> We Support
          </h2>
          <p className="text-[var(--text2)] text-lg max-w-2xl mx-auto">
            From statutory compliance to forensic investigations, Vouch handles every audit type with precision and automation.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {siteConfig.auditTypes.map((audit) => {
            const Icon = iconMap[audit.icon];
            return (
              <StaggerItem key={audit.id}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-3xl p-8 border border-[var(--border)] hover:border-[var(--blue)]/30 transition-all cursor-pointer group h-full"
                >
                  <div className={`w-14 h-14 rounded-2xl ${colorMap[audit.color].split(' ')[0]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${colorMap[audit.color].split(' ')[1]}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{audit.title}</h3>
                  <p className="text-[var(--text2)] text-sm leading-relaxed mb-4">{audit.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-emerald-400 font-medium">{audit.stats}</span>
                    <ArrowRight className="w-4 h-4 text-[var(--text2)] group-hover:text-[var(--text)] group-hover:translate-x-1 transition-all" />
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


