import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "wetgrow",
  name: "Wetgrow",
  category: "Wetland Crops",
  tagline: "Optimized nutrition for paddy and wetland crops",
  oneLiner: "Micronutrient blend specifically designed for flooded and wetland crop cultivation conditions.",
  description: "Nutrizenix Wetgrow is a premium wetland crops designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/wetgrow.jpg",
  relatedIds: ["sampurna", "sampurna-4g", "aam"]
};

const WetgrowPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default WetgrowPage;