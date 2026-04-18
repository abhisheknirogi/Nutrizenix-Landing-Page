import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutri-ferti4",
  name: "Nutri-Ferti 4",
  category: "Fertigation",
  tagline: "Pre-flowering nutrition for better fruit set",
  oneLiner: "Prepares crops for flowering with targeted phosphorus and micronutrient support.",
  description: "Nutrizenix Nutri-Ferti 4 is a premium fertigation designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Optimized for drip and micro-irrigation","Fully water-soluble with no residue","Balanced N:P:K ratio for the growth stage","Safe for sensitive crops and soils"],
  image: "/src/assets/products/nutri-ferti4.jpg",
  relatedIds: ["nutri-ferti5", "nutri-ferti6", "nutrical"]
};

const NutriFerti4Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutriFerti4Page;