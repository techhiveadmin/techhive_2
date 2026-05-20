import { ReactNode } from 'react';
import { ArrowRight, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ui/button';

export interface BlogPostLayoutProps {
  category: string;
  title: string;
  subtitle: string;
  readTime: string;
  date: string;
  children: ReactNode;
}

export function BlogPostLayout({
  category,
  title,
  subtitle,
  readTime,
  date,
  children,
}: BlogPostLayoutProps) {
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-neutral-950">
          <div className="absolute inset-0 honeycomb-pattern opacity-5 text-amber-400"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>

          <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to TechHive
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-4"
              >
                <span className="inline-block text-amber-400 text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5">
                  {category}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-5"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-lg sm:text-xl text-amber-50/90 leading-relaxed mb-6"
              >
                {subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-400"
              >
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {readTime}
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ARTICLE CONTENT */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-5 sm:px-10 lg:px-20">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto prose-techhive"
            >
              {children}
            </motion.article>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Not sure which model fits your project?
              </h2>
              <p className="text-lg text-amber-50/90 leading-relaxed">
                Talk to our team. We'll help you scope your engagement and pick the right delivery model for your goals, budget, and timeline.
              </p>
              <div className="pt-2">
                <Button
                  size="lg"
                  className="font-poppins font-semibold text-base sm:text-lg px-8 py-6 group bg-amber-400 hover:bg-amber-500 text-black shadow-lg shadow-amber-500/40"
                  onClick={goToContact}
                >
                  Book a Free Consultation
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
