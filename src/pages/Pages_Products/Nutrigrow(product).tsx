import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutrigrow",
  name: "Nutrigrow",
  category: "Micronutrient Fertilizer Mixture (Foliar Application)",
  tagline: "Correcting deficiencies for qualitative and quantitative yields",
  oneLiner: "A concentrated micronutrient formula that enhances photosynthesis and nutrient uptake from the soil",
  description: "NUTRI GROW is a specialized micronutrient fertilizer mixture developed for foliar application. It is engineered to provide essential trace elements in a balanced proportion to ensure crops reach their full genetic potential in both quality and quantity",
  benefits: [
    "Photosynthesis Boost: Significantly improves the photosynthesis process, leading to entire plants becoming a healthy, vibrant green.",
    "Uptake Efficiency: Improves and increases the uptake of other essential nutrients already available in the soil.",
    "Deficiency Correction: Helps crops overcome common and complex micronutrient deficiencies.",
    "High Efficiency: Requires only a small quantity to produce significant qualitative and quantitative increases in yield."
  ],
  dosage: [
    "Rate: 500ml of NUTRI GROW in 200 liters of water per acre.",
    "Frequency: Repeated applications at 15–20 day intervals will keep the crop healthy"
  ],
  availablePacking: ["100ml", "250ml", "500ml", "1000ml", "5 Ltr", "20 Ltr"],
  image: "/src/assets/products/nutrigrow.jpg",
  relatedIds: ["nutrimag", "nutrimix", "pride-x"]
};

const NutrigrowPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutrigrowPage;