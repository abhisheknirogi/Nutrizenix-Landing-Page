import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "superplus",
  name: "Superplus",
  category: "Micronutrient Fertilizer Mixture (Foliar Spray)",
  tagline: "The catalytic boost for vigorous growth",
  oneLiner: "A 100% water-soluble micronutrient mixture designed for efficient leaf absorption and enhanced immunity.",
  description: "Super Plus is an essential micronutrient mixture product formulated for spray application. It is a 100% water-soluble fertilizer, which facilitates the efficient and rapid absorption of vital nutrients directly through the leaves.",
  benefits: [
    "Nutrient Utilization: Helps the plant achieve better utilization of major nutrients.",
    "Immunity Boost: Increases the immunity power of plants, helping them withstand adverse environmental conditions.",
    "Growth Catalyst: Takes part in enzymatic functions and acts as a catalytic agent to produce vigorous growth.",
    "Yield & Quality: Helps to increase both the total yield and the overall quality of the farm produce."
  ],
  dosage: [
    "Rate: Use 2–3 ml of Super Plus per 1 litre of water.",
    "Factors: The exact dosage depends upon the specific crop age and growth stages."
  ],
  availablePacking: ["100ml", "250ml", "500ml", "1000ml", "5 Ltr"],
  image: "/src/assets/products/superplus.jpg",
  relatedIds: ["vajra", "wetgrow", "sampurna"]
};

const SuperplusPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default SuperplusPage;