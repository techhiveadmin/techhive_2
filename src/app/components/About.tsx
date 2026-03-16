import { Target, Eye, Flag } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

export function About() {
  const pillars = [
    {
      icon: Target,
      title: 'Mission',
      description:
        'To empower businesses with cutting-edge technology solutions by connecting them with elite tech talent, fostering innovation and driving digital transformation across industries.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description:
        'To be the leading tech talent marketplace in South Asia, recognized for excellence in matching world-class developers with transformative projects that shape the future.',
    },
    {
      icon: Flag,
      title: 'Objectives',
      description:
        'Build a thriving community of tech professionals, deliver exceptional project outcomes, maintain 98%+ client satisfaction, and establish Sri Lanka as a global tech talent hub.',
    },
  ];


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
          <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-4 border border-amber-200">
            About TechHive
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Building the Future Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TechHive is more than a platform—it's a thriving ecosystem where talented
            developers and innovative companies come together to create exceptional digital experiences.
          </p>
        </motion.div>

        {/* Mission, Vision, Objectives Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 md:mb-16"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={pillar.title} variants={itemVariants} className="h-full">
                <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100 h-full overflow-hidden z-10">
                  {/* Icon — scaled responsively */}
                  <div className="mb-4 sm:mb-6 inline-block">
                    <Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#ffc900] stroke-[1.5]" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Decorative hexagon element — optional: you can also tint this if you want */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc900]/5 hexagon -z-10 group-hover:scale-150 transition-transform duration-500 blur-xl"></div>

                  {/* Bottom accent line — changed to #ffc900 */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffc900] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </div>
              </motion.div>
            );
          })}
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
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in the heart of Sri Lanka's burgeoning tech ecosystem, TechHive
                has quickly become the go-to platform for companies seeking top-tier
                technical talent. We understand that great software isn't just about
                code—it's about the brilliant minds behind it.
              </p>
              <p>
                Our rigorous vetting process ensures that every developer in our network
                represents the best of Sri Lankan tech talent. From full-stack developers
                to specialized AI engineers, from mobile app wizards to cloud architects—we
                have the expertise your project needs.
              </p>
              <p>
                What sets us apart is our commitment to quality, transparency, and
                long-term partnerships. We don't just connect you with developers; we
                ensure they're the perfect fit for your project's unique requirements
                and company culture.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}