import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "pride-x",
  name: "Pride-X",
  category: "Next-Gen",
  tagline: "Next-generation crop nutrition for modern farming",
  oneLiner: "Advanced chelated formula designed for precision farming and high-efficiency nutrient use.",
  description: "Nutrizenix Pride-X is a premium next-gen designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/pride-x.jpg",
  relatedIds: ["s-400", "superplus", "vajra"]
};

const PrideXPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default PrideXPage;