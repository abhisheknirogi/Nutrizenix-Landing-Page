import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutrimag",
  name: "Nutrimag",
  category: "Magnesium",
  tagline: "Magnesium-focused formula for photosynthesis support",
  oneLiner: "Corrects magnesium deficiency and enhances chlorophyll function for better photosynthesis.",
  description: "Nutrizenix Nutrimag is a premium magnesium designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/nutrimag.jpg",
  relatedIds: ["nutrimix", "pride-x", "s-400"]
};

const NutrimagPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutrimagPage;