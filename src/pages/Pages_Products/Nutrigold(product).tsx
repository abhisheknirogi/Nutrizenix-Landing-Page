import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutrigold",
  name: "Nutrigold",
  category: "Premium Blend",
  tagline: "Gold-standard micronutrient mix for premium yield",
  oneLiner: "Premium chelated micronutrient blend for high-value crops demanding exceptional quality output.",
  description: "Nutrizenix Nutrigold is a premium premium blend designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/nutrigold.jpg",
  relatedIds: ["nutrigrow", "nutrimag", "nutrimix"]
};

const NutrigoldPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutrigoldPage;