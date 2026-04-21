import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "kalpam",
  name: "Kalpam",
  category: "Biostimulant",
  tagline: "The complete biostimulant for enhanced plant vitality",
  oneLiner: "A premium organic seaweed mixture designed to maximize root development and nutrient uptake",
  description: "Nutrizenix Kalpam is a specialized biostimulant product containing 15% Ascophyllum Nodosum. It functions as a growth catalyst that improves the microbial activity of the soil and overcomes micronutrient deficiencies in all agricultural crops",
  benefits: [
    "Increases plant shoot, root, and stem elongation for better structural integrityCorrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield",
    "Improves photosynthesis, ensuring entire plants remain healthy and greenish.",
    "Develops natural resistance against pests, diseases, and abiotic stress.",
    "Maximizes nutrient uptake by promoting superior root system development."
  ],
  dosages: [
    "Rate: 1kg per acre.",
    "Method: Foliar application using 180–200 liters of water.",
    "Frequency: Repeat every 15–20 days for sustained healthy growth."
  ],
  packing: ["Available in 100g, 250g, 500g, and 1kg."],
  image: "/src/assets/products/kalpam.jpg",
  relatedIds: ["nutri-ferti", "nutri-ferti2", "nutri-ferti3"]
};

const KalpamPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default KalpamPage;