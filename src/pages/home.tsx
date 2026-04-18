import { PageTransition } from '../components/PageTransition';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionHeader } from '../components/SectionHeader';
import { ProductCard } from '../components/ProductCard';

const Home = () => {
  const featuredProducts = [
    { id: '1', name: 'Sampurna', linkTo: '/products/sampurna' },
    { id: '2', name: 'Amigrow', linkTo: '/products/amigrow' },
    { id: '3', name: 'Nutrigold', linkTo: '/products/nutrigold' },
    { id: '4', name: 'Vajra', linkTo: '/products/vajra' },
    { id: '5', name: 'Humigrow', linkTo: '/products/humigrow' },
    { id: '6', name: 'Wetgrow', linkTo: '/products/wetgrow' },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-nzx-green to-nzx-green-mid overflow-hidden px-4 py-20 lg:py-0">
        <div className="absolute inset-0 opacity-[0.06] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-heading text-5xl md:text-7xl font-bold leading-tight"
          >
            Grow More. Grow Better.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="font-body text-white/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto"
          >
            Precision micronutrient solutions for India's farming community
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="bg-nzx-gold hover:bg-yellow-600 text-white font-body font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Explore Products
            </Link>
            <Link
              to="/about"
              className="border-2 border-white hover:bg-white hover:text-nzx-green text-white font-body font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Learn About Us
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
          <svg className="relative block h-[50px] md:h-[80px] w-[calc(100%+1.3px)]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,113.8,197.92,99.88,242.06,90.65,283.47,73.44,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 2 — STATS BAR */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-200 text-center">
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl md:text-5xl font-heading font-bold text-nzx-green">37+</span>
              <span className="text-nzx-mid font-body mt-2">Products</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl md:text-5xl font-heading font-bold text-nzx-green">Pan-India</span>
              <span className="text-nzx-mid font-body mt-2">Reach</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl md:text-5xl font-heading font-bold text-nzx-green">Trusted</span>
              <span className="text-nzx-mid font-body mt-2">by Farmers</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl md:text-5xl font-heading font-bold text-nzx-green">Quality</span>
              <span className="text-nzx-mid font-body mt-2">Assured</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT TEASER */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0}>
            <SectionHeader
              label="Who We Are"
              title="Committed to Indian Agriculture"
              className="text-left mb-6"
            />
            <p className="text-nzx-dark font-body text-lg leading-relaxed mb-6">
              Nutrizenix is a premier Indian agricultural company specializing in state-of-the-art micronutrients, secondary nutrients, and specialty fertilizers tailored for specific crop requirements.
            </p>
            <p className="text-nzx-mid font-body leading-relaxed mb-8">
              We empower farmers by providing research-backed, scientifically formulated nutrition that enhances soil health, revitalizes crop cycles, and maximizes yield potential. Our approach combines rigorous testing with practical field application to deliver results that speak for themselves.
            </p>
            <Link to="/about" className="inline-block text-nzx-green border-b-2 border-nzx-gold hover:text-nzx-green-mid pb-1 font-semibold transition-colors">
              Learn more about our mission →
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="relative">
            <div className="w-full h-[300px] md:h-[400px] bg-nzx-green-light border-2 border-dashed border-nzx-green flex items-center justify-center rounded-2xl shadow-lg">
              <span className="text-nzx-dark font-body font-semibold">Company Image Placeholder</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 — FEATURED PRODUCTS */}
      <section className="bg-nzx-green-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-block border-2 border-nzx-green text-nzx-green hover:bg-nzx-green hover:text-white font-body font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View All Products
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 — WHY US TEASER */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              label="The Nutrizenix Advantage"
              title="Why Choose Us"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <AnimatedSection delay={0.1}>
              <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                <div className="text-nzx-gold text-4xl mb-4">✅</div>
                <h3 className="font-heading text-xl text-nzx-dark mb-3">Scientifically Formulated</h3>
                <p className="font-body text-nzx-mid text-sm">Advanced nutrient profiles specifically designed to address common soil deficiencies across India.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                <div className="text-nzx-gold text-4xl mb-4">🌾</div>
                <h3 className="font-heading text-xl text-nzx-dark mb-3">Crop-Specific</h3>
                <p className="font-body text-nzx-mid text-sm">Targeted formulas ensuring that your specific crop gets exactly what it needs, when it needs it.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                <div className="text-nzx-gold text-4xl mb-4">🏆</div>
                <h3 className="font-heading text-xl text-nzx-dark mb-3">Quality Assured</h3>
                <p className="font-body text-nzx-mid text-sm">Stringent quality control protocols from raw material sourcing to final packaging.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA BANNER */}
      <AnimatedSection>
        <div className="bg-nzx-green text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">Ready to Transform Your Yield?</h2>
            <p className="font-body text-lg text-white/80 mb-8">Partner with Nutrizenix for precision crop nutrition.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/contact" className="bg-nzx-gold hover:bg-yellow-600 text-white font-body font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-colors">
                Contact Us Today
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
