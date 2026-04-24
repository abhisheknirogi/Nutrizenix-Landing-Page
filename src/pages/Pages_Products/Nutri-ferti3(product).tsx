import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutri-ferti3",
  name: "Nutri-Ferti 3",
  category: "100% Water Soluble Complex Fertilizer",
  tagline: "Enhance fruit quality and harvest maturity",
  oneLiner: "A premium Potassium Sulphate (SOP) fertilizer that improves fruit size, color, and oil content",
  description: "Nutri-ferti 3 is a specialized complex fertilizer providing 50% Potassium ($K_{2}O$) in a 100% water-soluble form. It is designed to be easily available to plants, providing both Potassium and Sulphur in soluble forms to enhance plant growth and maturity.",
  benefits: [
    "Assists in better absorption of both Potassium and Sulphur.",
    "Improves fruit development, specifically increasing fruit size and enhancing color",
    "Increases oil content in seeds.",
    "Boosts overall yield in terms of both quality and quantity.",
    "Supports plant growth and ensures timely maturity."
  ],
  dosage: [
    "Foliar Spray: Dissolve 3 to 5 g per litre of water and spray on both surfaces of the leaves.",
    "Fertigation: Apply 2 to 3 kg per acre through irrigation systems."
  ],
  availablePacking: ["1 kg"],
  image: "/src/assets/products/nutri-ferti3.jpg",
  relatedIds: ["nutri-ferti4", "nutri-ferti5", "nutri-ferti6"]
};

const NutriFerti3Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutriFerti3Page;