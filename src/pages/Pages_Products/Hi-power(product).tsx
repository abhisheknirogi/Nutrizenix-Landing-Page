import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "hi-power",
  name: "Hi-Power",
  category: "Energy Complex",
  tagline: "High-energy micronutrient complex for intensive crops",
  oneLiner: "Dense micronutrient blend formulated for high-value, intensive cropping systems.",
  description: "HI-POWER is a high-quality bio stimulant designed for foliar application to enhance plant growth and soil performance. It improves nutrient uptake, strengthens root development, and increases crop productivity by boosting biological activity in the soil.",
  benefits: [
    "Improves soil structure by increasing air availability around the root zone",
    "Enhances water holding capacity and cation exchange",
    "Promotes stronger root development and efficient nutrient absorption",
    "Reduces nutrient loss and improves nutrient uptake",
    "Increases microbiological activity in soil",
    "Stimulates plant growth and boosts biomass production",
    "Improves crop yield and overall quality"
  ],
  dosage: [
    "Dissolve 2 grams of HI-POWER in 1 liter of water",
    "Apply as a foliar spray",
    "Repeat application every 15 days for best results"
  ],
  availablePacking: ["100 g,  250 g, 500 g"],
  image: "/src/assets/products/hi-power.jpg",
  relatedIds: ["high-zinc", "humigrow", "kalpam"]
};

const HiPowerPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default HiPowerPage;