import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutrigold",
  name: "Nutrigold",
  category: "Bio-stimulant Product (Soil Application)",
  tagline: "Revolutionizing soil health for sustainable growth",
  oneLiner: "A premium mixture of Seaweed extract and Humic acid granules to improve soil structure and nutrient efficiency",
  description: "Nutri Gold is a specialized bio-stimulant designed for soil application to improve the chemical, physical, and biological properties of the soil. It helps maintain the soil's critical Carbon-to-Nitrogen (C:N) ratio and significantly increases its water-holding capacity, ensuring a fertile environment for all agricultural crops.",
  benefits: [
    "Increased Nutrient Uptake: Enhances the amount of essential nutrients that plants can effectively absorb.",
    "Root Development: Promotes robust root system development for stronger, more stable plants.",
    "Improved Crop Yield: Helps increase the overall yield and quality of the harvest",
    "Microbial Stimulation: Stimulates the activity of beneficial soil microorganisms"
  ],
  dosage: [
    "Rate: 8–10 kg per 1 Acre.",
    "Method: Soil application."
  ],
  availablePacking: ["1 kg"],
  image: "/src/assets/products/nutrigold.jpg",
  relatedIds: ["nutrigrow", "nutrimag", "nutrimix"]
};

const NutrigoldPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutrigoldPage;