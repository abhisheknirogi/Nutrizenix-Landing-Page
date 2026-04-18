import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "banana",
  name: "Banana",
  category: "Crop-Specific",
  tagline: "Targeted nutrition for high-yield banana cultivation",
  oneLiner: "Tailored nutrient blend that maximizes bunch weight and fruit quality in banana crops.",
  description: "Nutrizenix Banana is a premium crop-specific designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/banana.jpg",
  relatedIds: ["bhushakthi", "boron-plus", "boronplus"]
};

const BananaPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default BananaPage;