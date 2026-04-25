import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productsListing } from '../data/products-listing';
import { resolveProductImage } from '../utils/imageMap';

interface ProductCardProps {
  id: string;
  name?: string; // made optional
  linkTo?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ id, linkTo }) => {
  const product = productsListing.find(p => p.id === id);
  const [imgError, setImgError] = useState(false);

  if (!product) return null;

  const imageSrc = resolveProductImage(product.id);
  const hasImage = !!imageSrc && !imgError;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.97 }}
      className="group bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full border-t-4 border-nzx-green hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image container — fixed aspect ratio, no layout shift */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-nzx-green-light">
        {hasImage ? (
          <img
            src={imageSrc}
            alt={product.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <span className="text-4xl mb-2 opacity-50">🌿</span>
            <span className="text-nzx-green font-semibold text-sm text-center px-3">
              {product.name}
            </span>
            <span className="text-nzx-mid text-xs mt-1 opacity-60">Image coming soon</span>
          </div>
        )}
        {/* Subtle gradient overlay on hover */}
        {hasImage && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
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
