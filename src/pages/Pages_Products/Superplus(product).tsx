import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "superplus",
  name: "Superplus",
  category: "Intensive Crop",
  tagline: "Super-charged blend for intensive cultivation",
  oneLiner: "High-density micronutrient mix for crops under intensive management and high-yield targets.",
  description: "Nutrizenix Superplus is a premium intensive crop designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/superplus.jpg",
  relatedIds: ["vajra", "wetgrow", "sampurna"]
};

const SuperplusPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default SuperplusPage;