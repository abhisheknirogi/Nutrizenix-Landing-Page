import { PageTransition } from '../components/PageTransition';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection.tsx';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { ProductCard } from '../components/ProductCard.tsx';

/* ── Animated Counter ── */
const AnimatedCounter = ({ target, suffix = '' }: { target: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const isNumeric = !isNaN(Number(target));

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    const end = parseInt(target);
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target, isNumeric]);

  return (
    <span ref={ref} className="tabular-nums">
      {isNumeric ? `${count}${suffix}` : target}
    </span>
  );
};

/* ── Floating Leaves for Hero ── */
const FloatingLeaves = () => {
  const leaves = ['🍃', '🌿', '☘️', '🍀', '🌱'];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="leaf-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 10 + 5}%`,
            animationDuration: `${8 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 8}s`,
            fontSize: `${0.8 + Math.random() * 1}rem`,
            opacity: 0.4 + Math.random() * 0.3,
          }}
        >
          {leaves[i % leaves.length]}
        </span>
      ))}
    </div>
  );
};

/* ── Parallax Image ── */
const ParallaxImage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={ref} className="relative w-full h-[340px] md:h-[440px] rounded-2xl overflow-hidden shadow-2xl group">
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[130%]"
      >
        <img
          src="/company-hero.png"
          alt="Sakash Agro Tech — Modern agriculture and crop science"
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Glass overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d4a1a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-white/90 font-body text-sm">
          Pioneering sustainable agriculture with cutting-edge crop nutrition technology.
        </p>
      </div>
      {/* Decorative corner accent */}
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-xl" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/30 rounded-bl-xl" />
    </div>
  );
};

