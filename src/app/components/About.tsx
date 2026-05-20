import { ShieldCheck, Zap, AlertCircle, TrendingUp, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-amber-50/30 relative overflow-hidden">
      {/* Honeycomb background pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-[0.02] text-amber-500"></div>

      <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-amber-600 text-sm font-bold tracking-wider uppercase mb-4">
            About TechHive
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Empowering Financial Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic technology partner for the next generation of banking and fintech platforms.
          </p>
        </motion.div>

        {/* Narrative Bridge Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="relative">
            {/* The Bridge Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-stretch px-4 sm:px-0">
              {/* Left Side: The Challenge */}
              <div className="lg:col-span-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="pt-0.5">
                    <TrendingUp className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">The Industry Challenge</h3>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                  <p>
                    Banks and fintechs today are under pressure to launch faster while
                    maintaining stability, compliance, and customer trust.
                  </p>
                  <p className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <span>
                      Yet many releases still go live with limited validation, leading to defects, 
                      performance issues, and customer impact.
                    </span>
                  </p>
                </div>
              </div>

              {/* Center: The Bridge */}
              <div className="lg:col-span-3 flex flex-col items-center justify-center py-8 lg:py-0 px-4">
                <div className="w-full flex items-center justify-center relative">
                  <div className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent hidden lg:block"></div>
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: ["0 0 0px #fbbf24", "0 0 15px #fbbf24", "0 0 0px #fbbf24"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="z-10 bg-amber-400 p-4 rounded-full shadow-lg shadow-amber-400/50 flex items-center justify-center"
                  >
                    <Zap className="w-8 h-8 text-black fill-black" />
                  </motion.div>
                </div>
                <div className="mt-6 text-center">
                  <span className="text-lg sm:text-xl font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-5 py-1.5 rounded-full border border-amber-200 inline-block shadow-sm mb-2">
                    THE BRIDGE
                  </span>
                  <p className="mt-2 text-sm sm:text-base font-semibold text-gray-600 italic">
                    "Tech Hive bridges this gap."
                  </p>
                </div>
              </div>

              {/* Right Side: The Solution */}
              <div className="lg:col-span-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-1 h-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="pt-0.5">
                    <ShieldCheck className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Full Strategic Delivery</h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    We provide high-quality resources for your entity’s special projects 
                    at <strong>lightning speed</strong>, ensuring your innovations are production-ready.
                  </p>
                  <p className="flex gap-3">
                    <Layers className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <span>
                      We combine fintech expertise, structured QA automation, and global 
                      partnerships to ensure every platform is built, tested, and launched right.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Connecting mobile line */}
            <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-amber-300 to-transparent -translate-x-1/2 -z-10"></div>
          </div>
        </motion.div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border-2 border-amber-200"
        >
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-5 text-sm sm:text-base md:text-lg lg:text-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
              Who We Are
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-center font-medium">
              <p>
                Tech Hive is a Banking & Fintech focused technology partner supporting banks, payment providers, and digital platforms.
              </p>
              <p>
                We go beyond traditional resourcing by embedding domain expertise, structured delivery, and quality assurance into every engagement.
              </p>
              <p>
                Our teams operate as an extension of your organisation, ensuring accountability, speed, and measurable outcomes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}