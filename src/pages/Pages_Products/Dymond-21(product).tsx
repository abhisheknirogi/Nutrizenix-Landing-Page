import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "dymond-21",
  name: "Dymond-21",
  category: "High-N Complex",
  tagline: "High-efficiency 21% nutrient complex",
  oneLiner: "Concentrated nutrient formula delivering rapid green-up and accelerated vegetative growth.",
  description: "Dymond-21 is a high-efficiency micronutrient fertilizer with 21% zinc concentration. It can be used for soil application during sowing or transplanting, or as a foliar spray. It serves as a vital catalyst for enzyme systems and auxin production, supporting protein synthesis and disease resistance.",
  benefits: [
    "Promotes growth hormones and starch formation.",
    "Facilitates seed maturation and development.",
    "Essential for enzyme systems and auxins involved in protein synthesis.",
    "Improves natural disease resistance in plants."
  ],
  dosage: [
    "Soil application: 5.0 kg per acre at sowing or transplanting.",
    "Horticulture crops: 50–75 g per tree/palm, once every six months.",
    "Foliar spray: Dissolve 3.0 g per liter of water and spray on leaf surfaces."
  ],
  availablePacking: ["1 Kg"],
  relatedIds: ["greenplus", "hi-power", "high-zinc"]
};

const Dymond21Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default Dymond21Page;