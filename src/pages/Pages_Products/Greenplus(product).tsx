import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "greenplus",
  name: "Greenplus",
  category: "Chlorophyll Booster",
  tagline: "Boost chlorophyll. Boost growth.",
  oneLiner: "Stimulates chlorophyll synthesis for deeper leaf colour, better photosynthesis, and higher yield.",
  description: "Green Plus is an essential Micronutrient Fertilizer Mixture designed specifically for Foliar Spray application. It is a 100% water-soluble formula, which allows for rapid and efficient absorption of vital nutrients through the plant's leaves.",
  benefits: [
    "Nutrient Synergy: Improves the plant's ability to utilize other major nutrients effectively.",
    "Growth Catalyst: Acts as a catalytic agent in enzymatic functions to promote vigorous and healthy growth.",
    "Resilience: Enhances the plant’s immunity against adverse environmental conditions.",
    "Yield & Quality: Directly contributes to increasing both the quality and the total yield of the harvest."
  ],

  dosage: ["Use 2–3 ml per 1 liter of water."],
  recommendedCrops: ["Cereal crops", "Oil Seeds", "Vegetables", "Plantation Crops"],
  availablePacking: ["100ml", "250ml", "500ml", "1000ml", "5 Ltr."],
  image: "/assets/images/greenplus.png",
  relatedIds: ["hi-power", "high-zinc", "humigrow"]
};

const GreenplusPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default GreenplusPage;