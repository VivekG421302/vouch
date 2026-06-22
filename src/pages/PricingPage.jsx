import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import siteConfig from '../lib/config';

export function PricingPage() {
  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-blue-grad">Simple, Transparent Pricing</span>
          </h1>
          <p className="text-[var(--text2)] text-lg max-w-2xl mx-auto">
            Choose the plan that fits your practice. All plans include a 14-day free trial.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {siteConfig.pricing.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className={`glass rounded-3xl p-8 relative h-full flex flex-col ${
                  plan.popular ? 'border-2 border-blue-500/50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-medium flex items-center gap-1">
                    <Zap className="w-4 h-4" /> Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-[var(--text2)] text-sm">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-[var(--text2)]">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text2)]">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={siteConfig.redirects.signup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-medium text-center transition-all flex items-center justify-center gap-2 btn-animated ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white'
                      : 'glass hover:bg-[var(--hover-bg)] text-[var(--text)]'
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}


