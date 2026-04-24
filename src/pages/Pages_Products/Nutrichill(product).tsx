import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutrichill",
  name: "Nutrichill",
  category: "Chelated Micro Nutrient Mixture (Foliar Application)",
  tagline: "Speed-action chelated nutrition for all growth stages",
  oneLiner: "A free-flowing, EDTA chelated green micro-granular powder for rapid nutrient absorption.",
  description: "Nutrichill is an advanced EDTA chelated micronutrient mixture that comes in a green micro-granular powder form. It is virtually free from chloride, sodium, and other elements that could harm sensitive plants. It is engineered to dissolve speedily and completely in water for maximum efficiency.",
  benefits: [
    "Supplies six essential micronutrients simultaneously in an optimum dose to the crops",
    "Utilizes EDTA chelation to ensure the fastest possible absorption of individual microelements into the plant.",
    "Helps prevent complex, multi-crop deficiencies that typically occur gradually at different growth stages.",
    "Safe for high-value crops as it contains no harmful chloride or sodium residues."
  ],
  dosage: [
    "Rate: Dissolve 1.5g to 2g in 1 liter of water.",
    "Acreage: Use 250g in 200 liters of water per acre.",
    "Frequency: For best results, repeat the dose every 15 days."
  ],
  availablePacking: ["100g", "250g", "500g"],
  image: "/src/assets/products/nutrichill.jpg",
  relatedIds: ["nutriferus-12", "nutrigold", "nutrigrow"]
};

const NutrichillPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutrichillPage;