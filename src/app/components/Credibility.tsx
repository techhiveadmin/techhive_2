import { motion } from 'motion/react';
import { CreditCard, MonitorSmartphone, Landmark, Building2, ShieldCheck } from 'lucide-react';

export function Credibility() {
  const experiences = [
    {
      icon: CreditCard,
      title: 'Large-scale payment systems',
      description: 'Architecting high-volume, secure transaction networks.',
      color: 'text-amber-600',
      bg: 'bg-amber-100'
    },
    {
      icon: MonitorSmartphone,
      title: 'Digital banking platforms',
      description: 'Building robust, modern banking interfaces and core systems.',
      color: 'text-amber-600',
      bg: 'bg-amber-100'
    },
    {
      icon: Landmark,
      title: 'National-level digitisation',
      description: 'Leading nationwide digital infrastructure initiatives.',
      color: 'text-amber-600',
      bg: 'bg-amber-100'
    },
    {
      icon: Building2,
      title: 'Enterprise fintech implementations',
      description: 'Deploying complex financial technologies at enterprise scale.',
      color: 'text-amber-600',
      bg: 'bg-amber-100'
    }
  ];

  return (
    <section id="credibility" className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10 opacity-50" />
      
      <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-amber-600 text-sm font-bold tracking-wider uppercase mb-6">
                Credibility & Experience
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Decades of <span className="text-[#ffb900]">proven expertise</span> in fintech.
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-amber-400 pl-6 rounded-r-lg bg-gradient-to-r from-amber-50/50 to-transparent py-2">
                Our leadership brings decades of experience across banking, fintech, and digital transformation. We have actively contributed to shaping modern financial infrastructures.
              </p>

              {/* The "Outcome/Practical Experience" Quote */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-10 shadow-xl relative overflow-hidden group border border-gray-700">
                 <div className="absolute -right-10 -top-10 w-48 h-48 bg-amber-500/20 blur-[60px] rounded-full group-hover:bg-amber-400/30 transition-colors duration-700" />
                 <p className="text-xl md:text-2xl font-semibold text-white leading-snug relative z-10 flex flex-col gap-4">
                   <span className="text-amber-500 text-6xl leading-none absolute -top-6 -left-4 opacity-40 font-serif">"</span>
                   <span className="relative z-10 pl-6 lg:pl-8 italic">
                     We bring practical experience, not just technical capability.
                   </span>
                 </p>
              </div>
            </motion.div>
          </div>

          {/* Right Grid Column */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {/* Decorative faint grid background */}
              <div className="absolute inset-0 honeycomb-pattern opacity-[0.03] pointer-events-none text-amber-500" />

              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 left-0 w-1 h-full bg-amber-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 opacity-0 group-hover:opacity-100`} />
                  
                  <div className="mb-5 transition-transform duration-500 group-hover:scale-110 text-amber-500">
                    <exp.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
