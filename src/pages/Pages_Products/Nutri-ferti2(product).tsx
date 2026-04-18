import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutri-ferti2",
  name: "Nutri-Ferti 2",
  category: "Fertigation",
  tagline: "Stage 2 formula for active vegetative growth",
  oneLiner: "Supports rapid canopy development and stem strength during the active growth phase.",
  description: "Nutrizenix Nutri-Ferti 2 is a premium fertigation designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Optimized for drip and micro-irrigation","Fully water-soluble with no residue","Balanced N:P:K ratio for the growth stage","Safe for sensitive crops and soils"],
  image: "/src/assets/products/nutri-ferti2.jpg",
  relatedIds: ["nutri-ferti3", "nutri-ferti4", "nutri-ferti5"]
};

const NutriFerti2Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutriFerti2Page;