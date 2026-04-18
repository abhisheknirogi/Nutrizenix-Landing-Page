import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutrical",
  name: "Nutrical",
  category: "Post-Harvest",
  tagline: "Calcium-rich formula for post-harvest quality",
  oneLiner: "Reduces physiological disorders and extends shelf life through timely calcium supplementation.",
  description: "Nutrizenix Nutrical is a premium post-harvest designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/nutrical.jpg",
  relatedIds: ["nutrichill", "nutriferus-12", "nutrigold"]
};

const NutricalPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutricalPage;