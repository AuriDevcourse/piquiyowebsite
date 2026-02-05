# Piquiyo B2B Website - Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)
- `accordion` - FAQ section
- `button` - CTAs throughout
- `card` - Feature cards, testimonial cards
- `separator` - Visual dividers

### Custom Components

**Layout Components:**
- `Navbar` - Fixed navigation with scroll behavior
- `Footer` - Site footer with links
- `Container` - Max-width wrapper
- `Section` - Section wrapper with padding

**Section Components:**
- `HeroSection` - Main hero with headline, CTAs, stats
- `FeaturesSection` - Services grid with glass cards
- `ProcessSection` - Timeline with connected nodes
- `StatsSection` - Animated counter stats
- `TestimonialsSection` - Client quotes
- `FAQSection` - Accordion FAQ
- `CTASection` - Call-to-action with background

**Animation Components:**
- `FadeIn` - Scroll-triggered fade in wrapper
- `FadeUp` - Scroll-triggered fade up wrapper
- `StaggerChildren` - Stagger animation wrapper
- `CountUp` - Animated number counter
- `DrawLine` - Line draw animation

**UI Components:**
- `GlassCard` - Glass morphism card
- `ProcessNode` - Timeline node
- `StatItem` - Stat with counter
- `TestimonialCard` - Quote card

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load sequence | Framer Motion | AnimatePresence + stagger | Medium |
| Navbar scroll effect | React + CSS | useScroll hook + conditional classes | Low |
| Hero headline reveal | Framer Motion | motion.div with stagger children | Medium |
| Scroll-triggered fade up | Framer Motion | whileInView + viewport options | Low |
| Card hover lift | CSS | transform + transition | Low |
| Button hover scale | CSS | transform + transition | Low |
| Stats count up | Custom hook | useCountUp with requestAnimationFrame | Medium |
| Process line draw | Framer Motion | scaleX animation with whileInView | Medium |
| FAQ accordion | Framer Motion | AnimatePresence + height animation | Medium |
| Parallax background | Framer Motion | useScroll + useTransform | Medium |
| Link hover color | CSS | transition on color property | Low |
| Icon hover scale | CSS | transform scale + transition | Low |

---

## Animation Library Choices

### Primary: Framer Motion
**Rationale:**
- Native React integration
- Declarative API
- Built-in scroll-triggered animations (whileInView)
- AnimatePresence for mount/unmount animations
- Excellent performance with GPU acceleration
- Easy stagger animations

**Use for:**
- All scroll-triggered reveals
- Page load animations
- Accordion expand/collapse
- Process line draw
- Parallax effects

### Secondary: CSS Transitions
**Rationale:**
- Zero JS overhead for simple interactions
- Better performance for hover states
- Simpler implementation for basic transitions

**Use for:**
- Button hovers
- Card hovers
- Link color changes
- Icon scale on hover

---

## Custom Hooks

### useScrollPosition
```typescript
// Tracks scroll position for navbar background
const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);
  // Implementation...
  return scrollY;
};
```

### useCountUp
```typescript
// Animates number counting
const useCountUp = (end: number, duration: number, startOnView: boolean) => {
  const [count, setCount] = useState(0);
  // Implementation with requestAnimationFrame...
  return count;
};
```

### useInView
```typescript
// Wrapper for Intersection Observer
const useInView = (options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  // Implementation...
  return { ref, isInView };
};
```

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   └── cta-bg.jpg
│   └── fonts/ (if self-hosted)
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn components
│   │   │   ├── accordion.tsx
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── layout/       # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── sections/     # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── animations/   # Animation components
│   │       ├── FadeIn.tsx
│   │       ├── FadeUp.tsx
│   │       ├── StaggerChildren.tsx
│   │       └── CountUp.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   ├── useCountUp.ts
│   │   └── useInView.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Dependencies

### Core (Already Installed)
- react
- react-dom
- typescript
- vite
- tailwindcss
- @radix-ui/* (via shadcn)

### Additional Required
```bash
npm install framer-motion lucide-react
```

### Fonts (Google Fonts via CDN)
- Red Hat Display
- Inter

---

## Tailwind Configuration Extensions

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF4937',
        'primary-hover': '#E63E2F',
        'bg-dark': '#202020',
        'bg-darker': '#1A1A1A',
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
        'text-tertiary': 'rgba(255, 255, 255, 0.5)',
        'border-subtle': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        display: ['"Red Hat Display"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['80px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'section': ['56px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'subsection': ['40px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
};
```

---

## Performance Considerations

1. **Image Optimization**
   - Use WebP format where possible
   - Lazy load below-fold images
   - Appropriate sizing for different viewports

2. **Animation Performance**
   - Use `transform` and `opacity` only
   - Add `will-change` sparingly
   - Respect `prefers-reduced-motion`

3. **Code Splitting**
   - Lazy load sections if needed
   - Tree-shake unused components

4. **Font Loading**
   - Use `font-display: swap`
   - Preload critical fonts

---

## Accessibility Checklist

- [ ] Color contrast 4.5:1 minimum
- [ ] Focus visible on all interactive elements
- [ ] Keyboard navigation works
- [ ] Screen reader labels
- [ ] Reduced motion support
- [ ] Semantic HTML structure
- [ ] Alt text on images
