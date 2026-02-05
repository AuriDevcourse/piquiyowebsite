import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { FadeUp } from '@/components/animations/FadeUp';

const faqs = [
  {
    question: "How quickly can you start a project?",
    answer: "We can typically begin within 1-2 weeks of contract signing. Our streamlined onboarding process gets us up to speed fast without endless meetings.",
  },
  {
    question: "What industries do you work with?",
    answer: "We specialize in B2B technology, SaaS, fintech, and enterprise services. Our methodology adapts to any complex business environment.",
  },
  {
    question: "How do you measure success?",
    answer: "We define clear KPIs at the start of every engagement—whether that's delivery speed, quality metrics, or business outcomes. You'll see progress in real-time.",
  },
  {
    question: "What makes Piquiyo different from agencies?",
    answer: "We operate like an extension of your team, not an external vendor. No account managers, no handoffs—just direct execution from experienced professionals.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide continuous optimization and support packages to ensure your systems keep performing after initial delivery.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onClick, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: 0.1 + index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`glass-card overflow-hidden transition-colors duration-200 ${
        isOpen ? 'border-vermilion/30' : ''
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg font-medium text-white pr-4 group-hover:text-vermilion transition-colors duration-200">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown 
            size={24} 
            className={`transition-colors duration-200 ${
              isOpen ? 'text-vermilion' : 'text-white/50 group-hover:text-white'
            }`} 
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="px-6 pb-6">
              <p className="text-white/60 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-[#202020]">
      <div className="container-max mx-auto">
        {/* Section Header */}
        <FadeUp className="text-center mb-16">
          <p className="text-caption text-vermilion uppercase tracking-widest mb-4">
            FAQ
          </p>
          <h2 className="font-display text-section text-white">
            Common Questions
          </h2>
        </FadeUp>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
