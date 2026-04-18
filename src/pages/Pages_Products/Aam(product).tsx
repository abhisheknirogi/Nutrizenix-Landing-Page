import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "aam",
  name: "Aam",
  category: "Orchard Nutrition",
  tagline: "Specialized nutrition for mango orchards",
  oneLiner: "Precision micronutrient formula developed specifically for mango crop health and fruit quality.",
  description: "Nutrizenix Aam is a premium orchard nutrition designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/aam.jpg",
  relatedIds: ["amigrow", "banana", "bhushakthi"]
};

const AamPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default AamPage;