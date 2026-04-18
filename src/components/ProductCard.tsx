import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productsListing } from '../data/products-listing';

interface ProductCardProps {
  id: string;
  name?: string; // made optional
  linkTo?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ id, linkTo }) => {
  const product = productsListing.find(p => p.id === id);
  if (!product) return null;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full border-t-4 border-nzx-green hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-full h-48 bg-[#E8F5E8] border-2 border-dashed border-[#2D9E3F] rounded-lg mt-4 mx-4 mb-2 flex flex-col items-center justify-center p-3 relative overflow-hidden" style={{ width: 'calc(100% - 2rem)' }}>
        <span className="text-4xl mb-2 opacity-70">📷</span>
        <span className="text-[#1A6B2A] font-semibold text-sm text-center px-3 z-10">{product.name}</span>
      </div>
      
      <div className="px-5 pb-5 pt-2 flex flex-col flex-grow">
        <div>
          <span className="inline-block bg-[#FDF6E3] text-[#a07c10] border border-[#e8d080] rounded-full px-3 py-0.5 text-xs font-semibold mt-3">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg font-heading font-bold text-[#1A6B2A] mt-2 mb-1">{product.name}</h3>
        <p className="text-[#4A6A4A] text-sm mt-1 mb-4 leading-relaxed line-clamp-2 flex-grow">
          {product.oneLiner}
        </p>
        
        <Link
          to={linkTo || `/products/${id}`}
          className="w-full text-center block bg-[#C9A227] hover:bg-yellow-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
};
