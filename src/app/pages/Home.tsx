import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Solutions } from '../components/Solutions';
import { WhyUs } from '../components/WhyUs';
import { Credibility } from '../components/Credibility';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };
      if (!tryScroll()) {
        const timer = setTimeout(tryScroll, 250);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <WhyUs />
        <Credibility />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
