import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "sampurna-4g",
  name: "Sampurna 4G",
  category: "Biostimulant Product (Soil Application) ",
  tagline: "Foundational soil health for the next generation of farming.",
  oneLiner: "A high-performance mixture of Seaweed extract and Humic acid granules for long-term soil fertility.",
  description: "SAMPURNA-4G is a specialized granular biostimulant designed to improve the chemical, physical, and biological properties of the soil. It plays a critical role in maintaining the soil's C:N (Carbon to Nitrogen) ratio and increasing its water-holding capacity, creating an ideal environment for sustainable agriculture.",
  benefits: [
    "Nutrient Efficiency: Increases the total amount of nutrients that plants can effectively absorb from the earth",
    "Yield Enhancement: Directly contributes to an increase in overall crop yield.",
    "Pest Mitigation: Helps in the control of soil-borne threats like nematodes and fungus.",
    "Leaching Prevention: Provides a steady, gradual supply of nutrients to plants, effectively preventing nutrient loss through leaching."
  ],
  dosage: [
    "Rate: 8–10 kg per 1 Acre.",
    "Method: Direct soil application."
  ],
  availablePacking: ["5 kg", "10 kg", "20 kg", "40 kg"],
  image: "/src/assets/products/sampurna-4g.jpg",
  relatedIds: ["aam", "amigrow", "banana"]
};

const Sampurna4GPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default Sampurna4GPage;