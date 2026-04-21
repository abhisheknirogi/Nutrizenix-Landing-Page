import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutri-ferti5",
  name: "Nutri-Ferti 5",
  category: "100% Water Soluble Mixture of Fertilizer",
  tagline: "Ignite early growth and root strength",
  oneLiner: "A high-phosphorus MAP fertilizer that promotes rapid absorption, drought resistance, and plant health",
  description: "Nutri-ferti 5 is a 100% water-soluble NPK fertilizer featuring a 13:40:13 ratio. Specially formulated as Mono Ammonium Phosphate (MAP), its foliar application ensures immediate nutrient absorption, which is critical for increasing both the yield and quality of the produce while keeping plants healthy and greener.",
  benefits: [
    "Provides high solubility, making nutrients easily available to the plants.",
    "Foliar spray allows for immediate absorption, leading to faster results in yield and quality.",
    "Significantly improves the plant's resistance to drought conditions",
    "Maintains overall plant health and promotes a vibrant green color."
  ],
  dosages: [
    "Foliar Spray: Dissolve 3.0 to 5.0 g per litre of water and spray directly on the leaves.",
    "Fertigation: Apply 2 to 3 kg per acre through drip irrigation systems."
  ],
  packing: ["Available in 1 kg."],
  image: "/src/assets/products/nutri-ferti5.jpg",
  relatedIds: ["nutri-ferti6", "nutrical", "nutrichill"]
};

const NutriFerti5Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutriFerti5Page;