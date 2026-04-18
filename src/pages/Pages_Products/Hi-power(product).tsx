import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "hi-power",
  name: "Hi-Power",
  category: "Energy Complex",
  tagline: "High-energy micronutrient complex for intensive crops",
  oneLiner: "Dense micronutrient blend formulated for high-value, intensive cropping systems.",
  description: "Nutrizenix Hi-Power is a premium energy complex designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Stimulates root development","Improves nutrient uptake efficiency","Enhances resistance to abiotic stress","Increases dry matter accumulation"],
  image: "/src/assets/products/hi-power.jpg",
  relatedIds: ["high-zinc", "humigrow", "kalpam"]
};

const HiPowerPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default HiPowerPage;