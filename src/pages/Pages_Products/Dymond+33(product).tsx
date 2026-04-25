import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "dymond-plus-33",
  name: "Dymond+33",
  category: "NPK Complex",
  tagline: "Triple-action NPK boost for maximum yield",
  oneLiner: "High-efficiency water-soluble NPK complex for rapid uptake and vigorous crop growth.",
  description: "DYMOND +33 is a high-purity Zinc Monohydrate (33%) fertilizer formulated for Foliar Application. It is designed to quickly correct zinc deficiencies across a wide range of agricultural and horticultural crops.",
  benefits: [
    "Disease Control: Specifically controls yellowing (Khaira) disease in paddy.",
    "Deficiency Management: Controls zinc deficiency in Maize, Sugarcane, and all Agri/Horticultural crops.",
    "Yield & Quality: Boosts the overall yield and improves the quality of the crop.",
    "Purity: Provides quality-assured zinc with 100% purity.",
    "Long-term Health: Applied crops will stay protected and never show zinc deficiency."
  ],
  dosage: ["Apply 2–3 gms per liter of water as a foliar application."],
  recommendedCrops: ["Paddy", "Maize", "Sugarcane", "Cotton", "Fruits", "Vegetables (Potato, Tomato)", "Horticulture", "Plantation crops"],
  availablePacking: ["250g", "500g", "1 KG"],
  relatedIds: ["dymond-12", "dymond-21", "greenplus"]
};

const DymondPlus33Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default DymondPlus33Page;