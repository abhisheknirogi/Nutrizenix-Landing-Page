import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "s-400",
  name: "S-400",
  category: "Sulphur",
  tagline: "Sulphur-400 formula for oilseed and pulse crops",
  oneLiner: "High-sulphur formulation addressing sulphur deficiency in oilseed, pulse, and allium crops.",
  description: "Nutrizenix S-400 is a premium sulphur designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/s-400.jpg",
  relatedIds: ["superplus", "vajra", "wetgrow"]
};

const S400Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default S400Page;