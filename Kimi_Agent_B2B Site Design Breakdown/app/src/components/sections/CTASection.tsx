import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { useRef } from 'react';
import { FadeUp } from '@/components/animations/FadeUp';

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/cta-bg.jpg"
          alt=""
          className="w-full h-[120%] object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-[#202020]/80 to-[#202020]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-max mx-auto px-5 md:px-10 lg:px-20">
        <FadeUp className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-section text-white mb-6">
            Ready to Execute?
          </h2>
          <p className="text-body-lg text-white/60 mb-10">
            Let's talk about your next project. No sales pitch—just a conversation about what you need and how we can help.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:hello@piquiyo.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center gap-2 group"
            >
              Schedule a Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary flex items-center gap-2"
            >
              <FileText size={18} />
              View Case Studies
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
