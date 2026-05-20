import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Solutions } from './components/Solutions';
import { WhyUs } from './components/WhyUs';
import { Credibility } from './components/Credibility';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
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
