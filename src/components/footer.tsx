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
            <div className="text-sm space-y-2">
              <p>Email: Support Placeholder</p>
              <p>Phone: Phone Placeholder</p>
              <p>Address: Office Location India</p>
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
