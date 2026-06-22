import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingOrbs } from './FloatingOrbs';

export function Layout({ children }) {
  return (
    <div className="grid-bg min-h-screen">
      <FloatingOrbs />
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}


