import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "high-zinc",
  name: "High-Zinc",
  category: "Zinc",
  tagline: "Concentrated zinc for deficiency correction",
  oneLiner: "Fast-correcting zinc solution for reversing zinc deficiency and restoring healthy crop growth.",
  description: "Nutrizenix High-Zinc is a premium zinc designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  relatedIds: ["humigrow", "kalpam", "nutri-ferti"]
};

const HighZincPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default HighZincPage;