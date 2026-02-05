import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { FadeUp } from '@/components/animations/FadeUp';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ value, suffix, label, delay }: StatItemProps) {
  const { count, elementRef } = useCountUp({
    end: value,
    duration: 2000,
    startOnView: true,
  });

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="text-center"
    >
      <p className="font-display text-5xl md:text-6xl font-semibold text-vermilion mb-2">
        {count}{suffix}
      </p>
      <p className="text-white/50 text-sm uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
}

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 91, suffix: '%', label: 'Client Retention' },
  { value: 3, suffix: 'x', label: 'Faster Execution' },
  { value: 98, suffix: '%', label: 'On-Time Delivery' },
];

export function StatsSection() {
  return (
    <section id="results" className="section-padding bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-max mx-auto relative z-10">
        {/* Section Header */}
        <FadeUp className="text-center mb-16">
          <p className="text-caption text-vermilion uppercase tracking-widest mb-4">
            Proven Results
          </p>
          <h2 className="font-display text-section text-white">
            Numbers That Speak
          </h2>
        </FadeUp>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={0.1 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
