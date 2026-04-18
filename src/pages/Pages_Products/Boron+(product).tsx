import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "boron-plus",
  name: "Boron+",
  category: "Boron",
  tagline: "Enhanced boron for better fruit set and flowering",
  oneLiner: "High-efficiency boron supplement that improves pollination, fruit set, and quality.",
  description: "Nutrizenix Boron+ is a premium boron designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Improves pollination and fruit set","Enhances sugar translocation","Reduces hollow heart in root vegetables","Effective at low application rates"],
  image: "/src/assets/products/boron-plus.jpg",
  relatedIds: ["boronplus", "calbon", "calon"]
};

const BoronPlusPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default BoronPlusPage;