import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle, Download, Mail, IndianRupee, Receipt,
  Banknote, FileText, Zap, ChevronRight, ArrowRight, TrendingUp, Shield,
} from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import { useCounter } from '../hooks/useCounter';
import siteConfig from '../lib/config';

function AnimatedInvoice() {
  const { count: total, ref } = useCounter(50150, 1500);
  const fmt = (n) => 'Rs.' + n.toLocaleString('en-IN') + '.00';

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.01 }}
      className="glass rounded-3xl p-8 relative overflow-hidden border border-emerald-500/20"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
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
        <div className="space-y-3 mb-6">
          {[
            { label: 'Audit Services (Jun 2026)', value: 'Rs.42,500.00', color: 'text-[var(--text)]' },
            { label: 'CGST (9%)', value: 'Rs.3,825.00', color: 'text-blue-400' },
            { label: 'SGST (9%)', value: 'Rs.3,825.00', color: 'text-blue-400' },
          ].map((row, i) => (
            <div key={i} className="flex justify-between items-center py-2 border-b border-[var(--border)]">
              <span className="text-[var(--text2)] text-sm">{row.label}</span>
              <span className={`font-mono text-sm ${row.color}`}>{row.value}</span>
            </div>
          ))}
          <div className="flex justify-between items-center py-2">
            <span className="text-lg font-bold text-[var(--text)]">Total Amount</span>
            <span className="text-2xl font-bold text-emerald-400 font-mono">{fmt(total)}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors flex items-center justify-center gap-2 btn-animated">
            <Download className="w-4 h-4" /> Download PDF
          </button>
          <button className="flex-1 py-3 rounded-xl glass text-[var(--text)] font-medium hover:bg-[var(--hover-bg)] transition-colors flex items-center justify-center gap-2 btn-animated">
            <Mail className="w-4 h-4" /> Email to CA
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const modules = [
  {
    icon: Receipt,
    title: 'GST Invoice Engine',
    desc: 'Auto-compiled billing with HSN code detection, CGST/SGST/IGST split, and e-invoice QR (IRN) generation in one click.',
    points: ['Auto HSN code from service type', 'CGST/SGST/IGST location-aware split', 'E-invoice QR (IRN) for B2B', 'One-click WhatsApp & email delivery'],
    color: 'text-emerald-400', bg: 'bg-emerald-500/20', border: 'border-emerald-500/30',
  },
  {
    icon: Banknote,
    title: 'Automated Payroll',
    desc: 'TDS-compliant payslip generation under Section 194J with direct bank disbursement and Form 16 generation.',
    points: ['Section 194J TDS auto-calculation', 'Direct NEFT/RTGS/IMPS integration', 'Form 16 & e-filing ready', 'PF, ESI, and professional tax'],
    color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30',
  },
  {
    icon: FileText,
    title: 'Expense Management',
    desc: 'Capture, categorize, and approve field expenses in real time. Auditors submit claims; CAs approve with a tap.',
    points: ['Photo receipt capture on mobile', 'Category-based expense tagging', 'Multi-level approval workflow', 'Export to Tally & Excel'],
    color: 'text-violet-400', bg: 'bg-violet-500/20', border: 'border-violet-500/30',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Analytics',
    desc: 'Live P&L visibility across your entire audit firm — by auditor, by client, or by audit type — with trend forecasting.',
    points: ['Real-time P&L dashboard', 'Per-auditor revenue attribution', 'Month-over-month trend charts', 'Forecast based on scheduled audits'],
    color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30',
  },
];

const complianceBadges = [
  { label: 'GST Act Compliant', icon: '✓' },
  { label: 'DPDP Act 2023', icon: '✓' },
  { label: 'AES-256 Encrypted', icon: '✓' },
  { label: 'RBI Data Localization', icon: '✓' },
  { label: 'Income Tax Act 194J', icon: '✓' },
  { label: 'E-Invoice (IRP)', icon: '✓' },
];

