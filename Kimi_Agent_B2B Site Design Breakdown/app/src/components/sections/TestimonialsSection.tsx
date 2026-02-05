// Testimonials section with client quotes
import { Quote } from 'lucide-react';
import { FadeUp } from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const testimonials = [
  {
    quote: "Piquiyo transformed how we approach projects. Their execution-focused mindset cut our delivery time in half while improving quality.",
    name: "Sarah Chen",
    title: "VP of Operations",
    company: "TechCorp Inc.",
    initials: "SC",
  },
  {
    quote: "No fluff, no endless meetings—just results. Piquiyo is the partner you want when you need to move fast and deliver.",
    name: "Marcus Johnson",
    title: "Chief Product Officer",
    company: "ScaleUp Solutions",
    initials: "MJ",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-[#202020]">
      <div className="container-max mx-auto">
        {/* Section Header */}
        <FadeUp className="text-center mb-16">
          <p className="text-caption text-vermilion uppercase tracking-widest mb-4">
            Client Stories
          </p>
          <h2 className="font-display text-section text-white">
            What They Say
          </h2>
        </FadeUp>

        {/* Testimonials Grid */}
        <StaggerContainer 
          staggerDelay={0.15}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-8 md:p-10 relative">
                {/* Quote Icon */}
                <Quote 
                  size={48} 
                  className="text-vermilion/20 absolute top-6 right-6" 
                />

                {/* Quote Text */}
                <blockquote className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-vermilion/20 flex items-center justify-center">
                    <span className="font-display font-semibold text-vermilion">
                      {testimonial.initials}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <p className="font-display font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-white/50 text-sm">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
