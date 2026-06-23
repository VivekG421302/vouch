import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Instagram, Youtube } from 'lucide-react';
import siteConfig from '../../lib/config';

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  youtube: Youtube,
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-transparent">
                <img src="/logo.png" alt="Vouch logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold font-display">{siteConfig.brand.name}</span>
            </div>
            <p className="text-sm text-[var(--text2)] leading-relaxed">{siteConfig.brand.description}</p>
            <div className="mt-4 space-y-1 text-sm text-[var(--text2)]">
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.address}</p>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold mb-4 text-[var(--text)]">Product</div>
            <div className="space-y-2 text-sm text-[var(--text2)]">
              {siteConfig.footer.product.map((item) => (
                <Link key={item.label} to={item.href} className="block hover:text-[var(--text)] transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold mb-4 text-[var(--text)]">Company</div>
            <div className="space-y-2 text-sm text-[var(--text2)]">
              {siteConfig.footer.company.map((item) => (
                <Link key={item.label} to={item.href} className="block hover:text-[var(--text)] transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold mb-4 text-[var(--text)]">Legal</div>
            <div className="space-y-2 text-sm text-[var(--text2)]">
              {siteConfig.footer.legal.map((item) => (
                <Link key={item.label} to={item.href} className="block hover:text-[var(--text)] transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-[var(--text2)]">
            Â© 2026 {siteConfig.brand.name} Technologies. All rights reserved. Built in India for Indian CA firms.
          </div>
          <div className="flex items-center gap-4">
            {Object.entries(siteConfig.social).map(([key, url]) => {
              const Icon = socialIcons[key];
              if (!Icon) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-[var(--hover-bg)] transition-colors"
                >
                  <Icon className="w-4 h-4 text-[var(--text2)]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}


