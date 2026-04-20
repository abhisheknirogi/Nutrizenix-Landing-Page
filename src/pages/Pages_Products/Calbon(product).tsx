import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "calbon",
  name: "Calbon",
  category: "Calcium + Boron",
  tagline: "Calcium and boron synergy for stronger crops",
  oneLiner: "Synergistic blend of calcium and boron for stronger cell walls and better fruit set.",
  description: "Calbon is a micronutrient fertilizer designed for foliar application. It features a specialized composition of calcium (18%) and boron (5%) to support critical development stages in fruits and vegetables.",
  benefits: [
    "Ensures flower and fruit set at development levels and reduces fruit and bloom abortion.",
    "Strengthens cell walls, making plants more disease-resistant.",
    "Reduces moisture stress, prevents fruit rot, and stops fruit cracking.",
    "Improves shelf life of vegetables and fruits for better profitability."
  ],
  dosage: [
    "Dissolve 2–3 gms per 1 liter of water.",
    "Second spray recommended at 15-day intervals.",
    "Suitable for tomato, apple, watermelon, pomegranate, wheat, mustard, and all vegetables."
  ],
  availablePacking: ["100g", "250g", "500g", "1 Kg"],
  image: "/src/assets/products/calbon.jpg",
  relatedIds: ["calon", "citron", "dymond-plus-33"]
};

const CalbonPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default CalbonPage;