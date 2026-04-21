import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutrimix",
  name: "Nutrimix",
  category: "Micronutrient Fertilizer Mixture (Foliar Spray)",
  tagline: "Broad-spectrum nutrition for high-yield farming",
  oneLiner: "A comprehensive micronutrient blend designed to overcome deficiencies and maximize crop quality.",
  description: "NUTRIMIX is a specialized micronutrient fertilizer mixture developed for foliar application across all agricultural crops. It is engineered to correct micronutrient imbalances, thereby improving the plant's ability to utilize macronutrients from the soil and enhancing its overall physiological health.",
  benefits: [
    "Deficiency Correction: Directly helps to overcome various micronutrient deficiencies within the crop.",
    "Enhanced Absorption: Improves the plant's efficiency in absorbing other vital nutrients from the soil.",
    "Photosynthesis Optimization: Boosts the photosynthesis process, resulting in a healthy, deep green color across the entire plant.",
    "Reproductive Support: Increases tillering, flowering, and successful fruit/grain setting."
  ],
  dosages: [
    "Rate: Dissolve 4–5g of NUTRIMIX in 1 liter of water.",
    "Frequency: For optimal results, 2–3 sprays are recommended throughout the cropping season."
  ],
  packing: ["Available in 500g and 1 kg."],
  image: "/src/assets/products/nutrimix.jpg",
  relatedIds: ["pride-x", "s-400", "superplus"]
};

const NutrimixPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutrimixPage;