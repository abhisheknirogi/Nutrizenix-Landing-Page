import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutri-ferti4",
  name: "Nutri-Ferti 4",
  category: "100% Water Soluble Complex Fertilizer",
  tagline: "Strengthening crops against stress and frost",
  oneLiner: "A specialized Potassium Nitrate fertilizer that enhances photosynthesis and drought resistance",
  description: "Nutri-ferti 4 is a premium, 100% water-soluble complex fertilizer containing 13% Nitrogen and 45% Potassium. When applied as a foliar spray, it provides immediate nourishment that helps the plant resist environmental challenges while improving overall health and grain weight.",
  benefits: [
    "Enhances the photosynthesis process within the plant.",
    "Improves the health of the plant, leading to increased grain weight and higher yields.",
    "Provides superior resistance to drought and frost conditions.",
    "Helps crops develop a natural resistance to various diseases."
  ],
  dosage: [
    "Rate: Dissolve 3.0 to 5.0 g per litre of water.",
    "Method: Foliar spray applied to both sides of the leaves.",
    "Recommended Crops: Suitable for all crops."
  ],
  availablePacking: ["1 kg"],
  image: "/src/assets/products/nutri-ferti4.jpg",
  relatedIds: ["nutri-ferti5", "nutri-ferti6", "nutrical"]
};

const NutriFerti4Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutriFerti4Page;