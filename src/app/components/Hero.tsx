import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { motion, useMotionValue, animate, useInView, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 2.8, suffix = '' }: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-90px 0px -10% 0px", // more forgiving trigger area
  });

  useEffect(() => {
    if (isInView) {
      animate(count, end, {
        duration,
        ease: [0.16, 1, 0.3, 1], // smooth, modern feel
      });
    }
  }, [isInView, end, duration, count]);

  // Reactive formatted value (prevents layout jump + handles rounding)
  const display = useTransform(count, (latest) => {
    return Math.round(latest).toLocaleString('en-US') + suffix;
  });

  return (
    <div ref={ref} className="inline-block w-full">
      <motion.div
        className="text-3xl font-bold text-amber-400 tabular-nums"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span>{display}</motion.span>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-20 sm:pt-28 pb-6 sm:pb-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1758691737387-a89bb8adf768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzcyNTI2NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/75 to-black/80"></div>

      {/* Honeycomb Pattern Background */}
      <div className="absolute inset-0 honeycomb-pattern opacity-5 text-amber-400"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-amber-300 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/20 backdrop-blur-sm rounded-full text-amber-300 text-sm border border-amber-400/30"
          >
            <Sparkles className="w-4 h-4" />
            <span>Buzzing with Innovation Since 2024</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white px-2 sm:px-4 md:px-0"
          >
            The Hive Mind of{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Elite Tech Talent
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-amber-50 max-w-[90%] sm:max-w-3xl mx-auto px-2 sm:px-4 md:px-0 leading-relaxed"
          >
            Connect with Sri Lanka's finest tech professionals. We bridge the gap
            between exceptional talent and transformative projects, delivering
            solutions that drive your business forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0"
          >
            <Button
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto group bg-amber-400 hover:bg-amber-500 text-black shadow-lg shadow-amber-500/50 hover:shadow-amber-400/50"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto border-2 border-[#ffb900] text-[#ffb900] hover:border-[#f99701] hover:text-[#f99701] font-bold bg-[#2a2824] hover:bg-[#33312e] transition-all duration-300 rounded-2xl shadow-xl hover:shadow-amber-500/10 hover:scale-[1.02]"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-1.5 sm:-inset-2 bg-amber-400 opacity-20 rounded-lg blur-sm sm:blur"></div>
              <div className="relative bg-black/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-amber-400/30">
                <AnimatedCounter end={500} suffix="+" />
                <div className="text-[10px] sm:text-sm text-amber-100 text-center mt-1.5 sm:mt-2">Tech Experts</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1.5 sm:-inset-2 bg-amber-400 opacity-20 rounded-lg blur-sm sm:blur"></div>
              <div className="relative bg-black/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-amber-400/30">
                <AnimatedCounter end={150} suffix="+" />
                <div className="text-[10px] sm:text-sm text-amber-100 text-center mt-1.5 sm:mt-2">Projects Delivered</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1.5 sm:-inset-2 bg-amber-400 opacity-20 rounded-lg blur-sm sm:blur"></div>
              <div className="relative bg-black/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-amber-400/30">
                <AnimatedCounter end={98} suffix="%" />
                <div className="text-[10px] sm:text-sm text-amber-100 text-center mt-1.5 sm:mt-2">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}