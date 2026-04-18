import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "dymond-12",
  name: "Dymond-12",
  category: "Nitrogen",
  tagline: "12% nitrogen formula for balanced growth",
  oneLiner: "Steady-release nitrogen source that supports uniform canopy development and leaf colour.",
  description: "Nutrizenix Dymond-12 is a premium nitrogen designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/dymond-12.jpg",
  relatedIds: ["dymond-21", "greenplus", "hi-power"]
};

const Dymond12Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default Dymond12Page;