import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "vajra",
  name: "Vajra",
  category: "Root & Strength",
  tagline: "Strong roots. Strong yield. Every season.",
  oneLiner: "Promotes robust root architecture and stem strength for better nutrient and water absorption.",
  description: "Nutrizenix Vajra is a premium root & strength designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Stimulates root development","Improves nutrient uptake efficiency","Enhances resistance to abiotic stress","Increases dry matter accumulation"],
  image: "/src/assets/products/vajra.jpg",
  relatedIds: ["wetgrow", "sampurna", "sampurna-4g"]
};

const VajraPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default VajraPage;