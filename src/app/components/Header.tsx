import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../../assets/TechHive.webp';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-5 sm:px-10 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-3 cursor-pointer focus:outline-none"
            aria-label="Navigate to top"
          >
            <img src={logo} alt="TechHive" className="h-12 sm:h-14 md:h-16 w-auto" />
            <span
              className="text-2xl font-normal tracking-wider transition-all duration-300 overflow-hidden whitespace-nowrap max-w-[200px] opacity-100 ml-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="text-black">TEC</span>
              <span className="text-black">H</span>
              <span className="text-[#f0d54b]">H</span>
              <span className="text-black">IVE</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className="text-gray-700 hover:text-amber-400 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#solutions"
              onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}
              className="text-gray-700 hover:text-amber-400 transition-colors font-medium"
            >
              Solutions
            </a>
            <a
              href="#why-us"
              onClick={(e) => { e.preventDefault(); scrollToSection('why-us'); }}
              className="text-gray-700 hover:text-amber-400 transition-colors font-medium"
            >
              Why Us
            </a>
            <a
              href="#testimonials"
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
              className="text-gray-700 hover:text-amber-400 transition-colors font-medium"
            >
              Testimonials
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="font-poppins font-semibold bg-amber-400 hover:bg-amber-500 text-black"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 space-y-2 bg-white absolute top-20 left-0 right-0 shadow-xl border-t border-gray-100 z-50">
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
            >
              About
            </a>
            <a
              href="#solutions"
              onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}
              className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
            >
              Solutions
            </a>
            <a
              href="#why-us"
              onClick={(e) => { e.preventDefault(); scrollToSection('why-us'); }}
              className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
            >
              Why Us
            </a>
            <a
              href="#testimonials"
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
              className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
            >
              Testimonials
            </a>
            <div className="px-6 pt-2">
              <Button
                onClick={() => scrollToSection('contact')}
                className="font-poppins font-semibold w-full bg-amber-400 hover:bg-amber-500 text-black py-6 text-lg"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}