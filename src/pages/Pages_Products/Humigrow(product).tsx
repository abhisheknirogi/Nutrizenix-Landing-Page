import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "humigrow",
  name: "Humigrow",
  category: "Soil Conditioner",
  tagline: "Humic acid formula for soil conditioning",
  oneLiner: "Concentrated humic acid that improves soil structure, water retention, and nutrient availability.",
  description: "Nutrizenix Humigrow is a premium soil conditioner designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Improves cation exchange capacity","Enhances water-holding capacity","Stimulates beneficial microbial activity","Reduces nutrient leaching losses"],
  relatedIds: ["kalpam", "nutri-ferti", "nutri-ferti2"]
};

const HumigrowPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default HumigrowPage;