import { Code, Smartphone, Cloud, Brain, Database, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function Solutions() {
  const solutions = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, scalable web applications',
      color: 'from-amber-400 to-yellow-500',
      image: 'https://images.unsplash.com/photo-1763568258535-fa1066506571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI5MzA2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps',
      color: 'from-yellow-400 to-amber-500',
      image: 'https://images.unsplash.com/photo-1772235231771-f17980e811e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwJTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzcyOTkyNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'AWS, Azure, and Google Cloud expertise',
      color: 'from-amber-500 to-yellow-600',
      image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHNlcnZlciUyMGRhdGElMjBjZW50ZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzAzMTQ2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions and data insights',
      color: 'from-yellow-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzAwNTA4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Big data solutions and ETL pipelines',
      color: 'from-amber-600 to-yellow-700',
      image: 'https://images.unsplash.com/photo-1721593979313-8661afd501c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5naW5lZXJpbmclMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzczMDMxMDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security audits and digital protection',
      color: 'from-yellow-600 to-amber-700',
      image: 'https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbCUyMHNlY3VyaXR5fGVufDF8fHx8MTc3MzAxOTY4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Honeycomb decorative elements */}
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
          <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-4 border border-amber-200">
            Our Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hive-Powered Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert developers delivering exceptional results across all tech domains
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="group cursor-pointer border-2 border-transparent hover:border-amber-400 relative overflow-hidden h-auto min-h-[260px] sm:min-h-[300px] md:min-h-[340px] transition-all duration-300 hover:shadow-2xl rounded-xl"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${solution.image})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-amber-900/90 group-hover:via-amber-900/60 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {solution.title}
                  </h3>
                  <p className="text-amber-100 text-sm">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-amber-600 font-semibold hover:text-amber-700 underline underline-offset-4 decoration-2 decoration-amber-400 text-lg"
          >
            Need something specific? Let's talk →
          </button>
        </motion.div>
      </div>
    </section>
  );
}