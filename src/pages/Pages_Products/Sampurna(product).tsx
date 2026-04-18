import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "sampurna",
  name: "Sampurna",
  category: "Complete Nutrition",
  tagline: "Complete crop nutrition in every drop",
  oneLiner: "A comprehensive macro and micronutrient blend for all crop types and soils.",
  description: "Nutrizenix Sampurna is a premium complete nutrition designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/sampurna.jpg",
  relatedIds: ["sampurna-4g", "aam", "amigrow"]
};

const SampurnaPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default SampurnaPage;