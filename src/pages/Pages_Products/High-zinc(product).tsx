import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "high-zinc",
  name: "High-Zinc",
  category: "Zinc",
  tagline: "Concentrated zinc for deficiency correction",
  oneLiner: "Fast-correcting zinc solution for reversing zinc deficiency and restoring healthy crop growth.",
  description: "NUTRI HIGH ZINC is a specially formulated micronutrient fertilizer containing essential micro and trace macro nutrients. It supports crops at all growth stages, improves plant development, and enhances both the quality and quantity of yield.",
  benefits: [
    "Improves photosynthesis, making plants greener and healthier",
    "Helps overcome micronutrient deficiencies in all crops",
    "Enhances uptake of nutrients available in the soil",
    "Provides a balanced combination of macro and micronutrients",
    "Improves disease resistance in crops"
  ],
  dosage: [
    "8–10 kg per acre",
    "125 mg to 150 mg per plant"
  ],
  availablePacking: ["5 kg", "10 kg"],
  image: "/src/assets/products/high-zinc.jpg",
  relatedIds: ["humigrow", "kalpam", "nutri-ferti"]
};

const HighZincPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default HighZincPage;