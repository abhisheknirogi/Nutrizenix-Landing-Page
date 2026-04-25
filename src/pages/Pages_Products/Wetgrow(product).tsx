import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "wetgrow",
  name: "Wetgrow",
  category: "Agricultural Spray Adjuvant (Sticker, Spreader, Activator)",
  tagline:"Maximize every drop of your agricultural spray",
  oneLiner: "A high-performance adjuvant designed to improve spray coverage, absorption, and equipment hygiene.",
  description: "WET-GROW is a specialized agricultural spray adjuvant used for all crops and plants. It functions as a powerful sticker, spreader, and activator that ensures chemicals and nutrients adhere firmly to leaf surfaces for maximum effectiveness.",
  benefits: [
    "Surface Adhesion: Helps spray solutions firmly stick to the leaf surface, preventing runoff.",
    "Enhanced Coverage: Increases the spray coverage area on leaf surfaces, leading to maximum chemical and nutrient absorption.",
    "Performance Booster: Enhances the performance of pesticides, plant nutrients, and growth promoters, effectively increasing crop yield.",
    "Equipment Maintenance: Acts as a cost-effective cleaning agent for spray equipment and agricultural machinery."
  ],
  dosage: [
    "Rate: Mix 3–4 ml of Wet-Grow per 1 liter of water.",
    "Method: Spray on both sides of the leaves for optimal coverage."
  ],
  availablePacking: ["100ml", "250ml", "500ml", "1000ml", "5 Ltr"],
  relatedIds: ["sampurna", "sampurna-4g", "aam"]
};

const WetgrowPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default WetgrowPage;