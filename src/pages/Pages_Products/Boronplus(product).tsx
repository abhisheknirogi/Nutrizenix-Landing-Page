import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "boronplus",
  name: "Boronplus",
  category: "Boron",
  tagline: "Precision boron nutrition for Indian crops",
  oneLiner: "Soluble boron formulation for correcting deficiencies across a wide range of crops.",
  description: "Boronplus is a high-potency micronutrient fertilizer featuring a concentrated 20% boron formulation. Composed of Disodium Octaborate Tetrahydrate, it is designed for foliar application. The product rapidly absorbs through foliage to correct boron deficiencies and supports plant structural integrity and reproductive success.",
  benefits: [
    "Supports proper development of roots and shoots.",
    "Improves seed germination and metabolic processes.",
    "Enhances flowering, tillering, and fruit formation.",
    "Improves pollination and fruit set.",
    "Effective across field crops, horticulture, and vegetables."
  ],
  dosage: [
    "Suitable for field crops (paddy, maize, sugarcane, cotton).",
    "Effective for horticulture (fruits, plantation crops) and vegetables (potato, tomato)."
  ],
  availablePacking: ["100g", "250g", "500g", "1 Kg"],
  relatedIds: ["calbon", "calon", "citron"]
};

const BoronplusPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default BoronplusPage;