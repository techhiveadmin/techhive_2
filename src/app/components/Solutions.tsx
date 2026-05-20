"use client";

import { useState, useEffect } from 'react';
import { ShieldCheck, Users, Server, Layout, Globe, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Solutions() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % solutions.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) { // 50px swipe threshold
      if (diff > 0) handleNext();
      else handlePrev();
      setTouchStart(null); // Prevent multiple triggers during one swipe
    }
  };

  const solutions = [
    {
      icon: ShieldCheck,
      title: 'Managed QA Services',
      subtitle: 'Ensure every release is fully validated before reaching customers.',
      description: 'We provide end-to-end QA automation and managed UAT services designed specifically for banking and fintech platforms.',
      capabilitiesTitle: 'Key capabilities',
      capabilities: [
        'Automated UAT and regression testing',
        'End-to-end transaction validation'
      ],
      outcome: 'Stable, production-ready releases with minimal defect leakage.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080',
    },
    {
      icon: Users,
      title: 'Project Based Resources',
      subtitle: 'Access fintech-ready specialists without the delays of traditional hiring.',
      description: 'We provide highly skilled professionals with real-world experience in banking, payments, and digital platforms.',
      capabilitiesTitle: 'Roles include',
      capabilities: [
        'QA & Automation Engineers',
        'Backend & Frontend Developers',
        'Business Analysts (Fintech)',
        'DevOps & Infrastructure Engineers'
      ],
      outcome: 'Faster execution with domain-ready teams.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080',
    },
    {
      icon: Server,
      title: 'DevOps & Infrastructure',
      subtitle: 'Build, deploy, and scale with confidence.',
      description: 'We ensure your infrastructure is secure, stable, and optimised for high-performance fintech environments.',
      capabilitiesTitle: 'Capabilities',
      capabilities: [
        'CI/CD pipelines',
        'Cloud deployment and optimisation',
        'Monitoring and alerting systems',
        'Security and compliance hardening',
        'Backup and disaster recovery'
      ],
      image: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ0fHxkZXZvcHN8ZW58MHx8MHx8fDA%3D',
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      subtitle: 'Design intuitive, modern, and high-performing digital experiences.',
      description: 'We create user interfaces tailored for banking and fintech platforms, combining usability with superior performance.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1080',
    },
    {
      icon: Globe,
      title: 'Global Fintech Partnerships',
      subtitle: 'Not everything needs to be built from scratch.',
      description: 'We enable banks to adopt world-class platforms through global partnerships. Strong relationships with globally renowned MNCs enable capabilities that are otherwise complex to build natively.',
      capabilitiesTitle: 'We support with',
      capabilities: [
        'Global Fraud management systems',
        '3DS authentication platforms',
        'Established Payment switching (ISO 8583)',
        'Security and compliance platforms',
        'Advanced fintech infrastructure'
      ],
      outcome: 'Faster innovation with proven, enterprise-grade solutions.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1080',
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % solutions.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isPaused, solutions.length]);

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative honeycomb elements for background */}
      <div className="absolute top-0 right-0 w-64 h-64 honeycomb-pattern opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 honeycomb-pattern opacity-5"></div>

      <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-amber-600 text-sm font-bold tracking-wider uppercase mb-4">
            Our Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Hive-Powered Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert developers delivering exceptional results across all tech domains
          </p>
        </motion.div>

        {/* Premium Showcase Container */}
        <div 
          className="bg-neutral-950 rounded-[2rem] p-4 sm:p-6 md:p-10 shadow-2xl overflow-hidden relative border border-neutral-800/50"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle glow effects inside the dark container */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

          <div 
            className="flex flex-col lg:flex-row gap-6 lg:gap-10 relative z-10"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setTouchStart(null)}
          >
            {/* Left Navigation (Tabs) */}
            <div className="lg:w-1/3 relative select-none">
              
              {/* Mobile / Tablet UI (Single Active Tab Carousel) */}
              <div className="lg:hidden flex items-center justify-between bg-white/5 border border-white/10 rounded-[1.25rem] p-3 sm:p-4 mb-2 shadow-lg backdrop-blur-md min-h-[72px] sm:min-h-[80px]">
                <button 
                  onClick={handlePrev}
                  className="bg-neutral-800 text-neutral-400 hover:text-amber-400 p-2 sm:p-2.5 rounded-full shadow-lg border border-white/5 backdrop-blur-md transition-colors flex-shrink-0"
                  aria-label="Previous solution"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex items-center justify-center gap-3 sm:gap-4 flex-1 px-1">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)] flex-shrink-0">
                    {(() => {
                      const ActiveIcon = solutions[activeTab].icon;
                      return <ActiveIcon size={18} className="sm:w-5 sm:h-5" />;
                    })()}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="font-semibold text-[13px] sm:text-sm text-white tracking-tight leading-[1.15] line-clamp-2 text-left"
                    >
                      {solutions[activeTab].title}
                    </motion.h3>
                  </AnimatePresence>
                </div>
                
                <button 
                  onClick={handleNext}
                  className="bg-neutral-800 text-amber-400 p-2 sm:p-2.5 rounded-full border border-amber-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-colors animate-pulse hover:animate-none flex-shrink-0"
                  aria-label="Next solution"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Desktop UI (Vertical List) */}
              <div className="hidden lg:flex flex-col gap-3">
              {solutions.map((sol, i) => {
                const isActive = activeTab === i;
                const Icon = sol.icon;
                return (
                  <button
                    key={sol.title}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-4 p-5 text-left rounded-2xl transition-all duration-300 w-full group ${
                      isActive
                        ? 'bg-gradient-to-r from-white/10 to-transparent shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/10'
                        : 'hover:bg-white/5 opacity-60 hover:opacity-100 border border-transparent'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-xl flex-shrink-0 transition-colors duration-300 ${
                        isActive
                          ? 'bg-amber-500/20 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                          : 'bg-neutral-800 text-neutral-400 group-hover:text-neutral-200'
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3
                        className={`font-semibold text-lg transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                        }`}
                      >
                        {sol.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:w-2/3 relative min-h-[550px] sm:min-h-[600px] lg:min-h-[650px] rounded-[1.5rem] overflow-hidden bg-neutral-900 border border-white/5 grid">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="[grid-area:1/1] relative flex flex-col w-full h-full"
                >
                  {/* Background Image Setup */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-out scale-100 hover:scale-105"
                    style={{ backgroundImage: `url(${solutions[activeTab].image})` }}
                  />

                  {/* Gradient Masks */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/20 lg:bg-gradient-to-r lg:from-neutral-950/95 lg:via-neutral-950/70 lg:to-transparent" />

                  {/* Text Content Overlay */}
                  <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex flex-col h-full flex-grow">
                    <div className="lg:max-w-xl mt-auto lg:mt-0 lg:my-auto pt-44 sm:pt-48 lg:pt-0 pb-4 lg:pb-0">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {/* Dynamic Icon Badge */}
                        <div className="inline-flex items-center gap-2 text-amber-500 text-sm font-bold tracking-wide uppercase mb-6 drop-shadow-sm">
                          {(() => {
                            const ActiveIcon = solutions[activeTab].icon;
                            return <ActiveIcon size={18} />;
                          })()}
                          {solutions[activeTab].title}
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
                          {solutions[activeTab].subtitle}
                        </h3>

                        <p className="text-sm sm:text-base lg:text-lg text-neutral-300 mb-6 sm:mb-8 leading-relaxed font-medium">
                          {solutions[activeTab].description}
                        </p>

                        {solutions[activeTab].capabilities && (
                          <div className="mb-8">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-500/90 mb-4">
                              {solutions[activeTab].capabilitiesTitle}
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 sm:gap-y-3 gap-x-6">
                              {solutions[activeTab].capabilities.map((cap, idx) => (
                                <li key={idx} className="flex items-start text-neutral-200 text-xs sm:text-sm font-medium">
                                  <CheckCircle size={18} className="text-amber-500 mr-2.5 shrink-0 mt-0.5 opacity-80" />
                                  <span className="leading-snug">{cap}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {solutions[activeTab].outcome && (
                          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md inline-block shadow-lg">
                            <p className="text-sm">
                              <span className="text-amber-500/80 font-semibold uppercase tracking-wider mr-2 text-xs">Outcome:</span>
                              <span className="text-white font-medium">{solutions[activeTab].outcome}</span>
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}