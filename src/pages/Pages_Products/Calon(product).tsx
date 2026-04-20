import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "calon",
  name: "Calon",
  category: "Calcium",
  tagline: "Calcium-optimized formula for cell wall strength",
  oneLiner: "High-absorption calcium formula that reduces tip burn, blossom end rot, and cracking.",
  description: "Calon is a straight micronutrient fertilizer containing 27% calcium chloride, formulated for foliar application to provide immediate calcium to plants and manage soil-related nutrient issues.",
  benefits: [
    "Increases nutrient uptake and is pivotal in determining overall crop yield.",
    "Maintains nutrition balance in soil, reduces salinity, and improves water penetration.",
    "Strengthens plant cells and increases disease resistance.",
    "Prevents bitter pits in apples, blossom-end rot in tomatoes, fruit rot, and cracking.",
    "Reduces plant stress and promotes release of reserve calcium from soil."
  ],
  dosage: [
    "Dissolve 4–5 grams per 1 liter of water.",
    "Apply 2–3 sprays during the cropping season."
  ],
  availablePacking: ["1 KG"],
  image: "/src/assets/products/calon.jpg",
  relatedIds: ["citron", "dymond-plus-33", "dymond-12"]
};

const CalonPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default CalonPage;