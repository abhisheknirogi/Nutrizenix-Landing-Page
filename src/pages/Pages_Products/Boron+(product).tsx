import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "boron-plus",
  name: "Boron+",
  category: "Boron",
  tagline: "Enhanced boron for better fruit set and flowering",
  oneLiner: "High-efficiency boron supplement that improves pollination, fruit set, and quality.",
  description: "Boron+ is a high-quality micronutrient fertilizer composed of Borax (Sodium Tetra Borate), formulated for soil application to address boron deficiencies. It contains a minimum of 10.5% boron by weight and maintains a pH range of 9.0–9.5, serving as a critical supplement for plant structures and biological functions.",
  benefits: [
    "Vital for proper development of roots and shoots.",
    "Improves seed germination and essential metabolic processes.",
    "Enhances flowering, tillering, and fruit formation.",
    "Supports pollination and overall crop productivity."
  ],
  dosage: [
    "Apply 2–3 kg per acre as soil application.",
    "Suitable for cereals (paddy, maize, sugarcane, cotton), horticulture crops, and vegetables (potato, tomato)."
  ],
  availablePacking: ["1 KG", "10 KG", "25 KG"],
  image: "/src/assets/products/boron-plus.jpg",
  relatedIds: ["boronplus", "calbon", "calon"]
};

const BoronPlusPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default BoronPlusPage;