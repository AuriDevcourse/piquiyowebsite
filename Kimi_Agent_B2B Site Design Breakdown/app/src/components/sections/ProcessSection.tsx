import { motion } from 'framer-motion';
import { FadeUp } from '@/components/animations/FadeUp';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep dive into your challenges, goals, and constraints to build a complete picture.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Develop a clear roadmap with milestones, deliverables, and success metrics.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Rapid, iterative delivery with weekly check-ins and continuous feedback.',
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Refine, measure, and improve based on real-world performance data.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-gradient-to-b from-[#202020] to-[#1A1A1A]">
      <div className="container-max mx-auto">
        {/* Section Header */}
        <FadeUp className="text-center mb-16">
          <p className="text-caption text-vermilion uppercase tracking-widest mb-4">
            Our Process
          </p>
          <h2 className="font-display text-section text-white mb-6">
            How We Work
          </h2>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
            A proven methodology that delivers consistent results, project after project.
          </p>
        </FadeUp>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[3.5rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-vermilion/30 via-vermilion/50 to-vermilion/30 origin-left"
            />

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + index * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="text-center"
                >
                  {/* Node */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 w-28 h-28 mx-auto mb-8 rounded-full bg-[#2A2A2A] border-2 border-vermilion/30 flex items-center justify-center group hover:border-vermilion transition-colors duration-300"
                  >
                    <span className="font-display text-3xl font-semibold text-vermilion">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile/Tablet */}
        <div className="lg:hidden">
          <div className="relative space-y-8">
            {/* Vertical Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-vermilion/30 via-vermilion/50 to-vermilion/30 origin-top"
            />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="flex gap-6 relative"
              >
                {/* Node */}
                <div className="relative z-10 w-14 h-14 flex-shrink-0 rounded-full bg-[#2A2A2A] border-2 border-vermilion/30 flex items-center justify-center">
                  <span className="font-display text-lg font-semibold text-vermilion">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="font-display text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
