import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import siteConfig from '../lib/config';

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(siteConfig.faq.map(q => q.category))];
  const filteredFAQ = activeCategory === 'All' 
    ? siteConfig.faq 
    : siteConfig.faq.filter(q => q.category === activeCategory);

  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-blue-grad">Frequently Asked Questions</span>
          </h1>
          <p className="text-[var(--text2)] text-lg max-w-2xl mx-auto">
            Everything you need to know about Vouch and how it can transform your audit practice.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all btn-animated ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'glass text-[var(--text2)] hover:text-[var(--text)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <StaggerContainer className="space-y-4" staggerDelay={0.05}>
          {filteredFAQ.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                layout
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="font-medium">{item.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[var(--text2)]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pl-14 text-[var(--text2)] leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Still have questions */}
        <AnimatedSection delay={0.5} className="mt-16 text-center">
          <div className="glass rounded-3xl p-8">
            <MessageSquare className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-[var(--text2)] mb-4">Our team is here to help. Reach out and we'll get back to you within 24 hours.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors btn-animated">
              Contact Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


