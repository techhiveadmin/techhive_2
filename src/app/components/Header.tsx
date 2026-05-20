import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';
import { Button } from './ui/button';
import logo from '../../assets/TechHive.webp';

type ServiceLink = { name: string; href: string };
type ServiceGroup = { heading: string; links: ServiceLink[] };

const serviceGroups: ServiceGroup[] = [
  {
    heading: 'QA Automation',
    links: [
      { name: 'QA Automation Overview', href: '/qa-automation' },
      { name: 'Fintech QA Automation', href: '/qa-automation/fintech' },
      { name: 'Banking QA Automation', href: '/qa-automation/banking' },
      { name: 'Payment Gateway Testing', href: '/qa-automation/payment-gateways' },
      { name: 'PCI-DSS Compliance Testing', href: '/qa-automation/pci-dss' },
      { name: 'Open Banking API Testing', href: '/qa-automation/open-banking' },
      { name: 'Performance Testing', href: '/qa-automation/performance-testing' },
    ],
  },
  {
    heading: 'Development',
    links: [
      { name: 'Fintech Software Development', href: '/software-development/fintech' },
      { name: 'Banking Software Development', href: '/software-development/banking' },
      { name: 'Payment Gateway Integration', href: '/software-development/payment-gateway' },
      { name: 'Fintech Mobile Apps', href: '/software-development/mobile-app/fintech' },
    ],
  },
  {
    heading: 'Design',
    links: [
      { name: 'UX Audit', href: '/ui-ux-design/ux-audit' },
      { name: 'Fintech UI/UX Design', href: '/ui-ux-design/fintech' },
    ],
  },
  {
    heading: 'Talent & Resources',
    links: [
      { name: 'IT Staff Augmentation', href: '/staff-augmentation' },
      { name: 'Staff Aug vs Outsourcing (Blog)', href: '/blog/staff-augmentation-vs-outsourcing' },
    ],
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isServicesOpen]);

  // Close everything on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  const goToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  const goToPage = (href: string) => {
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileMenuOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const goHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-5 sm:px-10 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              goHome();
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
              href="/#about"
              onClick={(e) => { e.preventDefault(); goToSection('about'); }}
              className="text-gray-700 hover:text-amber-400 transition-colors font-medium"
            >
              About
            </a>

            {/* Services dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1 text-gray-700 hover:text-amber-400 transition-colors font-medium ${
                  isServicesOpen ? 'text-amber-500' : ''
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[920px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  role="menu"
                >
                  <div className="grid grid-cols-4 gap-x-5 gap-y-6 p-6">
                    {serviceGroups.map((group) => (
                      <div key={group.heading}>
                        <h4 className="text-amber-600 text-xs font-bold tracking-wider uppercase mb-3 pb-2 border-b border-amber-100">
                          {group.heading}
                        </h4>
                        <ul className="space-y-1">
                          {group.links.map((link) => (
                            <li key={link.href}>
                              <button
                                onClick={() => goToPage(link.href)}
                                className="block w-full text-left text-sm text-gray-700 hover:text-amber-500 hover:bg-amber-50 px-2 py-1.5 -mx-2 rounded-md transition-colors font-medium leading-snug"
                                role="menuitem"
                              >
                                {link.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 px-6 py-4 border-t border-amber-100 flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Not sure where to start?</span>{' '}
                      Talk to our team.
                    </div>
                    <button
                      onClick={() => { setIsServicesOpen(false); goToSection('contact'); }}
                      className="text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors whitespace-nowrap"
                    >
                      Book a call →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/#solutions"
              onClick={(e) => { e.preventDefault(); goToSection('solutions'); }}
              className="text-gray-700 hover:text-amber-400 transition-colors font-medium"
            >
              Solutions
            </a>
            <a
              href="/#why-us"
              onClick={(e) => { e.preventDefault(); goToSection('why-us'); }}
              className="text-gray-700 hover:text-amber-400 transition-colors font-medium"
            >
              Why Us
            </a>
            <a
              href="/#testimonials"
              onClick={(e) => { e.preventDefault(); goToSection('testimonials'); }}
              className="text-gray-700 hover:text-amber-400 transition-colors font-medium"
            >
              Testimonials
            </a>
            <Button
              onClick={() => goToSection('contact')}
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
          <nav className="lg:hidden py-6 space-y-1 bg-white absolute top-20 left-0 right-0 shadow-xl border-t border-gray-100 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <a
              href="/#about"
              onClick={(e) => { e.preventDefault(); goToSection('about'); }}
              className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
            >
              About
            </a>

            {/* Mobile Services group */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-left px-6 py-3 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
                aria-expanded={isMobileServicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="px-6 pb-2 space-y-4 bg-amber-50/30">
                  {serviceGroups.map((group) => (
                    <div key={group.heading} className="pt-3">
                      <div className="text-amber-600 text-xs font-bold tracking-wider uppercase mb-2 px-2">
                        {group.heading}
                      </div>
                      <ul className="space-y-1">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <button
                              onClick={() => goToPage(link.href)}
                              className="block w-full text-left text-sm text-gray-700 hover:text-amber-500 hover:bg-white px-3 py-2 rounded-md transition-colors"
                            >
                              {link.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/#solutions"
              onClick={(e) => { e.preventDefault(); goToSection('solutions'); }}
              className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
            >
              Solutions
            </a>
            <a
              href="/#why-us"
              onClick={(e) => { e.preventDefault(); goToSection('why-us'); }}
              className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
            >
              Why Us
            </a>
            <a
              href="/#testimonials"
              onClick={(e) => { e.preventDefault(); goToSection('testimonials'); }}
              className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
            >
              Testimonials
            </a>
            <div className="px-6 pt-3">
              <Button
                onClick={() => goToSection('contact')}
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
