import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "sampurna-4g",
  name: "Sampurna 4G",
  category: "Slow Release",
  tagline: "Four-generation formula for lasting soil health",
  oneLiner: "Extended-release nutrition that feeds crops across all four growth stages.",
  description: "Nutrizenix Sampurna 4G is a premium slow release designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/sampurna-4g.jpg",
  relatedIds: ["aam", "amigrow", "banana"]
};

const Sampurna4GPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default Sampurna4GPage;