import { PageTransition } from '../components/PageTransition';
import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionHeader } from '../components/SectionHeader';

const WhyUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-nzx-green to-nzx-green-mid py-24 text-center">
        <AnimatedSection>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">Why Nutrizenix</h1>
          <div className="font-body text-white/80 text-sm">
            <Link to="/" className="hover:text-nzx-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Why Us?</span>
          </div>
        </AnimatedSection>
      </section>

      {/* Trust Strip */}
      <section className="py-12 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-nzx-mid font-body font-medium flex flex-wrap gap-8 justify-center items-center">
          <span className="flex items-center gap-2"><span className="text-nzx-gold">✔</span> ISO Quality</span>
          <span className="flex items-center gap-2"><span className="text-nzx-gold">✔</span> Farm Tested</span>
          <span className="flex items-center gap-2"><span className="text-nzx-gold">✔</span> Pan-India</span>
          <span className="flex items-center gap-2"><span className="text-nzx-gold">✔</span> Expert Support</span>
        </div>
      </section>

      {/* 6 Benefit Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Advantages" title="What Makes Us Different" subtitle="Explore the reasons thousands of Indian farmers trust our science and our products." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[
            { t: '100% Purity', d: 'We source only premium grade raw materials without harmful bulk fillers, ensuring maximum impact.', i: '✨' },
            { t: 'Root Level Design', d: 'Engineered specifically for Indian soil profiles, addressing deficiencies at the core.', i: '🌱' },
            { t: 'Cost Effective', d: 'Optimum concentrations mean you use less product for a better result, saving input costs.', i: '💰' },
            { t: 'Expert Guidance', d: 'Our agronomists provide dedicated support, helping you use the right product at the right time.', i: '👨‍🌾' },
            { t: 'High Solubility', d: 'Superior formulas guarantee quicker absorption without clogging your drip irrigation systems.', i: '💧' },
            { t: 'Strict QA/QC', d: 'Every batch endures rigorous laboratory testing before making it to your field.', i: '🔬' }
          ].map((card, idx) => (
            <AnimatedSection key={card.t} delay={idx * 0.1}>
              <div className="bg-white border text-center p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-nzx-green-mid text-4xl mb-4">{card.i}</div>
                <h4 className="font-heading text-xl text-nzx-dark mb-3">{card.t}</h4>
                <p className="font-body text-nzx-mid text-sm leading-relaxed">{card.d}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-nzx-green-light overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader label="Comparison" title="Nutrizenix vs Generic Brands" />

          <AnimatedSection delay={0.2} className="mt-12 bg-white rounded-xl overflow-hidden shadow-md">
            <div className="grid grid-cols-3 bg-nzx-green text-white font-body font-semibold p-4">
              <div className="col-span-1 text-left">Feature</div>
              <div className="col-span-1 text-center bg-nzx-green-light text-nzx-green rounded p-1 mx-2">Nutrizenix</div>
              <div className="col-span-1 text-center">Generic Brands</div>
            </div>
            {[
              { f: 'Crop-Specific Formulations', n: true, g: false },
              { f: 'Solubility Rate', n: 'High (100%)', g: 'Moderate/Low' },
              { f: 'Agronomic Field Staff Support', n: true, g: false },
              { f: 'Zero Heavy Metal Toxins', n: true, g: false },
              { f: 'Micro-nutrient Consistency', n: 'Guaranteed', g: 'Variable' }
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 border-b py-4 font-body text-sm">
                <div className="col-span-1 text-left px-4 text-nzx-dark font-medium">{row.f}</div>
                <div className="col-span-1 text-center font-bold text-nzx-green">
                  {typeof row.n === 'boolean' ? (row.n ? '✔' : '✖') : row.n}
                </div>
                <div className="col-span-1 text-center text-red-500 font-bold">
                  {typeof row.g === 'boolean' ? (row.g ? <span className="text-nzx-green">✔</span> : '✖') : <span className="font-normal text-nzx-mid">{row.g}</span>}
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};


const TransitionWrapper = () => (
  <PageTransition>
    <WhyUs />
  </PageTransition>
);
export default TransitionWrapper;
