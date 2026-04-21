import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutri-ferti",
  name: "Nutri-Ferti",
  category: "100% Water Soluble Mixture of Fertilizer",
  tagline: "Balanced nutrition for healthy and greener crops",
  oneLiner: "A 100% water-soluble NPK fertilizer designed for immediate absorption and drought resistance",
  description: "Nutri-ferti is a high-purity fertilizer containing Nitrogen (N), Phosphorous (P), and Potassium (K) in a balanced 19:19:19 ratio. Because it is entirely water-soluble, it is easily available to plants, allowing for rapid absorption through foliar spray to boost yield and quality.",
  benefits: [
    "Ensures immediate nutrient absorption through foliar application",
    "Increases both the quality and quantity of crop produce",
    "Enhances drought resistance to keep plants resilient in adverse conditions",
    "Maintains plant health, keeping them visibly greener."
  ],
  dosages: [
    "Foliar Spray: Dissolve 3.0 to 5.0 g per litre of water and spray on leaves.",
    "Fertigation: Apply 2 to 3 kg per acre through drip irrigation.",
  ],
  packing: ["Available in 1 kg."],
  image: "/src/assets/products/nutri-ferti.jpg",
  relatedIds: ["nutri-ferti2", "nutri-ferti3", "nutri-ferti4"]
};

const NutriFertiPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutriFertiPage;