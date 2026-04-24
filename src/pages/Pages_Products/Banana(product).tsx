import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "banana",
  name: "Banana",
  category: "Crop-Specific",
  tagline: "Targeted nutrition for high-yield banana cultivation",
  oneLiner: "Tailored nutrient blend that maximizes bunch weight and fruit quality in banana crops.",
  description: "Banana+ is an essential micronutrient fertilizer mixture tailored for banana plants. It is 100% water-soluble and designed for foliar spray application.",
  benefits: [
    "Highly soluble formula ensures leaves efficiently absorb essential nutrients.",
    "Helps the plant better utilize other major nutrients for improved nutrient efficiency.",
    "Boosts natural immunity against adverse environmental conditions.",
    "Acts as a catalytic agent in enzymatic processes to support strong and healthy growth.",
    "Contributes to higher harvest quality and increased yield."
  ],
  dosage: [
    "Use 2–3 ml per 1 liter of water.",
    "Note: Exact dosage may vary depending on crop age and growth stage."
  ],
  availablePacking: ["250ml", "500ml", "1000ml", "5 Ltr."],
  image: "/assets/images/banana.png",
  relatedIds: ["bhushakthi", "boron-plus", "boronplus"]
};

const BananaPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default BananaPage;