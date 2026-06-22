import { motion } from 'framer-motion';
import { CheckCircle, Download, Mail, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useCounter } from '../../hooks/useCounter';

export function FinanceSection() {
  const { count: invoiceTotal, ref: invoiceRef } = useCounter(50150, 1500);

  const formatCurrency = (num) => {
    return 'Rs.' + num.toLocaleString('en-IN') + '.00';
  };

  return (
    <section id="finance" className="py-24 relative overflow-hidden" ref={invoiceRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-emerald-grad">The Financial Engine.</span>
          </h2>
          <p className="text-[var(--text2)] text-lg max-w-2xl mx-auto">
            From chaotic receipt piles to pristine invoices in seconds. Fully automated, GST-compliant, and audit-ready.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="relative h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ x: -100, rotate: -15, scale: 0.8, opacity: 0 }}
                  whileInView={{ x: 0, rotate: [0, 3, -2, 0][i], scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.3, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="absolute"
                  style={{
                    top: `${10 + i * 15}%`,
                    left: `${10 + i * 25}%`,
                  }}
                >
                  <div className={`bg-white/10 rounded-lg border border-[var(--border)] p-3 transform ${['-rotate-12', 'rotate-6', '-rotate-3'][i]}`}
                    style={{ width: 120 + i * 16, height: 160 + i * 20 }}
                  >
                    <div className="h-2 bg-gray-600/50 rounded w-3/4 mb-2" />
                    <div className="h-2 bg-gray-600/50 rounded w-1/2 mb-4" />
                    <div className="space-y-1">
                      <div className="h-1.5 bg-gray-700/50 rounded w-full" />
                      <div className="h-1.5 bg-gray-700/50 rounded w-5/6" />
                      <div className="h-1.5 bg-gray-700/50 rounded w-4/6" />
                      {i === 2 && <div className="h-1.5 bg-gray-700/50 rounded w-3/6" />}
                    </div>
                    <div className="mt-4 pt-2 border-t border-[var(--border)]">
                      <div className={`h-2 rounded w-1/2 ${['bg-amber-600/50', 'bg-blue-600/50', 'bg-emerald-600/50'][i]}`} />
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-emerald-500/30 animate-radar" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-[var(--text2)]">Invoice Generated</div>
                    <div className="text-2xl font-bold text-[var(--text)]">INV-2026-001</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-[var(--border)]">
                    <span className="text-[var(--text2)]">Audit Services (Jun 2026)</span>
                    <span className="text-[var(--text)] font-mono">Rs.42,500.00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[var(--border)]">
                    <span className="text-[var(--text2)]">CGST (9%)</span>
                    <span className="text-blue-400 font-mono">Rs.3,825.00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[var(--border)]">
                    <span className="text-[var(--text2)]">SGST (9%)</span>
                    <span className="text-blue-400 font-mono">Rs.3,825.00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-lg font-bold text-[var(--text)]">Total Amount</span>
                    <span className="text-2xl font-bold text-emerald-400 font-mono">
                      {formatCurrency(invoiceTotal)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 btn-animated">
                    <Download className="w-4 h-4" /> Download PDF
                  </button>
                  <button className="flex-1 py-3 rounded-xl glass text-[var(--text)] font-medium hover:bg-[var(--hover-bg)] transition-colors flex items-center justify-center gap-2 btn-animated">
                    <Mail className="w-4 h-4" /> Email to CA
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}


