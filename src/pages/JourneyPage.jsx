import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Award } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import siteConfig from '../lib/config';

export function JourneyPage() {
  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-blue-grad">Our Journey</span>
          </h1>
          <p className="text-[var(--text2)] text-lg max-w-2xl mx-auto">
            From a simple idea to India's leading audit automation platform. Here's how we got here.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-blue-500 md:-translate-x-1/2" />

          {siteConfig.journey.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative flex items-start gap-6 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[var(--bg)] md:-translate-x-1/2 z-10 mt-6" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className={`glass rounded-2xl p-6 border ${
                    item.milestone ? 'border-emerald-500/30' : 'border-[var(--border)]'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {item.milestone && <Award className="w-4 h-4 text-emerald-400" />}
                      <span className="text-sm text-blue-400 font-medium">{item.month} {item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[var(--text2)] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Future */}
        <AnimatedSection className="mt-16 text-center">
          <div className="glass rounded-3xl p-8 border border-blue-500/30">
            <Rocket className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">The Future</h3>
            <p className="text-[var(--text2)] max-w-xl mx-auto">
              We're expanding to 10+ cities, building AI-driven audit assistants, and creating the largest verified auditor network in India. Join us on this journey.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


