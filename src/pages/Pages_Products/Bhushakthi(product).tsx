import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "bhushakthi",
  name: "Bhushakthi",
  category: "Soil Health",
  tagline: "Revitalize soil. Restore yield.",
  oneLiner: "Restores depleted soil vitality and improves nutrient availability for long-term productivity.",
  description: "Nutrizenix Bhushakthi is a premium soil health designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Improves cation exchange capacity","Enhances water-holding capacity","Stimulates beneficial microbial activity","Reduces nutrient leaching losses"],
  image: "/src/assets/products/bhushakthi.jpg",
  relatedIds: ["boron-plus", "boronplus", "calbon"]
};

const BhushakthiPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default BhushakthiPage;