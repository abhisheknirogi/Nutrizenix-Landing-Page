import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutri-ferti",
  name: "Nutri-Ferti",
  category: "Fertigation",
  tagline: "First in precision fertigation nutrition",
  oneLiner: "Stage 1 fertigation formula delivering balanced nutrition through drip irrigation systems.",
  description: "Nutrizenix Nutri-Ferti is a premium fertigation designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Optimized for drip and micro-irrigation","Fully water-soluble with no residue","Balanced N:P:K ratio for the growth stage","Safe for sensitive crops and soils"],
  image: "/src/assets/products/nutri-ferti.jpg",
  relatedIds: ["nutri-ferti2", "nutri-ferti3", "nutri-ferti4"]
};

const NutriFertiPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutriFertiPage;