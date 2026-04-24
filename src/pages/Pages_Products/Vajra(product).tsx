import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "vajra",
  name: "Vajra",
  category: "Micronutrient Fertilizer Mixture for Vegetable Crops",
  tagline: "The impenetrable shield for high-yield vegetables",
  oneLiner: "A 100% water-soluble micronutrient powerhouse designed to boost immunity and quality in vegetable crops.",
  description: "Vajra is an essential micronutrient mixture product specifically formulated for spray application on vegetable crops. Being 100% water-soluble, it facilitates efficient and rapid absorption of nutrients through the foliage, ensuring that your vegetables receive precise nourishment at critical growth stages.",
  benefits: [
    "Nutrient Efficiency: Helps the plant achieve better utilization of major nutrients.",
    "Immunity Support: Increases the immunity power of plants to protect them against adverse environmental conditions.",
    "Growth Catalyst: Participates in enzymatic functions and acts as a catalytic agent to stimulate vigorous growth.",
    "Premium Output: Significantly increases both the total yield and the market quality of the farm produce."
  ],
  dosage: [
    "Rate: Use 2–3 ml of Vajra per 1 litre of water.",
    "Guidance: Adjust dosage depending upon the specific crop age and growth stages"
  ],
  availablePacking: ["250ml", "500ml", "1000ml", "5 Ltr"],
  image: "/src/assets/products/vajra.jpg",
  relatedIds: ["wetgrow", "sampurna", "sampurna-4g"]
};

const VajraPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default VajraPage;