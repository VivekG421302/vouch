import { motion } from 'framer-motion';
import { Linkedin, Twitter, Target, Eye, MapPin, Calendar, Users, Award } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import siteConfig from '../lib/config';

export function AboutPage() {
  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-blue-grad">About Vouch</span>
          </h1>
          <p className="text-[var(--text2)] text-lg max-w-2xl mx-auto">
            Building the future of audit automation for India's CA community.
          </p>
        </AnimatedSection>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <AnimatedSection>
            <div className="glass rounded-3xl p-8 h-full border border-blue-500/20">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-[var(--text2)] leading-relaxed">{siteConfig.brand.mission}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-3xl p-8 h-full border border-emerald-500/20">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-[var(--text2)] leading-relaxed">{siteConfig.brand.vision}</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <AnimatedSection className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '500+', label: 'CA Firms', icon: Users },
              { value: '50K+', label: 'Monthly Audits', icon: Award },
              { value: '99.8%', label: 'GPS Accuracy', icon: MapPin },
              { value: '24/7', label: 'Support', icon: Calendar },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-grad">{stat.value}</div>
                <div className="text-sm text-[var(--text2)] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Team */}
        <AnimatedSection className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-12 font-display">Meet the Team</h2>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.1}>
          {siteConfig.team.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div whileHover={{ y: -5 }} className="glass rounded-3xl overflow-hidden">
                <div className="h-48 bg-gray-800/30 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-[var(--text2)] mb-4">{member.role}</p>
                  <div className="flex gap-3">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass hover:bg-[var(--hover-bg)] transition-colors">
                      <Linkedin className="w-4 h-4 text-[var(--text2)]" />
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass hover:bg-[var(--hover-bg)] transition-colors">
                      <Twitter className="w-4 h-4 text-[var(--text2)]" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}


