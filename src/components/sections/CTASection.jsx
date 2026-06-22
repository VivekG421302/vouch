import { motion } from 'framer-motion';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import siteConfig from '../../lib/config';

export function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10" />
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Ready to <span className="text-blue-grad">Transform</span> Your Audit Practice?
              </h2>
              <p className="text-[var(--text2)] text-lg mb-8 max-w-2xl mx-auto">
                Join 500+ CA firms already using Vouch to automate field attendance, streamline payroll, and scale their practice with verified talent.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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
                  <Calendar className="w-5 h-5" /> Schedule Demo
                </a>
              </div>
              <div className="flex items-center justify-center gap-8 mt-8 text-sm text-[var(--text2)] flex-wrap">
                {['No credit card required', '14-day free trial', 'Cancel anytime'].map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}


