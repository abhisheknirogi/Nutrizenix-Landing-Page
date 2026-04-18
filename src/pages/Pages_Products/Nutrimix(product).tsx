import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutrimix",
  name: "Nutrimix",
  category: "Multi-Nutrient",
  tagline: "Multi-nutrient blend for balanced crop health",
  oneLiner: "All-in-one nutrient blend for maintaining balanced crop nutrition throughout the season.",
  description: "Nutrizenix Nutrimix is a premium multi-nutrient designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/nutrimix.jpg",
  relatedIds: ["pride-x", "s-400", "superplus"]
};

const NutrimixPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutrimixPage;