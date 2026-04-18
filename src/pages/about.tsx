import { PageTransition } from '../components/PageTransition';
import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionHeader } from '../components/SectionHeader';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-nzx-green to-nzx-green-mid py-24 text-center">
        <AnimatedSection>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">About Nutrizenix</h1>
          <div className="font-body text-white/80 text-sm">
            <Link to="/" className="hover:text-nzx-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>About</span>
          </div>
        </AnimatedSection>
      </section>

      {/* Brand Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0}>
            <SectionHeader
              label="Our Story"
              title="Rooted in Science, Grown with Care"
              className="text-left"
            />
            <div className="space-y-4 font-body text-nzx-mid leading-relaxed mt-6">
              <p>
                Founded on the principle of delivering precise nourishment to India's diverse agricultural landscape, Nutrizenix has grown into a trusted partner for farmers nationwide. 
              </p>
              <p>
                We recognize that modern farming requires more than just basic NPK fertilizers. Our specialty micronutrients and secondary nutrient compounds are engineered to correct specific soil deficiencies, enhance nutrient uptake, and ultimately drive higher, healthier yields.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="relative w-full h-[400px] bg-nzx-green-light border-2 border-dashed border-nzx-green flex items-center justify-center rounded-2xl">
            <span className="font-body text-nzx-dark font-semibold">Brand Story Image Placeholder</span>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-nzx-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader label="Our Pillars" title="Core Values" />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pb-10">
            {['Quality', 'Farmer-First', 'Innovation', 'Sustainability'].map((value, idx) => (
              <AnimatedSection key={value} delay={idx * 0.1}>
                <div className="bg-white rounded-xl shadow-sm p-6 text-center border-b-4 border-nzx-gold hover:-translate-y-1 transition-transform h-full flex flex-col justify-center">
                  <div className="text-nzx-gold text-2xl mb-3">★</div>
                  <h4 className="font-heading text-lg text-nzx-green">{value}</h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection delay={0}>
            <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 h-full">
              <h3 className="font-heading text-2xl text-nzx-dark mb-4">Our Mission</h3>
              <p className="font-body text-nzx-mid">To equip Indian farmers with the highest grade micronutrient solutions that ensure robust crop health and maximize agricultural productivity.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 h-full">
              <h3 className="font-heading text-2xl text-nzx-dark mb-4">Our Vision</h3>
              <p className="font-body text-nzx-mid">To lead the paradigm shift toward precision agriculture in India by making scientifically advanced plant nutrition accessible and effective for every farmer.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};


const TransitionWrapper = () => (
  <PageTransition>
    <About />
  </PageTransition>
);
export default TransitionWrapper;
