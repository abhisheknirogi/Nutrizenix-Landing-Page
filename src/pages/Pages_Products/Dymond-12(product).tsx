import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "dymond-12",
  name: "Dymond-12",
  category: "Nitrogen",
  tagline: "12% nitrogen formula for balanced growth",
  oneLiner: "Steady-release nitrogen source that supports uniform canopy development and leaf colour.",
  description: "Dymond-12 is a straight micronutrient fertilizer containing 12% chelated zinc (Zn-EDTA). It is designed for foliar application to correct zinc deficiencies and improve crop performance.",
  benefits: [
    "Addresses zinc deficiency in soil, which causes gradually decreasing crop yields.",
    "Improves both yield and quality of crops in production.",
    "Uses chelated formula (Zn-EDTA 12%) for better stability and plant absorption."
  ],
  dosage: [
    "Dissolve 2 gms per 1 liter of water or use 250 gms per acre.",
    "Apply 2 sprays at 20-day intervals for better yield."
  ],
  availablePacking: ["100gm", "250gm", "500gm"],
  image: "/src/assets/products/dymond-12.jpg",
  relatedIds: ["dymond-21", "greenplus", "hi-power"]
};

const Dymond12Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default Dymond12Page;