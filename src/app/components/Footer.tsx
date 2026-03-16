import { Facebook, Twitter, Linkedin, Instagram, Github, Mail } from 'lucide-react';
import logo from '../../assets/TechHive.webp';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Solutions', href: '#solutions' },
      { name: 'Why TechHive', href: '#why-us' },
      { name: 'Testimonials', href: '#testimonials' },
    ],
    services: [
      { name: 'Web Development', href: '#solutions' },
      { name: 'Mobile Development', href: '#solutions' },
      { name: 'Cloud Solutions', href: '#solutions' },
      { name: 'AI & Machine Learning', href: '#solutions' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-black text-gray-300 relative overflow-hidden">
      {/* Honeycomb pattern overlay */}
      <div className="absolute inset-0 honeycomb-pattern opacity-5"></div>

      {/* Decorative amber glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>

      <div className="container mx-auto px-5 sm:px-10 lg:px-20 py-12 sm:py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12"
        >
          {/* Brand Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-center sm:justify-start space-x-3 mb-5 sm:mb-6 cursor-pointer focus:outline-none"
              aria-label="Navigate to top"
            >
              <img src={logo} alt="TechHive" className="h-12 sm:h-14 md:h-16 w-auto" />
            </button>
            <p className="text-gray-400 mb-6 max-w-xs text-sm leading-relaxed mx-auto sm:mx-0">
              Connecting elite tech talent with transformative projects.
              Building the future of technology, one developer at a time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-gray-900/50 rounded flex items-center justify-center hover:bg-amber-400 transition-all group border border-gray-800 hover:border-amber-400"
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Empty column for spacing as requested */}
          <div className="hidden lg:block"></div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-start lg:pl-8">
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col items-start lg:pl-8">
            <h3 className="text-white font-bold mb-6 text-lg">Our Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              © {currentYear} TechHive. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Designed by{' '}
              <a
                href="#"
                className="text-[#f0d54b] hover:text-[#ffc900] transition-colors font-medium hover:underline decoration-1 underline-offset-4"
              >
                TechHive
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}