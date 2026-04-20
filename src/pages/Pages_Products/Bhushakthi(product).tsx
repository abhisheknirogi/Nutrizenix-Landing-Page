import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "bhushakthi",
  name: "Bhushakthi",
  category: "Soil Health",
  tagline: "Revitalize soil. Restore yield.",
  oneLiner: "Restores depleted soil vitality and improves nutrient availability for long-term productivity.",
  description: "Nutri Bhushakti is a specialized micronutrient fertilizer mixture formulated for soil application. It provides a comprehensive blend of essential micronutrients with traces of macro nutrients, supporting crops through every lifecycle phase from growth to full development.",
  benefits: [
    "Improves photosynthesis for healthier, greener plant appearance.",
    "Corrects micronutrient deficiencies across all crop types.",
    "Enhances nutrient uptake from soil already available to plants.",
    "Contains balanced macro and micronutrient proportions.",
    "Boosts natural disease resistance in all crops."
  ],
  dosage: [
    "Per Acre: 8–10 Kg.",
    "Per Plant: 125–150 gm."
  ],
  availablePacking: ["5 KG", "10 KG"],
  image: "/src/assets/products/bhushakthi.jpg",
  relatedIds: ["boron-plus", "boronplus", "calbon"]
};

const BhushakthiPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default BhushakthiPage;