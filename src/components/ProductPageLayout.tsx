import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp } from '../utils/animations';
import { productsListing } from '../data/products-listing';

interface ProductPageLayoutProps {
  productId: string;
  children?: ReactNode;
}

export const ProductPageLayout = ({ productId, children }: ProductPageLayoutProps) => {
  const product = productsListing.find(p => p.id === productId);

  if (!product) return <div>Product Not Found</div>;

  return (
    <div className="w-full bg-white mt-20">
      <section className="bg-gradient-to-r from-[#1A6B2A] to-[#2D9E3F] py-14 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 text-xs mb-3 font-medium uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> &gt; 
            <Link to="/products" className="hover:text-white transition-colors mx-1">Products</Link> &gt; 
            <span className="text-white ml-1">{product.name}</span>
          </p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0} className="font-heading text-white text-4xl md:text-5xl font-bold">{product.name}</motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.15} className="italic text-[#C9A227]/90 text-lg mt-3">"{product.name}"</motion.p>
        </div>
      </section>

      <section className="py-14 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ scale: 0.96, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }} className="w-full aspect-square max-w-sm mx-auto bg-[#E8F5E8] border-2 border-dashed border-[#2D9E3F] rounded-2xl flex flex-col items-center justify-center p-6">
            <div className="text-5xl text-[#2D9E3F] opacity-60 mb-4">📷</div>
            <div className="text-[#1A6B2A] font-semibold text-center text-xl px-4">{product.name}</div>
            <div className="text-[#4A6A4A] text-xs mt-3 bg-white/50 px-3 py-1 rounded-full uppercase tracking-wider">Product image coming soon</div>
          </motion.div>
          <div className="flex flex-col">
            <div><span className="inline-block bg-[#FDF6E3] text-[#a07c10] border border-[#e8d080] rounded-full px-3 py-0.5 text-xs font-semibold mb-6">{product.category}</span></div>
            <p className="text-[#C9A227] text-xs font-bold tracking-widest uppercase mb-1">About this Product</p>
            <p className="text-[#4A6A4A] leading-relaxed mb-4 text-lg">{product.oneLiner}</p>
            <div className="mt-auto">
              <Link to="/contact"><motion.button whileTap={{ scale: 0.97 }} className="bg-[#C9A227] hover:bg-yellow-600 text-white font-semibold flex items-center justify-center px-8 py-3.5 rounded-lg transition-colors w-full sm:w-auto shadow-md">Enquire Now</motion.button></Link>
              <Link to="/products" className="text-[#1A6B2A] hover:underline text-sm mt-5 inline-block font-medium">← Back to Products</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E8F5E8] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-[#1A2E1A] text-2xl font-bold mb-6 text-center">Application Guide</h2>
          <div className="rounded-xl overflow-hidden shadow-sm bg-white border border-[#2D9E3F]/20">
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-[#1A6B2A] text-white"><th className="py-4 px-6 font-semibold">Crop Type</th><th className="py-4 px-6 font-semibold">Application Method</th><th className="py-4 px-6 font-semibold">Recommended Dosage</th></tr></thead>
              <tbody className="text-[#4A6A4A]">
                <tr className="border-b border-[#E8F5E8]"><td className="py-4 px-6 font-medium">All Field Crops</td><td className="py-4 px-6">Foliar Spray</td><td className="py-4 px-6 text-[#1A6B2A] font-medium">2–3 ml/L of water</td></tr>
                <tr className="bg-[#f5fbf6] border-b border-[#E8F5E8]"><td className="py-4 px-6 font-medium">Vegetables & Fruits</td><td className="py-4 px-6">Drip Fertigation</td><td className="py-4 px-6 text-[#1A6B2A] font-medium">500 ml/acre</td></tr>
                <tr><td className="py-4 px-6 font-medium">Plantation Crops</td><td className="py-4 px-6">Soil Drenching</td><td className="py-4 px-6 text-[#1A6B2A] font-medium">1–2 L/acre</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-[#4A6A4A] mt-4 opacity-70">*Dosage may vary based on soil test reports and crop growth stage. Consult our agronomists for a custom schedule.</p>
        </div>
      </section>

      {children}
    </div>
  );
};

export default ProductPageLayout;
