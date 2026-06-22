import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ChevronRight, Settings } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import siteConfig from '../../lib/config';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (href) => {
    if (href.startsWith('/#')) return location.pathname === '/' && location.hash === href.slice(1);
    return location.pathname === href;
  };

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const target = document.querySelector(href.slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      else window.location.href = href;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-xl font-display">{siteConfig.brand.logo}</span>
          </div>
          <span className="text-xl font-bold tracking-tight font-display">{siteConfig.brand.name}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-medium transition-colors relative group py-1 ${
                isActive(item.href) ? 'text-[var(--text)]' : 'text-[var(--text2)] hover:text-[var(--text)]'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 ${
                isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl glass hover:bg-[var(--hover-bg)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link
            to="/config"
            className="hidden md:flex p-2.5 rounded-xl glass hover:bg-[var(--hover-bg)] transition-colors"
            aria-label="Config"
          >
            <Settings className="w-5 h-5" />
          </Link>
          <a
            href={siteConfig.redirects.signup}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/30 items-center gap-2 btn-animated"
          >
            Get Started <ChevronRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg glass"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-[var(--border)] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block py-2 text-sm font-medium ${
                    isActive(item.href) ? 'text-blue-400' : 'text-[var(--text2)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/config" className="block py-2 text-sm font-medium text-[var(--text2)]">
                Config
              </Link>
              <a
                href={siteConfig.redirects.signup}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold mt-2"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}


