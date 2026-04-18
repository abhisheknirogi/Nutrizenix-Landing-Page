import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutriferus-12",
  name: "Nutriferus-12",
  category: "12-Element Mix",
  tagline: "12-element complex for deficiency management",
  oneLiner: "Comprehensive 12-micronutrient formula for correcting complex, multiple-deficiency situations.",
  description: "Nutrizenix Nutriferus-12 is a premium 12-element mix designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/nutriferus-12.jpg",
  relatedIds: ["nutrigold", "nutrigrow", "nutrimag"]
};

const Nutriferus12Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default Nutriferus12Page;