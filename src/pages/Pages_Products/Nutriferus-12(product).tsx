import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutriferus-12",
  name: "Nutriferus-12",
  category: "Micro Nutrient Fertilizer (Foliar Application)",
  tagline: "Mastering chlorophyll production for vibrant green crops",
  oneLiner: "A premium water-soluble Fe-EDTA chelated iron supplement to prevent chlorosis and boost growth",
  description: "Nutriferus-12 is a high-purity chelated ferrous (12% Fe) supplement designed for all agricultural crops. It functions as a water-soluble iron catalyst that activates essential enzymes to regulate crop growth and development across different growth stages.",
  benefits: [
    "Chlorophyll Production: Increases chlorophyll levels in leaves to prevent chlorosis (yellowing) and leaf spiraling.",
    "Enzyme Activation: Activates critical enzymes that regulate the natural growth and development of the crop.",
    "Pest & Disease Resistance: Promotes higher natural resistance to common pests and diseases.",
    "Yield Optimization: Increases growth rates and dry matter accumulation, leading to significantly higher yields.",
    "Superior Absorption: The EDTA chelation makes it more effective at helping plants absorb iron compared to conventional micronutrients."
  ],
  dosage: [
    "Rate: Dissolve 2g per 1 liter of water.",
    "Acreage: 250g per 1 Acre.",
    "Frequency: 2 sprays at an interval of 20 days are recommended for better results."
  ],
  availablePacking: ["100g", "250g", "500g"],
  image: "/src/assets/products/nutriferus-12.jpg",
  relatedIds: ["nutrigold", "nutrigrow", "nutrimag"]
};

const Nutriferus12Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default Nutriferus12Page;