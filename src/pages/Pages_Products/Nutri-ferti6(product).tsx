import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "nutri-ferti6",
  name: "Nutri-Ferti 6",
  category: "100% Water Soluble Complex Fertilizer",
  tagline: "The ultimate phosphorus boost for root and fruit",
  oneLiner: "A high-concentration MAP fertilizer that accelerates root growth and prevents flower drop",
  description: "Nutri-ferti 6 is a premium complex fertilizer containing Nitrogen and Phosphorus in an easily soluble and highly available form. It is engineered to improve both root and shoot growth, ensuring the overall health of the plant while maximizing yield quality and quantity.",
  benefits: [
    "Significantly improves root and shoot development for a stronger plant foundation.",
    "Effectively reduces flower drop and increases successful fruit setting.",
    "Improves the final yield in terms of both quality and quantity.",
    "Provides nitrogen and phosphorus in a 100% water-soluble form for rapid uptake."
  ],
  dosage: [
    "Foliar Spray: Dissolve 4 to 5 grams in one litre of water and spray on plants.",
    "Fertigation: Use 1 to 3 kg per acre through drip or sprinkler irrigation systems."
  ],
  availablePacking: ["1 kg"],
  relatedIds: ["nutrical", "nutrichill", "nutriferus-12"]
};

const NutriFerti6Page: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default NutriFerti6Page;