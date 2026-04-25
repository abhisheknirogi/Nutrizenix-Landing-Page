import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "citron",
  name: "Citron",
  category: "Citrus Nutrition",
  tagline: "Specialized micronutrient blend for citrus crops",
  oneLiner: "Balanced micronutrient mix designed to meet the unique nutritional demands of citrus orchards.",
  description: "Citron+ is an essential micronutrient fertilizer mixture specifically recommended for citrus crops. It is 100% water-soluble and designed for foliar spray application to ensure rapid nutrient delivery.",
  benefits: [
    "Highly soluble formula ensures efficient nutrient absorption by leaves.",
    "Improves plant utilization of major nutrients through synergy.",
    "Acts as a catalytic agent in enzymatic functions for vigorous growth.",
    "Boosts plant immunity against adverse conditions.",
    "Increases yield and improves quality of citrus produce."
  ],
  dosage: [
    "Use 2–3 ml per 1 liter of water.",
    "Dosage depends on crop age and growth stage."
  ],
  availablePacking: ["250ml", "500ml", "1000ml", "5 Ltr."],
  relatedIds: ["dymond-plus-33", "dymond-12", "dymond-21"]
};

const CitronPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default CitronPage;