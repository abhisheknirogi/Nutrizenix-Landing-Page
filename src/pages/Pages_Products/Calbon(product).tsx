import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "calbon",
  name: "Calbon",
  category: "Calcium + Boron",
  tagline: "Calcium and boron synergy for stronger crops",
  oneLiner: "Synergistic blend of calcium and boron for stronger cell walls and better fruit set.",
  description: "Nutrizenix Calbon is a premium calcium + boron designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Strengthens cell walls and reduces cracking","Prevents blossom end rot and tip burn","Improves post-harvest shelf life","Works best with boron for maximum absorption"],
  image: "/src/assets/products/calbon.jpg",
  relatedIds: ["calon", "citron", "dymond-plus-33"]
};

const CalbonPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default CalbonPage;