import React from 'react';
import type { ProductData } from '../../types/product';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';

const productData: ProductData = {
  id: "sampurna",
  name: "Sampurna",
  category: "Biostimulant Product (Foliar Application)",
  tagline: "The natural vitality of the sea for your crops.",
  oneLiner: "A premium organic seaweed extract (Ascophyllum nodosum) to enhance photosynthesis and plant immunity.",
  description: "Nutrizenix SAMPURNA is a high-performance organic biostimulant containing a 20% liquid concentration of Ascophyllum nodosum (Seaweed Extract). It is specifically formulated for foliar application to stimulate natural growth hormones and improve the overall physiological health of the plant.",
  benefits: [
    "Photosynthesis Enhancement: Directly improves the photosynthesis process in plants, causing the entire plant to become a healthy, deep greenish color.",
    "Micronutrient Support: Specifically helps plants overcome micronutrient deficiencies across all crop varieties.",
    "Stress Management: Assists in developing natural resistance against pests, diseases, and abiotic (environmental) stresses."
  ],
  dosage: [
    "Rate: Rate: Mix 2–3 ml of SAMPURNA per 1 liter of water.",
    "Frequency: Repeated applications at 15–20 day intervals will ensure healthy crop growth."
  ],
  availablePacking: ["100ml", "250ml", "500ml", "1000ml", "5 Ltr"],
  relatedIds: ["sampurna-4g", "aam", "amigrow"]
};

const SampurnaPage: React.FC = () => {
  return <ProductPageTemplate {...productData} />;
};

export default SampurnaPage;