/* ── Main Home Component ── */
const Home = () => {
  const featuredProducts = [
    { id: '1', name: 'Sampurna', linkTo: '/products/sampurna' },
    { id: '2', name: 'Amigrow', linkTo: '/products/amigrow' },
    { id: '3', name: 'Nutrigold', linkTo: '/products/nutrigold' },
    { id: '4', name: 'Vajra', linkTo: '/products/vajra' },
    { id: '5', name: 'Humigrow', linkTo: '/products/humigrow' },
    { id: '6', name: 'Wetgrow', linkTo: '/products/wetgrow' },
  ];

  const statsData = [
    { value: '37', suffix: '+', label: 'Products', icon: '🧪' },
    { value: 'Pan-India', suffix: '', label: 'Reach', icon: '🌍' },
    { value: 'Trusted', suffix: '', label: 'by Farmers', icon: '🤝' },
    { value: 'Quality', suffix: '', label: 'Assured', icon: '✅' },
  ];

  const advantages = [
    {
      icon: '💡',
      title: 'Innovation & Performance',
      desc: 'State-of-the-art crop nutrition meticulously tailored to optimize growth, amplify plant health, and elevate yields.',
      gradient: 'from-amber-400/20 to-yellow-100/40',
    },
    {
      icon: '🌱',
      title: 'Cultivating Sustainability',
      desc: 'Developing biostimulants and organic fertilizers that nourish plants while minimizing ecological impact.',
      gradient: 'from-emerald-400/20 to-green-100/40',
    },
    {
      icon: '🤝',
      title: 'Empowering Growers',
      desc: 'Providing personalized guidance and expert knowledge to ensure every grower reaps the maximum benefits.',
      gradient: 'from-sky-400/20 to-blue-100/40',
    },
  ];

  // Mouse-follow spotlight on hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="w-full">
      {/* ═══════════ SECTION 1 — HERO ═══════════ */}
      <section
        className="relative min-h-[calc(100vh-80px)] flex items-center justify-center hero-gradient overflow-hidden px-4 py-20 lg:py-0"
        onMouseMove={handleMouseMove}
      >
        {/* Animated spotlight that follows cursor */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-[1]"
          style={{
            x: springX,
            y: springY,
            background: 'radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 70%)',
            translateX: '-50%',
            translateY: '-50%',
          }}
        />

        {/* Floating leaf particles */}
        <FloatingLeaves />

        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] mix-blend-overlay"></div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-nzx-gold/10 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-float-reverse pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          {/* Badge above headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-nzx-gold animate-pulse" />
            <span className="text-sm font-body font-medium text-white/90 tracking-wide">
              By SAKASH AGRO TECH PVT. LTD.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]"
          >
            Nutrizenix:{' '}
            <span className="text-gradient-gold">Innovation</span>
            <br />
            That Grows
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
            className="font-body text-white/75 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Unique foliar solutions for modern agriculture — premium fertilizers, biostimulants &amp; micronutrients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="group relative bg-nzx-gold hover:bg-yellow-500 text-white font-body font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-yellow-900/20 hover:shadow-xl hover:shadow-yellow-900/30 overflow-hidden"
            >
              <span className="relative z-10">Explore Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              to="/about"
              className="glass-card hover:bg-white/20 text-white font-body font-semibold px-8 py-3.5 rounded-xl transition-all duration-300"
            >
              Learn About Us
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-xs font-body tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5"
            >
              <div className="w-1 h-1.5 bg-white/60 rounded-full" />
            </motion.div>
          </motion.div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
          <svg className="relative block h-[50px] md:h-[80px] w-[calc(100%+1.3px)]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,113.8,197.92,99.88,242.06,90.65,283.47,73.44,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* ═══════════ SECTION 2 — STATS BAR ═══════════ */}
      <section className="bg-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statsData.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="stat-card bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm border border-gray-100/80"
                >
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <span className="text-3xl md:text-4xl font-heading font-bold text-nzx-green block">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-nzx-mid font-body mt-2 text-sm block">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ SECTION 3 — ABOUT TEASER ═══════════ */}
      <section className="bg-gradient-to-b from-white to-nzx-green-light/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0}>
            <SectionHeader
              label="Who We Are"
              title="SAKASH AGRO TECH PVT. LTD."
              className="text-left mb-6"
            />
            <p className="text-nzx-dark font-body text-lg leading-relaxed mb-6">
              Driven by a deep passion for farming and a strong commitment to environmental stewardship, SAKASH AGRO TECH PVT. LTD. is dedicated to redefining the way farmers nourish and protect their crops.
            </p>
            <p className="text-nzx-mid font-body leading-relaxed mb-8">
              We specialize in the development, manufacturing, and marketing of a comprehensive range of agricultural solutions, including Suspension Fertilizers, Solution Fertilizers, Foliar Liquid Fertilizers, Bio-stimulants, Organic Fertilizers, and Micronutrients.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Suspension Fertilizers', 'Bio-stimulants', 'Organic Solutions', 'Micronutrients'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 bg-nzx-green/5 border border-nzx-green/15 text-nzx-green text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 bg-nzx-gold rounded-full" />
                  {tag}
                </span>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-nzx-green font-semibold transition-colors hover:text-nzx-green-mid"
            >
              <span className="border-b-2 border-nzx-gold pb-0.5">Learn more about our mission</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="relative">
            <ParallaxImage />
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ SECTION 4 — FEATURED PRODUCTS ═══════════ */}
      <section className="relative bg-nzx-green-light py-24 overflow-hidden">
        {/* Subtle decorative bg circles */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-nzx-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-nzx-gold/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeader
              label="Our Range"
              title="Featured Products"
              subtitle="Explore a selection from our 37+ specialty fertilizers formulated for optimal absorption and results."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <ProductCard id={product.id} name={product.name} linkTo={product.linkTo} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6} className="mt-16 text-center">
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 border-2 border-nzx-green text-nzx-green hover:bg-nzx-green hover:text-white font-body font-semibold px-10 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-nzx-green/20"
            >
              View All Products
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ SECTION 5 — WHY US TEASER ═══════════ */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Decorative diagonal line */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-nzx-green-light/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeader
              label="The Nutrizenix Advantage"
              title="What Do We Offer?"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {advantages.map((item, i) => (
              <AnimatedSection key={i} delay={(i + 1) * 0.1}>
                <div className={`advantage-card bg-gradient-to-br ${item.gradient} rounded-2xl p-8 h-full flex flex-col items-center text-center border border-white/60`}>
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-xl text-nzx-dark mb-3 font-bold">{item.title}</h3>
                  <p className="font-body text-nzx-mid text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 6 — CTA BANNER ═══════════ */}
      <AnimatedSection>
        <div className="relative hero-gradient text-white py-20 px-4 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-[10%] w-32 h-32 border border-white/10 rounded-full animate-float" />
            <div className="absolute bottom-10 right-[15%] w-24 h-24 border border-white/10 rounded-full animate-float-reverse" />
            <div className="absolute top-1/2 left-[60%] w-16 h-16 bg-white/5 rounded-full blur-xl" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-4 text-white leading-tight">
                Cultivating Excellence,
                <br />
                <span className="text-gradient-gold">Growing Future</span>
              </h2>
            </motion.div>
            <p className="font-body text-lg text-white/70 mb-10 max-w-xl mx-auto">
              Partner with SAKASH AGRO TECH PVT. LTD. for forward-thinking agricultural solutions.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link
                to="/contact"
                className="group relative bg-nzx-gold hover:bg-yellow-500 text-white font-body font-bold text-lg px-10 py-4 rounded-xl shadow-lg shadow-yellow-900/30 transition-all duration-300 overflow-hidden inline-flex items-center gap-3"
              >
                <span className="relative z-10">Contact Us Today</span>
                <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};


const TransitionWrapper = () => (
  <PageTransition>
    <Home />
  </PageTransition>
);
export default TransitionWrapper;
