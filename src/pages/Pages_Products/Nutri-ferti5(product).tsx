import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutri-ferti5",
  name: "Nutri-Ferti 5",
  category: "Fertigation",
  tagline: "Fruit development formula for size and quality",
  oneLiner: "Fuels cell division and fruit expansion during the critical fruit-fill stage.",
  description: "Nutrizenix Nutri-Ferti 5 is a premium fertigation designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Optimized for drip and micro-irrigation","Fully water-soluble with no residue","Balanced N:P:K ratio for the growth stage","Safe for sensitive crops and soils"],
  image: "/src/assets/products/nutri-ferti5.jpg",
  relatedIds: ["nutri-ferti6", "nutrical", "nutrichill"]
};

const NutriFerti5Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutriFerti5Page;