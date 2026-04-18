import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "greenplus",
  name: "Greenplus",
  category: "Chlorophyll Booster",
  tagline: "Boost chlorophyll. Boost growth.",
  oneLiner: "Stimulates chlorophyll synthesis for deeper leaf colour, better photosynthesis, and higher yield.",
  description: "Nutrizenix Greenplus is a premium chlorophyll booster designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/greenplus.jpg",
  relatedIds: ["hi-power", "high-zinc", "humigrow"]
};

const GreenplusPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default GreenplusPage;