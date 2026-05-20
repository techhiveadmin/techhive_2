import { ReactNode } from 'react';
import { ArrowRight, CheckCircle, type LucideIcon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ui/button';

export interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServicePageProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  heroImage?: string;
  overview: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  capabilities: {
    eyebrow: string;
    heading: string;
    subheading?: string;
    items: Capability[];
  };
  whyUs: {
    eyebrow: string;
    heading: string;
    subheading?: string;
    items: Capability[];
  };
  process?: {
    eyebrow: string;
    heading: string;
    steps: ProcessStep[];
  };
  cta?: {
    heading: string;
    subtitle: string;
    primaryText?: string;
  };
}

export function ServicePageLayout({
  eyebrow,
  title,
  subtitle,
  heroImage,
  overview,
  capabilities,
  whyUs,
  process,
  cta,
}: ServicePageProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const goToContact = () => {
    if (location.pathname === '/') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  const goToSolutions = () => {
    if (location.pathname === '/') {
      const el = document.getElementById('solutions');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#solutions');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-neutral-950">
          {heroImage && (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
              aria-hidden="true"
            />
          )}
          {heroImage && (
            <div
              className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/85 to-black/90"
              aria-hidden="true"
            />
          )}
          <div className="absolute inset-0 honeycomb-pattern opacity-5 text-amber-400"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

          <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="inline-block text-amber-400 text-sm font-bold tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5">
                  {eyebrow}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl text-amber-50/90 max-w-3xl mx-auto leading-relaxed"
              >
                {subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
              >
                <Button
                  size="lg"
                  className="font-poppins font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto group bg-amber-400 hover:bg-amber-500 text-black shadow-lg shadow-amber-500/40"
                  onClick={goToContact}
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-poppins text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto border-2 border-amber-400/50 text-amber-300 hover:border-amber-400 hover:text-amber-200 font-bold bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 rounded-md"
                  onClick={goToSolutions}
                >
                  Explore All Solutions
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-amber-50/30 relative overflow-hidden">
          <div className="absolute inset-0 honeycomb-pattern opacity-[0.02] text-amber-500"></div>
          <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-block text-amber-600 text-sm font-bold tracking-wider uppercase mb-4">
                {overview.eyebrow}
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                {overview.heading}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 sm:p-10 md:p-12 border-2 border-amber-200 shadow-sm"
            >
              <div className="space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg text-center">
                {overview.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-5 sm:px-10 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-block text-amber-600 text-sm font-bold tracking-wider uppercase mb-4">
                {capabilities.eyebrow}
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                {capabilities.heading}
              </h2>
              {capabilities.subheading && (
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  {capabilities.subheading}
                </p>
              )}
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {capabilities.items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-amber-200/40 hover:border-amber-300 transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-amber-50/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 honeycomb-pattern opacity-[0.03] text-amber-500"></div>
          <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-block text-amber-600 text-sm font-bold tracking-wider uppercase mb-4">
                {whyUs.eyebrow}
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                {whyUs.heading}
              </h2>
              {whyUs.subheading && (
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  {whyUs.subheading}
                </p>
              )}
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {whyUs.items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex gap-4 sm:gap-5"
                  >
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-amber-200">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl mb-1.5 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS (optional) */}
        {process && (
          <section className="py-20 sm:py-24 bg-neutral-950 relative overflow-hidden">
            <div className="absolute inset-0 honeycomb-pattern opacity-5 text-amber-400"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 sm:mb-16"
              >
                <div className="inline-block text-amber-400 text-sm font-bold tracking-wider uppercase mb-4">
                  {process.eyebrow}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                  {process.heading}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {process.steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.07] transition-colors"
                  >
                    <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-br from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-3 leading-none">
                      {step.number}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA BANNER */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 honeycomb-pattern opacity-5 text-amber-400"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-400 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

          <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center space-y-6"
            >
              <div className="flex justify-center mb-2">
                <CheckCircle className="w-10 h-10 text-amber-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {cta?.heading || 'Ready to accelerate your delivery?'}
              </h2>
              <p className="text-lg sm:text-xl text-amber-50/90 leading-relaxed">
                {cta?.subtitle || "Let's talk about how TechHive can help your team ship faster, with production-grade quality."}
              </p>
              <div className="pt-2">
                <Button
                  size="lg"
                  className="font-poppins font-semibold text-base sm:text-lg px-8 py-6 group bg-amber-400 hover:bg-amber-500 text-black shadow-lg shadow-amber-500/40"
                  onClick={goToContact}
                >
                  {cta?.primaryText || 'Book a Free Consultation'}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
