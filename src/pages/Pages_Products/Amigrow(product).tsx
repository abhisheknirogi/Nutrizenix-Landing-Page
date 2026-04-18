import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "amigrow",
  name: "Amigrow",
  category: "Growth Promoter",
  tagline: "Amino acid-enriched growth promoter",
  oneLiner: "Boosts root development and plant vigour through concentrated amino acid nutrition.",
  description: "Nutrizenix Amigrow is a premium growth promoter designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Stimulates root development","Improves nutrient uptake efficiency","Enhances resistance to abiotic stress","Increases dry matter accumulation"],
  image: "/src/assets/products/amigrow.jpg",
  relatedIds: ["banana", "bhushakthi", "boron-plus"]
};

const AmigrowPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default AmigrowPage;