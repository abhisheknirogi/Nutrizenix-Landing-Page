import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "citron",
  name: "Citron",
  category: "Citrus Nutrition",
  tagline: "Specialized micronutrient blend for citrus crops",
  oneLiner: "Balanced micronutrient mix designed to meet the unique nutritional demands of citrus orchards.",
  description: "Nutrizenix Citron is a premium citrus nutrition designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/citron.jpg",
  relatedIds: ["dymond-plus-33", "dymond-12", "dymond-21"]
};

const CitronPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default CitronPage;