import { PageTransition } from '../components/PageTransition';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-nzx-green to-nzx-green-mid py-24 text-center">
        <AnimatedSection>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">Contact Us</h1>
          <div className="font-body text-white/80 text-sm">
            <Link to="/" className="hover:text-nzx-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection delay={0}>
            <h2 className="font-heading text-3xl text-nzx-dark mb-6">Get in Touch</h2>
            <p className="font-body text-nzx-mid mb-10">We're here to help you find the right nutrient solutions for your crops. Reach out to our agricultural experts today.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-body text-sm font-medium text-nzx-dark mb-1">Full Name</label>
                <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-nzx-green focus:border-transparent outline-none transition-all font-body text-sm" placeholder="e.g. Ramesh Kumar" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-sm font-medium text-nzx-dark mb-1">Email <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-nzx-green focus:border-transparent outline-none transition-all font-body text-sm" placeholder="ramesh@example.com" />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-nzx-dark mb-1">Phone Number</label>
                  <input type="tel" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-nzx-green focus:border-transparent outline-none transition-all font-body text-sm" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-nzx-dark mb-1">How can we help?</label>
                <textarea required rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-nzx-green focus:border-transparent outline-none transition-all font-body text-sm resize-none" placeholder="Provide details about your crops or query..."></textarea>
              </div>
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-nzx-green-light text-nzx-green rounded-lg border border-nzx-green/20 font-body text-sm flex items-center gap-2"
                  >
                    <span>✓</span> Thank you! Your message has been received. Our experts will contact you shortly.
                  </motion.div>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="bg-nzx-green hover:bg-nzx-green-mid text-white font-body font-bold py-3 px-8 rounded-lg shadow-md transition-colors w-full sm:w-auto"
                  >
                    Send Message
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div className="bg-nzx-green-light rounded-xl p-8 border border-nzx-green/10">
                <h3 className="font-heading text-xl text-nzx-dark mb-6">Our Details</h3>
                <div className="space-y-4 font-body text-nzx-mid text-sm">
                  <div className="flex gap-4">
                    <span className="text-nzx-gold">📍</span>
                    <p className="text-nzx-dark">Global Business Park, Plot No 2,<br/>Industrial Area, Mumbai 400001,<br/>Maharashtra, India</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-nzx-gold">📞</span>
                    <p className="text-nzx-dark">+91 1800 123 4567<br/><span className="text-gray-500 text-xs">Mon-Sat, 9AM to 6PM</span></p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-nzx-gold">✉️</span>
                    <p className="text-nzx-dark">support@nutrizenix.com</p>
                  </div>
                </div>
              </div>
              
              <div className="h-64 w-full bg-nzx-green-light border-2 border-dashed border-nzx-green/30 rounded-xl flex items-center justify-center text-nzx-dark font-body font-semibold">
                [ Google Maps Embed Placeholder ]
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};


const TransitionWrapper = () => (
  <PageTransition>
    <Contact />
  </PageTransition>
);
export default TransitionWrapper;
