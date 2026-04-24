import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutrical",
  name: "Nutrical",
  category: "100% Water Soluble Fertilizer",
  tagline: "Essential strength for premium fruit quality",
  oneLiner: "A specialized Calcium and Nitrogen supplement designed to prevent fruit cracking and extend shelf life",
  description: "Nutrical is a high-purity fertilizer containing 18.8% Calcium and 15.5% Nitrogen in a completely water-soluble form. It is specifically engineered to provide immediate nourishment to fruit crops, ensuring structural integrity and marketability.",
  benefits: [
    "Effective application controls Bitter Pit disease in apples and Spongy Tissue in mangoes.",
    "Prevents fruit cracking in lemons and other high-value fruit crops.",
    "Significantly increases the shelf life of fruits, making them better for transport and storage.",
    "100% water solubility ensures that the Calcium and Nitrogen are immediately available to the plant through leaves or soil."
  ],
  dosage: [
    "Foliar Spray: Dissolve 4.0 to 5.0 g of Nutrical per litre of water and spray on both surfaces of the leaves.",
    "Frequency: Perform at least 2–3 sprays during the cropping season.",
    "Soil Application: Apply 25 kg of Nutrical Calcium Nitrate per acre, divided into 5 split doses."
  ],
  availablePacking: ["1 kg"],
  image: "/src/assets/products/nutrical.jpg",
  relatedIds: ["nutrichill", "nutriferus-12", "nutrigold"]
};

const NutricalPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutricalPage;