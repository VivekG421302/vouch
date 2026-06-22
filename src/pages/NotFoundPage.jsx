import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl font-bold text-blue-grad mb-4 font-display"
        >
          404
        </motion.div>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-[var(--text2)] mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors btn-animated"
          >
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-[var(--text)] font-medium hover:bg-[var(--hover-bg)] transition-colors btn-animated"
          >
            <ArrowLeft className="w-4 h-4" /> Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}


