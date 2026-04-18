import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-nzx-dark text-white/80 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          <div>
            <div className="w-[160px] h-[44px] border border-white/30 rounded-md flex items-center justify-center font-body font-semibold text-sm mb-4">
              [ NUTRIZENIX LOGO ]
            </div>
            <p className="font-body text-sm max-w-sm">
              Nourishing Indian Agriculture with precision micronutrient solutions and specialty fertilizers.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg text-white mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="hover:text-nzx-gold transition-colors w-fit">About Us</Link>
              <Link to="/why-us" className="hover:text-nzx-gold transition-colors w-fit">Why Choose Us</Link>
              <Link to="/products" className="hover:text-nzx-gold transition-colors w-fit">Our Products</Link>
              <Link to="/contact" className="hover:text-nzx-gold transition-colors w-fit">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-white mb-4">Contact Info</h4>
            <div className="text-sm space-y-3">
              <div className="flex gap-2">
                <span className="text-nzx-gold"></span>
                <a href="mailto:sakashagrotech@gmail.com" className="hover:text-nzx-gold transition-colors">sakashagrotech@gmail.com</a>
              </div>
              <div className="flex gap-2">
                <span className="text-nzx-gold"></span>
                <a href="tel:+918088773868" className="hover:text-nzx-gold transition-colors">+91 8088773868</a>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-nzx-gold"></span>
                <a href="https://www.google.com/maps/search/?api=1&query=SAKASH+AGRO+TECH+PVT+LTD" target="_blank" rel="noopener noreferrer" className="hover:text-nzx-gold transition-colors leading-relaxed">SAKASH AGRO TECH PVT. LTD.,<br />Yelachaguppe Village, Gridpalya,<br />Bengaluru Urban – 562130,<br />Karnataka, India</a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/60">
          <p>© 2025 Nutrizenix. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 font-body">Built for Indian Farmers</p>
        </div>
      </div>
    </motion.footer>
  );
};
