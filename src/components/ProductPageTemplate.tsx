import { PageTransition } from './PageTransition';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';
import { ProductCard } from './ProductCard';
import { productsData } from '../data/products-data';
import type { ProductData } from '../data/products-data';

const OriginalTemplate = ({ id, name, tagline, description, benefits, relatedIds }: ProductData) => {
  // Application Rows mock data
  const applicationRows = [
    { crop: 'Cereals & Pulses', method: 'Foliar Spray', dosage: '2-3 ml/Litre of water' },
    { crop: 'Vegetables', method: 'Drip Irrigation', dosage: '1-1.5 L/Acre' },
    { crop: 'Fruit Orchards', method: 'Soil Application', dosage: 'As per soil test' },
  ];

  const relatedProducts = relatedIds?.map(rId => productsData.find(p => p.id === rId)).filter(Boolean) as ProductData[];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO */}
      <section className="bg-gradient-to-r from-nzx-green to-nzx-green-mid py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-body text-white/80 text-sm mb-6"
          >
            <Link to="/products" className="hover:text-nzx-gold transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">{name}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body italic text-nzx-gold-light/90 text-xl font-medium"
          >
            {tagline}
          </motion.p>
        </div>
      </section>

      {/* 2. PRODUCT DETAIL SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left col - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full max-w-[440px] mx-auto aspect-square bg-nzx-green-light border-2 border-dashed border-nzx-green-mid rounded-2xl flex items-center justify-center p-8 shadow-sm"
          >
            <span className="text-2xl text-nzx-green font-heading font-semibold text-center leading-snug">
              {name}<br/><span className="text-sm font-body font-normal opacity-70">(Product Image Placeholder)</span>
            </span>
          </motion.div>

          {/* Right col - Content */}
          <AnimatedSection delay={0.2} className="flex flex-col h-full justify-center">
            <h2 className="font-heading text-3xl text-nzx-dark mb-4">{name} Overview</h2>
            <p className="font-body text-nzx-mid text-lg leading-relaxed mb-10">
              {description}
            </p>

            <div className="mb-10">
              <h3 className="text-nzx-gold font-semibold tracking-widest text-xs uppercase mb-5">
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-nzx-dark font-body">
                    <span className="text-nzx-green font-bold mr-3 mt-0.5">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-2">
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="bg-nzx-gold hover:bg-yellow-600 text-white font-body font-semibold px-8 py-3 rounded-lg shadow-md transition-colors"
                onClick={() => window.location.href = '/contact'}
              >
                Enquire Now
              </motion.button>

              <Link to="/products" className="text-nzx-green hover:text-nzx-green-mid hover:underline font-body font-medium flex items-center gap-2 transition-colors">
                <span>←</span> Back to Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. APPLICATION TABLE */}
      <section className="bg-nzx-green-light py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader label="Usage" title="Application Guide" />
            
            <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-3 bg-nzx-green text-white font-body font-semibold px-6 py-4">
                <div>Crop Type</div>
                <div>Application Method</div>
                <div>Recommended Dosage</div>
              </div>
              {applicationRows.map((row, idx) => (
                <div key={idx} className={`grid grid-cols-3 px-6 py-4 font-body text-nzx-dark text-sm border-b last:border-0 ${idx % 2 === 1 ? 'bg-nzx-green-light/30' : 'bg-white'}`}>
                  <div className="font-medium">{row.crop}</div>
                  <div className="text-nzx-mid">{row.method}</div>
                  <div className="font-medium text-nzx-green">{row.dosage}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-nzx-mid font-body text-center mt-4">
              * Note: The exact dosage should be tailored according to local soil tests and agronomist recommendations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. RELATED PRODUCTS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader label="Discover More" title="You May Also Like" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {relatedProducts?.map((product, idx) => (
            <AnimatedSection key={product.id} delay={idx * 0.1}>
              <ProductCard id={product.id} name={product.name} linkTo={`/products/${product.id}`} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export const ProductPageTemplate = (props: any) => (
  <PageTransition>
    <OriginalTemplate {...props} />
  </PageTransition>
);
