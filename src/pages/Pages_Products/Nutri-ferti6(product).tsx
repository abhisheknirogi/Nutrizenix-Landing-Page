import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutri-ferti6",
  name: "Nutri-Ferti 6",
  category: "Fertigation",
  tagline: "Harvest-ready ripening and colour enhancement",
  oneLiner: "Final-stage formula that improves fruit colour, Brix levels, and post-harvest shelf life.",
  description: "Nutrizenix Nutri-Ferti 6 is a premium fertigation designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Optimized for drip and micro-irrigation","Fully water-soluble with no residue","Balanced N:P:K ratio for the growth stage","Safe for sensitive crops and soils"],
  image: "/src/assets/products/nutri-ferti6.jpg",
  relatedIds: ["nutrical", "nutrichill", "nutriferus-12"]
};

const NutriFerti6Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutriFerti6Page;