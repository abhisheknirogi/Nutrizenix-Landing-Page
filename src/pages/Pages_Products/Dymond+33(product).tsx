import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "dymond-plus-33",
  name: "Dymond+33",
  category: "NPK Complex",
  tagline: "Triple-action NPK boost for maximum yield",
  oneLiner: "High-efficiency water-soluble NPK complex for rapid uptake and vigorous crop growth.",
  description: "Nutrizenix Dymond+33 is a premium npk complex designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/dymond-plus-33.jpg",
  relatedIds: ["dymond-12", "dymond-21", "greenplus"]
};

const DymondPlus33Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default DymondPlus33Page;