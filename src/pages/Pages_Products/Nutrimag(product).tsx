import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutrimag",
  name: "Nutrimag",
  category: "Micronutrient Fertilizer (Soil Application)",
  tagline: "The core of chlorophyll for maximum energy",
  oneLiner: "A vital Magnesium and Sulphur supplement that activates growth enzymes and enhances photosynthesis.",
  description: "NUTRIMAG is a high-purity Magnesium Sulphate fertilizer (Mg-9.5%, S-12.0%) designed for all agricultural crops. It acts as an essential component for various enzyme systems involved in energy production, protein synthesis, and growth regulation",
  benefits: [
    "Chlorophyll Boost: Directly improves chlorophyll content and the photosynthesis process in plants.",
    "Growth Regulation: Activates numerous plant enzymes specifically needed for healthy growth and development.",
    "Protein Synthesis: Plays a critical role in energy production and the synthesis of proteins within the plant system.",
    "Balanced pH: Formulated with a pH range of 4.5–5.5 for optimal soil compatibility."
  ],
  dosages: [
    "Rate: 4–5g per Liter of water.",
    "Application: Designed for soil application across all agricultural crops."
  ],
  packing: ["Available in 1 KG, 10 KG, and 25 KG"],
  image: "/src/assets/products/nutrimag.jpg",
  relatedIds: ["nutrimix", "pride-x", "s-400"]
};

const NutrimagPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutrimagPage;