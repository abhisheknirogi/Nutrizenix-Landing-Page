import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "s-400",
  name: "S-400",
  category: "Biostimulant (Drenching / Soil Application)",
  tagline: "High-power soil conditioning for robust roots",
  oneLiner: "A concentrated 51% Humic Acid granular formula designed to revitalize soil structure and biomass",
  description: "S-400 is a premium granular biostimulant containing 51% Humic Acid. It is specifically engineered for drenching and soil application to improve the physical and biological properties of the soil, ensuring a more resilient ecosystem for crops like Paddy.",
  benefits: [
    "Soil Structure Improvement: Increases air availability around the root zone and enhances water-holding and cation exchange capacity",
    "Root & Tiller Promotion: Actively promotes root development and tillers in Paddy and other various crops",
    "Nutrient Uptake: Increases the number of white and feeding roots for better absorption while reducing nutrient losses.",
    "Biological Stimulation: Increases the microbiological activity of the soil and stimulates plant biomass production."
  ],
  dosage: [
    "Rate: Two soil applications at 1.5kg per hectare.",
    "Method: Suitable for drenching or direct soil application."
  ],
  availablePacking: ["1 kg"],
  image: "/src/assets/products/s-400.jpg",
  relatedIds: ["superplus", "vajra", "wetgrow"]
};

const S400Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default S400Page;