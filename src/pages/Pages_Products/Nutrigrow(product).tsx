import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutrigrow",
  name: "Nutrigrow",
  category: "Growth Stages",
  tagline: "Growth-stage nutrition from seedling to canopy",
  oneLiner: "Stage-matched nutrient delivery system supporting crops from germination through full canopy.",
  description: "Nutrizenix Nutrigrow is a premium growth stages designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Stimulates root development","Improves nutrient uptake efficiency","Enhances resistance to abiotic stress","Increases dry matter accumulation"],
  image: "/src/assets/products/nutrigrow.jpg",
  relatedIds: ["nutrimag", "nutrimix", "pride-x"]
};

const NutrigrowPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutrigrowPage;