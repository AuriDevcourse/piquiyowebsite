import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '91%', label: 'Client Retention' },
  { value: '3x', label: 'Faster Execution' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#202020]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#202020] via-[#202020]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max mx-auto px-5 md:px-10 lg:px-20 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Caption */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-caption text-vermilion uppercase tracking-widest mb-6"
          >
            B2B Execution Platform
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-hero text-white mb-6 leading-tight"
          >
            Delivering{' '}
            <span className="text-vermilion">Results</span>{' '}
            That Work
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-body-lg text-white/70 mb-10 max-w-xl"
          >
            Piquiyo helps enterprise teams execute faster. No hype, no buzzwords—just clear strategy, measurable outcomes, and delivery that moves the needle.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a href="#contact" className="btn-primary flex items-center gap-2 group">
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#process" className="btn-secondary flex items-center gap-2">
              <Play size={18} />
              See How It Works
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <p className="font-display text-3xl md:text-4xl font-semibold text-vermilion mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-vermilion" />
        </motion.div>
      </motion.div>
    </section>
  );
}
