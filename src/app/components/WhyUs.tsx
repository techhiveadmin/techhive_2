import { ShieldCheck, Zap, Rocket, Search, BarChart3, Globe, Layout } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function WhyUs() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Banking & Fintech Expertise',
      description: 'Deep domain knowledge in digital banking, payments, and complex fintech ecosystems.',
    },
    {
      icon: Zap,
      title: 'Automated QA-First',
      description: 'Comprehensive test cycles that avoid production risks and ensure platform stability.',
    },
    {
      icon: Rocket,
      title: 'Rapid Talent Mobilisation',
      description: 'Swift deployment of specialised banking and fintech professionals at lightning speed.',
    },
    {
      icon: Search,
      title: 'Independent Validation',
      description: 'Expert, unbiased validation of vendor-built platforms for guaranteed quality.',
    },
    {
      icon: BarChart3,
      title: 'Delivery Visibility',
      description: 'Measurable delivery metrics and reporting that provide full project transparency.',
    },
    {
      icon: Globe,
      title: 'Global Fintech Solutions',
      description: 'Direct access to world-class fintech platforms and global technology insights.',
    },
    {
      icon: Layout,
      title: 'Flexible Project Alignment',
      description: 'Scalable engagement models perfectly tailored to your project’s specific needs.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-200/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MjQ1MjU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Software development workspace"
                className="w-full h-auto"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-400 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block text-amber-600 text-sm font-bold tracking-wider uppercase mb-4">
              Why Choose TechHive
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Partner in Tech Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              We don't just provide developers, we deliver peace of mind. Here's why
              leading companies trust TechHive with their most critical projects.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 pt-1">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}