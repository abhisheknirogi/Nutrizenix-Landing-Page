import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "calon",
  name: "Calon",
  category: "Calcium",
  tagline: "Calcium-optimized formula for cell wall strength",
  oneLiner: "High-absorption calcium formula that reduces tip burn, blossom end rot, and cracking.",
  description: "Nutrizenix Calon is a premium calcium designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
  benefits: ["Strengthens cell walls and reduces cracking","Prevents blossom end rot and tip burn","Improves post-harvest shelf life","Works best with boron for maximum absorption"],
  image: "/src/assets/products/calon.jpg",
  relatedIds: ["citron", "dymond-plus-33", "dymond-12"]
};

const CalonPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default CalonPage;