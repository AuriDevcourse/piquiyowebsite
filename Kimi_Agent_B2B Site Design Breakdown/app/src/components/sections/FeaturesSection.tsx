import { motion } from 'framer-motion';
import { Target, Zap, BarChart3, Users, Layers, Shield } from 'lucide-react';
import { FadeUp } from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const features = [
  {
    icon: Target,
    title: 'Strategy & Planning',
    description: 'Clear roadmaps, measurable goals, and actionable plans that align with your business objectives.',
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    description: 'Move fast without breaking things. Our structured approach delivers results in weeks, not months.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Real-time dashboards and insights that show exactly what\'s working and what needs adjustment.',
  },
  {
    icon: Users,
    title: 'Team Augmentation',
    description: 'Scale your capabilities with our experienced specialists who integrate seamlessly with your team.',
  },
  {
    icon: Layers,
    title: 'Process Optimization',
    description: 'Identify bottlenecks, eliminate waste, and build systems that scale with your growth.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing and validation ensure every deliverable meets the highest standards.',
  },
];

export function FeaturesSection() {
  return (
    <section id="services" className="section-padding bg-[#202020]">
      <div className="container-max mx-auto">
        {/* Section Header */}
        <FadeUp className="text-center mb-16">
          <p className="text-caption text-vermilion uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="font-display text-section text-white mb-6">
            End-to-End Execution
          </h2>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
            From strategy to delivery, we handle every step with precision and speed.
          </p>
        </FadeUp>

        {/* Features Grid */}
        <StaggerContainer 
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-8 h-full group cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-vermilion/10 flex items-center justify-center mb-6 group-hover:bg-vermilion/20 transition-colors duration-300">
                  <feature.icon 
                    size={28} 
                    className="text-vermilion group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>

                {/* Content */}
                <h3 className="font-display text-card-title text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
