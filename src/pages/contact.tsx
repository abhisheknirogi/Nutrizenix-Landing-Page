import { PageTransition } from '../components/PageTransition';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';

const FORMSPREE_URL = 'https://formspree.io/f/maqaoklk'; // Paste your Formspree form URL here

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.target as HTMLFormElement);
    console.log('Submitting form with data:', Object.fromEntries(formData));
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      console.log('Response status:', response.status);
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorText = await response.text();
        console.error('Form submission failed:', response.status, errorText);
        setError('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Network error. Please check your connection and try again.');
    }
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
                <label htmlFor="contact-name" className="block font-body text-sm font-medium text-nzx-dark mb-1">Full Name</label>
                <input id="contact-name" type="text" name="name" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-nzx-green focus:border-transparent outline-none transition-all font-body text-sm" placeholder="e.g. Ramesh Kumar" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-email" className="block font-body text-sm font-medium text-nzx-dark mb-1">Email <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input id="contact-email" type="email" name="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-nzx-green focus:border-transparent outline-none transition-all font-body text-sm" placeholder="ramesh@example.com" />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block font-body text-sm font-medium text-nzx-dark mb-1">Phone Number</label>
                  <input id="contact-phone" type="tel" name="phone" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-nzx-green focus:border-transparent outline-none transition-all font-body text-sm" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block font-body text-sm font-medium text-nzx-dark mb-1">How can we help?</label>
                <textarea id="contact-message" required name="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-nzx-green focus:border-transparent outline-none transition-all font-body text-sm resize-none" placeholder="Provide details about your crops or query..."></textarea>
              </div>
              
              <AnimatePresence mode="wait">
                {error ? (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-red-100 text-red-700 rounded-lg border border-red-200 font-body text-sm flex items-center gap-2"
                  >
                    <span>✗</span> {error}
                  </motion.div>
                ) : submitted ? (
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
                    <a href=" https://www.google.com/maps/search/?api=1&query=SAKASH+AGRO+TECH+PVT+LTD,+Site+No+25,+Survey+No+121,+Yelachaguppe+Village,+Gridpalya,+Gokula+Road,+Tavarekere+Hobli,+Bengaluru,+Karnataka+562130" target="_blank" className="text-nzx-dark hover:text-nzx-green transition-colors">SAKASH AGRO TECH PVT. LTD.,<br/>Site No.25, Survey No.121,<br/>Yelachaguppe Village,<br/>Gridpalya,Gokula Road,<br/>Tavarekere Hobli,<br/>Bengaluru Urban -562130,<br/>Karnataka,India</a>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-nzx-gold">📞</span>
                    <a href="tel:+918088773868" className="text-nzx-dark hover:text-nzx-green transition-colors">+91 8088773868<br/><span className="text-gray-500 text-xs">Mon-Sat, 9AM to 6PM</span></a>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-nzx-gold">✉️</span>
                    <a href="mailto:sakashagrotech@gmail.com" className="text-nzx-dark hover:text-nzx-green transition-colors">sakashagrotech@gmail.com</a>
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
