import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutrichill",
  name: "Nutrichill",
  category: "Stress Relief",
  tagline: "Stress relief nutrition for extreme conditions",
  oneLiner: "Protects crops from heat, cold, and drought stress through targeted osmoprotectant nutrition.",
  description: "Nutrizenix Nutrichill is a premium stress relief designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/nutrichill.jpg",
  relatedIds: ["nutriferus-12", "nutrigold", "nutrigrow"]
};

const NutrichillPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutrichillPage;