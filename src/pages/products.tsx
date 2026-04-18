import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/products-data';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return productsData.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-nzx-green to-nzx-green-dark text-white py-16 px-6 text-center">
        <motion.h1 
          className="font-heading text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Products
        </motion.h1>
        <motion.p 
          className="text-lg text-white/80 max-w-2xl mx-auto mb-8 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          37+ Specialty Fertilizers & Micronutrients
        </motion.p>
        
        <motion.div 
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Search products by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-[#1A6B2A] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1A6B2A] outline-none text-gray-800 bg-white shadow-sm"
          />
          <p className="text-white/70 text-sm mt-3">
            Showing {filteredProducts.length} of {productsData.length} products
          </p>
        </motion.div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredProducts.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.06 }
              }
            }}
          >
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
              >
                <ProductCard id={product.id} name={product.name} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-700">No products found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
