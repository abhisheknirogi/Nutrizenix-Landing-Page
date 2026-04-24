import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "pride-x",
  name: "Pride-X",
  category: "Bio-stimulant Product (Foliar Application)",
  tagline: "The vital boost for plant growth and development",
  oneLiner: "A potent mixture of Seaweed extract, Protein Hydrolysate, and Humic acid for higher yields and quality.",
  description: "PRIDE-X is an advanced liquid bio-stimulant formulated to fulfill the nutritional needs of crops even in small quantities. It facilitates the plant's vital processes, ensuring high-performance growth and superior product quality.",
  benefits: [
    "Growth Accelerator: Effectively increases plant growth and development through essential nourishment.",
    "Stress Resilience: Helps crops develop natural resistance against abiotic stress",
    "Root Development: Actively helps to increase root growth, ensuring better stability and nutrient uptake.",
    "Higher Productivity: Allows for significantly higher yields and better quality of farm produce."
  ],
  dosage: [
    "Rate: Use 1–1.5 ml per 1 liter of water.",
    "Frequency: Repeat for 2–3 sprays during the crop life cycle for the best results.",
    "Target Crops: Recommended for all agricultural crops."
  ],
  availablePacking: ["100ml", "250ml", "500ml", "1000ml", "5 Ltr"],
  image: "/src/assets/products/pride-x.jpg",
  relatedIds: ["s-400", "superplus", "vajra"]
};

const PrideXPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default PrideXPage;