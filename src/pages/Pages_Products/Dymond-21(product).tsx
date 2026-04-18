import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "dymond-21",
  name: "Dymond-21",
  category: "High-N Complex",
  tagline: "High-efficiency 21% nutrient complex",
  oneLiner: "Concentrated nutrient formula delivering rapid green-up and accelerated vegetative growth.",
  description: "Nutrizenix Dymond-21 is a premium high-n complex designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/dymond-21.jpg",
  relatedIds: ["greenplus", "hi-power", "high-zinc"]
};

const Dymond21Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default Dymond21Page;