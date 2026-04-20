import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "humigrow",
  name: "Humigrow",
  category: "Soil Conditioner",
  tagline: "Humic acid formula for soil conditioning",
  oneLiner: "Concentrated humic acid that improves soil structure, water retention, and nutrient availability.",
  description: "HUMIGROW+ is a liquid bio stimulant enriched with humic and fulvic acids. It enhances nutrient availability, supports plant metabolism, and improves overall crop growth. It plays a key role in building organic matter in soil and increasing plant resistance to stress.",
  benefits: [
    "Contains organic constituents like humic, fulvic acids and trace elements",
    "Improves soil fertility and enhances nutrient availability",
    "Increases permeability of plant membranes for better nutrient uptake",
    "Boosts enzyme activity and overall plant metabolism",
    "Helps build organic matter required for microbial growth",
    "Enhances chlorophyll production and photosynthesis",
    "Improves resistance against stress conditions",
    "Promotes vegetative growth resulting in healthier crops and higher yields"
  ],
  dosage: [
    "First Spray: 3–5 ml per liter of water (7 days after transplanting)",
    "Second Spray: During flowering stage",
    "Third Spray: During panicle initiation or fruit formation stage"
  ],
  availablePacking: ["100 ml", "250 ml", "500 ml", "1000 ml", "5 Ltr."],
  composition: ["Humic Acid & Fulvic Acid: 19.5% (Liquid)"],
  image: "/src/assets/products/humigrow.jpg",
  relatedIds: ["kalpam", "nutri-ferti", "nutri-ferti2"]
};

const HumigrowPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default HumigrowPage;