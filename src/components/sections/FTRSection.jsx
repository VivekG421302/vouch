import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Trophy, Star, MapPin, Check } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useCounter } from '../../hooks/useCounter';
import siteConfig from '../../lib/config';

export function FTRSection() {
  const [showMilestone, setShowMilestone] = useState(false);
  const { count: ftrScore, ref: ftrRef } = useCounter(90, 2000);

  const colorClasses = {
    amber: { bg: 'bg-amber-700/30', text: 'text-amber-400', bar: 'bg-amber-600' },
    gray: { bg: 'bg-gray-500/30', text: 'text-gray-300', bar: 'bg-gray-400' },
    emerald: { bg: 'bg-emerald-500/30', text: 'text-emerald-400', bar: 'bg-emerald-500' },
  };

  return (
    <section id="ftr" className="py-24 relative overflow-hidden" ref={ftrRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-emerald-400 mb-6">
                <TrendingUp className="w-4 h-4" /> Career Progression Engine
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                From Part-Time to<br /><span className="text-emerald-grad">Full-Time Elite.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-[var(--text2)] text-lg leading-relaxed mb-8">
                Our Full-Time Readiness (FTR) score tracks your journey from Bronze to Elite. Complete verified audits, earn skill ratings, and unlock binding career offers from top-tier CA firms.
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {siteConfig.ftrTiers.map((tier, i) => {
                const colors = colorClasses[tier.color] || colorClasses.gray;
                return (
                  <AnimatedSection key={tier.name} delay={0.3 + i * 0.1}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                        <span className={`${colors.text} font-bold text-sm`}>{tier.name[0]}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{tier.name}</span>
                          <span className="text-xs text-[var(--text2)]">{tier.range}</span>
                        </div>
                        <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tier.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className={`h-full ${colors.bar} rounded-full`}
                          />
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          <AnimatedSection direction="right" className="flex justify-center">
            <div className="relative w-80 h-80">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                <circle
                  cx="100" cy="100" r="90"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="565.48"
                  strokeDashoffset={56.55}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-6xl font-bold text-blue-grad">{ftrScore}%</div>
                <div className="text-sm text-[var(--text2)] mt-2">FTR Score</div>
                <div className="text-xs text-emerald-400 mt-1 font-medium">Full-Time Eligible</div>
              </div>
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 glass rounded-full px-3 py-1 text-xs text-blue-400">
                  <Star className="w-3 h-3 inline mr-1" />4.2 Skill
                </div>
              </div>
              <div className="absolute inset-0 animate-spin-reverse">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 glass rounded-full px-3 py-1 text-xs text-emerald-400">
                  <MapPin className="w-3 h-3 inline mr-1" />67 Visits
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.5} className="mt-16 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass rounded-2xl p-6 max-w-md border border-emerald-500/30 shadow-lg shadow-emerald-500/10 cursor-pointer"
            onClick={() => setShowMilestone(!showMilestone)}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-emerald-400 mb-1">Milestone Unlocked!</div>
                <div className="text-[var(--text)] text-lg font-bold mb-1">Full-Time Opportunity</div>
                <div className="text-sm text-[var(--text2)]">Top-tier CA firm Deloitte has sent you a binding full-time offer based on your GOLD tier status.</div>
                <div className="flex gap-3 mt-4">
                  <a
                    href={siteConfig.redirects.signup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition-colors btn-animated"
                  >
                    View Offer
                  </a>
                  <button className="px-4 py-2 rounded-lg glass text-[var(--text2)] text-sm hover:text-[var(--text)] transition-colors">
                    Later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}


