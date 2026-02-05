import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Strategy & Planning', href: '#services' },
    { label: 'Rapid Execution', href: '#services' },
    { label: 'Performance Analytics', href: '#services' },
    { label: 'Team Augmentation', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10">
      <div className="container-max mx-auto px-5 md:px-10 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <span className="font-display text-2xl font-semibold text-white">
                piquiyo<span className="text-vermilion">*</span>
              </span>
            </a>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              Execution that works. No hype, no buzzwords—just clear strategy, measurable outcomes, and delivery that moves the needle.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-vermilion hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-vermilion hover:text-white transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-vermilion transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-vermilion transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@piquiyo.com"
                  className="flex items-center gap-3 text-white/60 hover:text-vermilion transition-colors duration-200 text-sm"
                >
                  <Mail size={16} />
                  hello@piquiyo.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-white/60 hover:text-vermilion transition-colors duration-200 text-sm"
                >
                  <Phone size={16} />
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-white/60 text-sm">
                  <MapPin size={16} />
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Piquiyo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white/60 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white/60 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
