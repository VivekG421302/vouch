import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, MapPin, ShieldCheck, User, Star, ChevronRight, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import siteConfig from '../../lib/config';

export function HeroSection() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.width / 2, cy = rect.height / 2;
      const rx = (e.clientY - rect.top - cy) / 20;
      const ry = (cx - (e.clientX - rect.left)) / 20;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(20px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = '';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-blue-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Now Serving 500+ CA Firms
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight font-display">
              <span className="text-metallic">Audit Delivery,</span>
              <br />
              <span className="text-emerald-grad">Hyper-Automated.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-[var(--text2)] max-w-xl leading-relaxed">
              {siteConfig.brand.description} Verify field audits with biometric precision, automate payroll, and scale your practice with AI-powered talent matching.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.redirects.signup}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon btn-animated px-8 py-4 rounded-2xl bg-blue-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/30 inline-flex items-center gap-2"
              >
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.redirects.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl glass text-[var(--text)] font-semibold text-lg hover:bg-[var(--hover-bg)] transition-all flex items-center gap-2 btn-animated"
              >
                <PlayCircle className="w-5 h-5" /> Watch Demo
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex items-center gap-6 pt-4">
              {siteConfig.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-[var(--text)]">{stat.value}</div>
                  <div className="text-sm text-[var(--text2)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="relative flex justify-center items-center" style={{ perspective: 1000 }}>
          <AnimatedSection delay={0.3} direction="right">
            <div
              ref={cardRef}
              className="card-3d relative w-80 h-[28rem] glass rounded-3xl p-6 cursor-pointer animate-float"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--text)]">Rahul Sharma</div>
                      <div className="text-xs text-[var(--text2)]">Senior Auditor - GOLD Tier</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="glass rounded-xl p-3">
                    <div className="text-xs text-[var(--text2)] mb-1">Today's Assignment</div>
                    <div className="font-medium text-[var(--text)]">ABC Corp - Andheri</div>
                    <div className="text-xs text-blue-400 mt-1">10:00 AM - 4:00 PM</div>
                  </div>

                  <div className="glass rounded-xl p-3">
                    <div className="text-xs text-[var(--text2)] mb-2">Skill Ratings</div>
                    <div className="space-y-2">
                      {[
                        { label: 'Auditing', width: '80%', color: 'from-blue-500 to-blue-400', score: '4.0', textColor: 'text-blue-400' },
                        { label: 'Compliance', width: '60%', color: 'from-emerald-500 to-emerald-400', score: '3.0', textColor: 'text-emerald-400' },
                        { label: 'Leadership', width: '100%', color: 'from-amber-500 to-amber-400', score: '5.0', textColor: 'text-amber-400' },
                      ].map((skill, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-xs w-20 text-[var(--text2)]">{skill.label}</span>
                          <div className="flex-1 h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                            <div className={`h-full ${skill.width} bg-gradient-to-r ${skill.color} rounded-full`} />
                          </div>
                          <span className={`text-xs ${skill.textColor}`}>{skill.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center animate-pulse">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text2)]">GPS Status</div>
                      <div className="text-sm font-medium text-emerald-400">Within Geo-Fence</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[var(--border)]">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-[var(--text2)]">FTR Score</div>
                    <div className="text-lg font-bold text-blue-grad flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400" />
                      3.82/5.0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-blue-500/20 blur-xl animate-pulse-slow" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-emerald-500/20 blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text2)]"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-[var(--text2)] flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}


