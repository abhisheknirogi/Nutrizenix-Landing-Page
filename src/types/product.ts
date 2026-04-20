export interface ProductData {
  id: string;
  name: string;
  category: string;
  tagline: string;
  oneLiner: string;
  description: string;
  benefits: string[];
  dosage?: string[];
  recommendedCrops?: string[];
  availablePacking?: string[];
  composition?: string[];
  image: string;
  relatedIds: string[];
}

/** Lightweight product info used for listing cards and related-product lookups */
export interface ProductListingItem {
  id: string;
  name: string;
  category: string;
  image: string;
  oneLiner: string;
}
