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

      {/* Brand Story and Company Info */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection delay={0}>
            <SectionHeader
              label="ABOUT US"
              title="SAKASH AGRO TECH PVT. LTD."
              className="text-left"
            />
            <h3 className="font-heading text-2xl text-nzx-gold mb-6 mt-2">
              Nurturing Growth, Cultivating Excellence
            </h3>
            <div className="space-y-4 font-body text-nzx-mid leading-relaxed text-justify">
              <p>
                <strong>SAKASH AGRO TECH PVT. LTD.</strong> is a dynamic and forward-thinking company specializing in unique foliar solutions for modern agriculture. Driven by a deep passion for farming and a strong commitment to environmental stewardship, we are dedicated to redefining the way farmers nourish and protect their crops.
              </p>
              <p>
                Founded in Bengaluru, SAKASH AGRO TECH PVT. LTD., with its product brand <strong>Nutrizenix &ndash; Innovation That Grows</strong>, has emerged as a beacon of innovation and technical excellence in the agricultural landscape. Established with a vision to revolutionize sustainable agriculture, the company embarked on a journey driven by continuous research, development, and progressive growth.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="space-y-6">
            <div className="p-8 bg-nzx-green-light rounded-2xl border-l-4 border-nzx-gold shadow-sm mt-8 lg:mt-0">
              <p className="font-body text-nzx-dark mb-4 leading-relaxed">
                At SAKASH AGRO TECH PVT. LTD., we specialize in the development, manufacturing, and marketing of a comprehensive range of agricultural solutions. Our diverse product portfolio includes:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body text-nzx-mid">
                {['Suspension Fertilizers', 'Solution Fertilizers', 'Foliar Liquid Fertilizers', 'Bio-stimulants', 'Organic Fertilizers', 'Micronutrients'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="text-nzx-gold">❖</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4 font-body text-nzx-mid leading-relaxed text-justify">
              <p>
                Each product is thoughtfully designed to enhance crop nutrition, improve yield quality, and promote sustainable farming practices. By combining advanced technology with deep agronomic knowledge, we empower farmers to achieve healthier crops and better productivity while caring for the environment.
              </p>
              <p className="font-semibold text-nzx-green">
                SAKASH AGRO TECH PVT. LTD. continues to stand committed to innovation, quality, and farmer success, nurturing growth at every stage of agriculture.
              </p>
            </div>
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
