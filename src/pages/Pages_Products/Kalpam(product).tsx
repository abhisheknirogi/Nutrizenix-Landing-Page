import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "kalpam",
  name: "Kalpam",
  category: "Multi-Micronutrient",
  tagline: "The complete micronutrient mix for Indian soils",
  oneLiner: "Broad-spectrum micronutrient blend covering all common deficiencies in Indian agricultural soils.",
  description: "Nutrizenix Kalpam is a premium multi-micronutrient designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
  image: "/src/assets/products/kalpam.jpg",
  relatedIds: ["nutri-ferti", "nutri-ferti2", "nutri-ferti3"]
};

const KalpamPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default KalpamPage;