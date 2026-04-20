import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "aam",
  name: "Aam",
  category: "Orchard Nutrition",
  tagline: "Specialized nutrition for mango orchards",
  oneLiner: "Precision micronutrient formula developed specifically for mango crop health and fruit quality.",
  description: "Aam+ is an essential Micronutrient Fertilizer Mixture specifically formulated for mango trees. It is 100% water-soluble and designed for application via foliar spray.",
  benefits: [
    "High solubility ensures nutrients are rapidly absorbed through the leaves.",
    "Helps the plant better utilize other major nutrients via nutrient synergy.",
    "Acts as a catalytic agent in enzymatic functions to support strong, healthy growth.",
    "Improves harvest quality and yield while boosting immunity against adverse conditions."
  ],
  dosage: [
    "Use 2–3 ml per 1 liter of water.",
    "Note: Exact dosage may vary depending on the age and growth stage of the mango crop."
  ],
  availablePacking: ["250ml", "500ml", "1000ml", "5 Ltr."],
  image: "/src/assets/products/aam.jpg",
  relatedIds: ["amigrow", "banana", "bhushakthi"]
};

const AamPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default AamPage;