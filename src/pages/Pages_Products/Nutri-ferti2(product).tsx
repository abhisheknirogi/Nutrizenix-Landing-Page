import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutri-ferti2",
  name: "Nutri-Ferti 2",
  category: "100% Water Soluble Complex Fertilizer",
  tagline: "Superior phosphorus and potassium for peak performance",
  oneLiner: "A premium MKP fertilizer that enhances nutrient uptake, yield quality, and disease resistance",
  description: "Nutri-ferti 2 is a high-performance, 100% water-soluble complex fertilizer containing 52% Phosphorus and 34% Potassium. This Nitrogen-free formula (MKP) is specifically designed to be applied through foliar spray or fertigation to ensure optimal nutrient delivery during critical growth stages.",
  benefits: [
    "Facilitates better nutrient uptake leading to a significant increase in the yield and quality of the produce.",
    "Helps plants become healthier and more robust.",
    "Develops a natural resistance against common diseases and pests.",
    "Provides high concentrations of soluble Phosphorus for root development and Potassium for fruit quality."
  ],
  dosage: [
    "Foliar Spray: Dissolve 3.0 to 5.0 g per litre of water and spray on both surfaces of the leaves.",
    "Fertigation: Apply at a rate of 2 to 3 kg per acre."
  ],
  availablePacking: ["1 kg"],
  relatedIds: ["nutri-ferti3", "nutri-ferti4", "nutri-ferti5"]
};

const NutriFerti2Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutriFerti2Page;