export function FinancePage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8">
              <IndianRupee className="w-4 h-4" />
              Financial Automation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">
              Receipts in.
              <br />
              <span className="text-emerald-grad">Invoices out.</span>
            </h1>
            <p className="text-[var(--text2)] text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              The complete financial engine for CA firms — GST-compliant invoicing, TDS payroll, expense management, and real-time revenue analytics. Fully automated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.redirects.signup}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2 btn-animated"
              >
                Start Free Trial <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.redirects.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl glass text-[var(--text)] font-semibold hover:bg-[var(--hover-bg)] transition-all flex items-center justify-center gap-2"
              >
                See a demo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Invoice Demo + Receipt Pile */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Animated receipt pile */}
            <AnimatedSection>
              <div className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent rounded-3xl" />
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -100, rotate: -15, scale: 0.8, opacity: 0 }}
                    whileInView={{ x: 0, rotate: [0, 3, -2, 0][i], scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.25, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="absolute"
                    style={{ top: `${10 + i * 14}%`, left: `${12 + i * 22}%` }}
                  >
                    <div
                      className={`bg-white/10 rounded-lg border border-[var(--border)] p-3 transform ${['-rotate-12', 'rotate-6', '-rotate-3'][i]}`}
                      style={{ width: 120 + i * 16, height: 160 + i * 20 }}
                    >
                      <div className="h-2 bg-gray-600/50 rounded w-3/4 mb-2" />
                      <div className="h-2 bg-gray-600/50 rounded w-1/2 mb-4" />
                      <div className="space-y-1">
                        <div className="h-1.5 bg-gray-700/50 rounded w-full" />
                        <div className="h-1.5 bg-gray-700/50 rounded w-5/6" />
                        <div className="h-1.5 bg-gray-700/50 rounded w-4/6" />
                      </div>
                      <div className="mt-4 pt-2 border-t border-[var(--border)]">
                        <div className={`h-2 rounded w-1/2 ${['bg-amber-600/50','bg-blue-600/50','bg-emerald-600/50'][i]}`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute bottom-10 right-10 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/30"
                >
                  → Auto-compiled
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <AnimatedInvoice />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Financial Modules */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              <span className="text-emerald-grad">Everything financial.</span>
              <br />Nothing manual.
            </h2>
            <p className="text-[var(--text2)] text-lg max-w-xl mx-auto">
              Four fully automated modules that cover every rupee that flows through your audit firm.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {modules.map((mod, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`glass rounded-3xl p-8 border ${mod.border} hover:shadow-xl transition-all duration-300 h-full`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${mod.bg} flex items-center justify-center mb-5`}>
                    <mod.icon className={`w-7 h-7 ${mod.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--text)]">{mod.title}</h3>
                  <p className="text-[var(--text2)] text-sm leading-relaxed mb-5">{mod.desc}</p>
                  <div className="space-y-2">
                    {mod.points.map((p, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-[var(--text2)]">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${mod.color}`} />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-3">Built for Indian compliance</h2>
            <p className="text-[var(--text2)] max-w-lg mx-auto">
              Every regulation that matters to CA firms, baked in from day one.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {complianceBadges.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-4 py-2.5 glass rounded-full border border-emerald-500/30 text-sm"
                >
                  <span className="text-emerald-400 font-bold">{b.icon}</span>
                  <span className="text-[var(--text)]">{b.label}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Payroll Preview */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 text-xs font-medium mb-4">
                <Zap className="w-3.5 h-3.5" /> Section 194J Compliant
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Payroll that handles
                <span className="text-blue-grad"> Indian tax law</span> for you.
              </h2>
              <p className="text-[var(--text2)] leading-relaxed mb-6">
                Auto-calculate TDS under Section 194J for professional services, generate Form 16, and disburse directly to bank accounts — all without touching a spreadsheet.
              </p>
              <div className="space-y-3">
                {['Zero manual TDS calculations', 'NEFT/RTGS/IMPS direct disbursement', 'PF, ESI & professional tax handled', 'Audit-ready payroll logs'].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[var(--text2)]">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-blue-400" />
                    </div>
                    {p}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass rounded-3xl p-8 border border-blue-500/20">
                <div className="text-sm text-[var(--text2)] mb-1">Payslip — June 2026</div>
                <div className="text-xl font-bold mb-6 text-[var(--text)]">Rahul Sharma</div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-[var(--border)]">
                    <span className="text-[var(--text2)]">Basic Salary</span>
                    <span className="text-[var(--text)] font-mono">Rs.25,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[var(--border)]">
                    <span className="text-[var(--text2)]">DA + Conveyance</span>
                    <span className="text-emerald-400 font-mono">+Rs.7,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[var(--border)]">
                    <span className="text-[var(--text2)]">TDS § 194J (10%)</span>
                    <span className="text-red-400 font-mono">-Rs.1,500</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="font-bold text-[var(--text)]">Net Pay</span>
                    <span className="text-2xl font-bold text-blue-400 font-mono">Rs.30,500</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Disbursed via NEFT · Jun 30, 2026
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="glass rounded-3xl p-12 text-center border border-emerald-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                  Stop chasing invoices. Start closing audits.
                </h2>
                <p className="text-[var(--text2)] text-lg mb-8 max-w-xl mx-auto">
                  The entire financial workflow for your CA firm, automated in one platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={siteConfig.redirects.signup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2 btn-animated"
                  >
                    Start Free — 14 days <ChevronRight className="w-5 h-5" />
                  </a>
                  <Link
                    to="/pricing"
                    className="px-8 py-4 rounded-xl glass text-[var(--text)] font-semibold hover:bg-[var(--hover-bg)] transition-all flex items-center justify-center gap-2"
                  >
                    View pricing
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
