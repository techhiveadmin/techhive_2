import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { motion, AnimatePresence, useMotionValue, animate, useInView, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimal?: boolean; // for 4.9 style
}

function AnimatedCounter({
  end,
  duration = 2.5,
  suffix = '',
  decimal = false,
}: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-120px 0px -20% 0px', // trigger a bit earlier (like in hero)
  });

  useEffect(() => {
    if (isInView) {
      animate(count, end, {
        duration,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [isInView]);

  const display = useTransform(count, (latest) => {
    if (decimal) {
      return latest.toFixed(1) + suffix;
    }
    return Math.round(latest).toLocaleString('en-US') + suffix;
  });

  return (
    <div ref={ref} className="inline-block">
      <motion.div
        className="text-4xl font-bold text-amber-400 tabular-nums"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {display}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CTO',
      company: 'InnovateTech Solutions',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      content:
        'TechHive transformed our development process. The developers they provided were not only technically excellent but also aligned perfectly with our company culture. We completed our project 2 weeks ahead of schedule!',
      rating: 5,
    },
    {
      name: 'James Chen',
      role: 'Product Manager',
      company: 'CloudScale Inc',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      content:
        'Working with TechHive has been a game-changer. Their talent pool is exceptional, and the onboarding process was seamless. Our mobile app has received outstanding feedback from users.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'CEO',
      company: 'DataDriven Analytics',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      content:
        'The AI/ML specialists we hired through TechHive exceeded all expectations. They delivered a sophisticated recommendation engine that increased our user engagement by 45%. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      role: 'Engineering Director',
      company: 'FinTech Ventures',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
      content:
        'Security is paramount in our industry, and TechHive connected us with cybersecurity experts who fortified our infrastructure. Their professionalism and expertise are unmatched.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Honeycomb pattern overlay */}
      <div className="absolute inset-0 honeycomb-pattern opacity-5"></div>

      {/* Decorative amber accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-amber-400/20 backdrop-blur-sm rounded-full text-amber-400 text-sm font-medium mb-4 border border-amber-400/30">
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it—hear from companies who have
            transformed their projects with TechHive talent.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
            <div className="relative">
              <Quote className="w-16 h-16 text-amber-400 opacity-50 absolute -top-4 -left-2" />

              <div className="relative z-10 min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35 }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-6 sm:mb-8 italic leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 ring-2 ring-amber-400"
                      />
                      <div>
                        <div className="font-bold text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-amber-400">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="text-white hover:bg-amber-400/10 hover:text-amber-400"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${index === currentIndex
                      ? 'bg-amber-400 w-8'
                      : 'bg-white/40 hover:bg-white/60 w-2'
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="text-white hover:bg-amber-400/10 hover:text-amber-400"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </Card>

          {/* Stats – now animated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16 text-center"
          >
            <div className="py-2 sm:py-0">
              <AnimatedCounter end={50} suffix="+" />
              <div className="text-sm sm:text-base mt-1.5 sm:mt-2 text-gray-300">Happy Clients</div>
            </div>

            <div className="py-2 sm:py-0">
              <AnimatedCounter end={150} suffix="+" />
              <div className="text-sm sm:text-base mt-1.5 sm:mt-2 text-gray-300">Projects Completed</div>
            </div>

            <div className="py-2 sm:py-0">
              <AnimatedCounter end={4.9} suffix="" />
              <div className="text-sm sm:text-base mt-1.5 sm:mt-2 text-gray-300">Average Rating</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}