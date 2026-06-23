import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Briefcase, MapPin, ChevronRight, ArrowRight, Users, Rocket,
  Heart, Zap, Globe, Coffee, Code2, TrendingUp, Star, Building2,
  ChevronDown,
} from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import siteConfig from '../lib/config';

const openRoles = [
  { title: 'Senior Full-Stack Engineer', dept: 'Engineering', location: 'Mumbai (Hybrid)', type: 'Full-time', badge: 'blue', hot: true },
  { title: 'Product Manager – Fintech', dept: 'Product', location: 'Mumbai (On-site)', type: 'Full-time', badge: 'violet', hot: true },
  { title: 'DevOps / SRE Engineer', dept: 'Infrastructure', location: 'Remote (India)', type: 'Full-time', badge: 'emerald', hot: false },
  { title: 'Sales Executive – CA Networks', dept: 'Sales', location: 'Delhi / Mumbai', type: 'Full-time', badge: 'amber', hot: false },
  { title: 'Customer Success Manager', dept: 'Operations', location: 'Mumbai (On-site)', type: 'Full-time', badge: 'rose', hot: false },
  { title: 'AI / ML Engineer', dept: 'Engineering', location: 'Remote (India)', type: 'Full-time', badge: 'cyan', hot: true },
];

const perks = [
  { icon: Rocket, label: 'Equity for all', desc: 'Every employee gets ESOP. We build together, we win together.', color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { icon: Heart, label: 'Full health cover', desc: 'Medical, dental, and vision for you and your family.', color: 'text-rose-400', bg: 'bg-rose-500/20' },
  { icon: Globe, label: 'Remote-friendly', desc: 'Work from anywhere in India. Results matter, not location.', color: 'text-emerald-400', bg: 'bg-emerald-500/20' },
  { icon: TrendingUp, label: 'Learning budget', desc: 'Rs.50,000/year for courses, books, and conferences.', color: 'text-violet-400', bg: 'bg-violet-500/20' },
  { icon: Coffee, label: 'Unlimited leaves', desc: 'Take the time you need. No questions asked.', color: 'text-amber-400', bg: 'bg-amber-500/20' },
  { icon: Code2, label: 'Top-of-line gear', desc: 'MacBook Pro + peripherals of your choice on day one.', color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
];

const values = [
  { num: '01', label: 'Builder mindset', desc: 'Ship fast, iterate faster. We are makers who care deeply about craft.' },
  { num: '02', label: 'Radical honesty', desc: 'Feedback is a gift. We say what we think, kindly and directly.' },
  { num: '03', label: 'Customer obsession', desc: 'Every CA firm we serve trusts us with their livelihood. That weight is real.' },
  { num: '04', label: 'Default to open', desc: 'Share context widely. Hidden information is how silos form.' },
];

const badgeColor = {
  blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  violet: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  amber: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  rose: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
};

function RoleCard({ role, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      onClick={() => setOpen(!open)}
      className="glass rounded-2xl p-6 border border-[var(--border)] hover:border-emerald-500/30 transition-all cursor-pointer group"
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap mb-2">
            <h3 className="font-semibold text-[var(--text)] text-lg">{role.title}</h3>
            {role.hot && (
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium border border-emerald-500/30">
                🔥 Hiring now
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 text-sm text-[var(--text2)] flex-wrap">
            <span className={`px-2.5 py-0.5 rounded-lg border text-xs font-medium ${badgeColor[role.badge]}`}>{role.dept}</span>
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{role.location}</span>
            <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{role.type}</span>
          </div>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-[var(--text2)] group-hover:text-[var(--text)] transition-colors" />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-[var(--border)]">
              <p className="text-sm text-[var(--text2)] mb-4 leading-relaxed">
                We're looking for passionate individuals who thrive in a fast-moving startup environment. You'll work directly with the founding team and have real ownership over your work.
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Application: ${role.title}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 btn-animated"
                onClick={e => e.stopPropagation()}
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CareerPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8">
              <Users className="w-4 h-4" />
              We're hiring · {openRoles.length} open roles
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">
              Build the future of
              <br />
              <span className="text-emerald-grad">Indian audit tech.</span>
            </h1>
            <p className="text-[var(--text2)] text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              We're a small team with an outsized mission — to become the operating system for every CA firm in India. Come help us get there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#roles"
                className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2 btn-animated"
              >
                See open roles <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="px-8 py-4 rounded-xl glass text-[var(--text)] font-semibold hover:bg-[var(--hover-bg)] transition-all flex items-center justify-center gap-2"
              >
                Say hello
              </a>
            </div>
          </AnimatedSection>

          {/* Team Stats */}
          <AnimatedSection delay={0.2} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: '28', label: 'Team size' },
              { val: 'Series A', label: 'Funded stage' },
              { val: 'Mumbai', label: 'HQ location' },
              { val: '2024', label: 'Founded' },
            ].map((s, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center border border-[var(--border)]">
                <div className="text-3xl font-bold text-emerald-grad mb-1">{s.val}</div>
                <div className="text-sm text-[var(--text2)]">{s.label}</div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              What we believe in
            </h2>
            <p className="text-[var(--text2)] max-w-xl mx-auto">
              Four principles that guide how we work — not aspirational posters, but actual daily practice.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <div className="glass rounded-2xl p-6 border border-[var(--border)] h-full">
                  <div className="text-4xl font-bold text-emerald-500/30 font-display mb-3">{v.num}</div>
                  <h3 className="font-semibold text-[var(--text)] mb-2">{v.label}</h3>
                  <p className="text-sm text-[var(--text2)] leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              What you get
            </h2>
            <p className="text-[var(--text2)] max-w-xl mx-auto">
              We invest heavily in the people who build Vouch.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {perks.map((perk, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-6 border border-[var(--border)] hover:border-emerald-500/20 transition-all"
                >
                  <div className={`w-12 h-12 rounded-2xl ${perk.bg} flex items-center justify-center mb-4`}>
                    <perk.icon className={`w-6 h-6 ${perk.color}`} />
                  </div>
                  <h3 className="font-semibold text-[var(--text)] mb-2">{perk.label}</h3>
                  <p className="text-sm text-[var(--text2)] leading-relaxed">{perk.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Roles */}
      <section id="roles" className="py-16 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Open positions
            </h2>
            <p className="text-[var(--text2)] max-w-xl mx-auto">
              Don't see something that fits? Email us at{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-emerald-400 hover:underline">
                {siteConfig.contact.email}
              </a>{' '}
              — we hire for character over credentials.
            </p>
          </AnimatedSection>
          <div className="space-y-4">
            {openRoles.map((role, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <RoleCard role={role} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
