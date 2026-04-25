import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "amigrow",
  name: "Amigrow",
  category: "Growth Promoter",
  tagline: "Amino acid-enriched growth promoter",
  oneLiner: "Boosts root development and plant vigour through concentrated amino acid nutrition.",
  description: "AMIGROW+ is a liquid bio-stimulant product containing 18% protein hydrolysate (animal source) along with a mixture of amino acids. It is designed to enhance plant growth and productivity",
  benefits: [
    "Contains highly effective natural agents that promote photosynthesis, leading to better production of carbohydrates, proteins, oils, and fats.",
    "Provides energy-efficient nitrogen supply for plants.",
    "Supplies super cations, which improve resistance against diseases like chlorosis and help plants withstand stress such as drought.",
    "Acts as a strong plant growth promoter due to the presence of amino acids.",
    "Supports ripening and colouring process in fruits."
  ],
  dosage: [
    "Recommended Dosage: Dissolve 3–4 ml per liter of water",
    "1st Spray: 7 days after transplantation of early vegetable plants",
    "2nd Spray: During flowering stage",
    "3rd Spray: During panicle initiation or fruit formation stage"
  ],
  availablePacking: ["100ml", "250ml", "500ml", "1000ml", "5 Ltr."],
  relatedIds: ["banana", "bhushakthi", "boron-plus"]
};

const AmigrowPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default AmigrowPage;