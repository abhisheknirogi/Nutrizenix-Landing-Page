import type { ProductListingItem } from '../types/product';

/**
 * Lightweight product listing data used for the products grid page,
 * ProductCard components, and related-product lookups.
 * Full product data now lives in each individual product page file.
 * Image resolution is handled by src/utils/imageMap.ts — no image field needed here.
 */
export const productsListing: ProductListingItem[] = [
  { id: "sampurna", name: "Sampurna", category: "Complete Nutrition", oneLiner: "A comprehensive macro and micronutrient blend for all crop types and soils." },
  { id: "sampurna-4g", name: "Sampurna 4G", category: "Slow Release", oneLiner: "Extended-release nutrition that feeds crops across all four growth stages." },
  { id: "aam", name: "Aam", category: "Orchard Nutrition", oneLiner: "Precision micronutrient formula developed specifically for mango crop health and fruit quality." },
  { id: "amigrow", name: "Amigrow", category: "Growth Promoter", oneLiner: "Boosts root development and plant vigour through concentrated amino acid nutrition." },
  { id: "banana", name: "Banana", category: "Crop-Specific", oneLiner: "Tailored nutrient blend that maximizes bunch weight and fruit quality in banana crops." },
  { id: "bhushakthi", name: "Bhushakthi", category: "Soil Health", oneLiner: "Restores depleted soil vitality and improves nutrient availability for long-term productivity." },
  { id: "boron-plus", name: "Boron+", category: "Boron", oneLiner: "High-efficiency boron supplement that improves pollination, fruit set, and quality." },
  { id: "boronplus", name: "Boronplus", category: "Boron", oneLiner: "Soluble boron formulation for correcting deficiencies across a wide range of crops." },
  { id: "calbon", name: "Calbon", category: "Calcium + Boron", oneLiner: "Synergistic blend of calcium and boron for stronger cell walls and better fruit set." },
  { id: "calon", name: "Calon", category: "Calcium", oneLiner: "High-absorption calcium formula that reduces tip burn, blossom end rot, and cracking." },
  { id: "citron", name: "Citron", category: "Citrus Nutrition", oneLiner: "Balanced micronutrient mix designed to meet the unique nutritional demands of citrus orchards." },
  { id: "dymond-plus-33", name: "Dymond+33", category: "NPK Complex", oneLiner: "High-efficiency water-soluble NPK complex for rapid uptake and vigorous crop growth." },
  { id: "dymond-12", name: "Dymond-12", category: "Nitrogen", oneLiner: "Steady-release nitrogen source that supports uniform canopy development and leaf colour." },
  { id: "dymond-21", name: "Dymond-21", category: "High-N Complex", oneLiner: "Concentrated nutrient formula delivering rapid green-up and accelerated vegetative growth." },
  { id: "greenplus", name: "Greenplus", category: "Chlorophyll Booster", oneLiner: "Stimulates chlorophyll synthesis for deeper leaf colour, better photosynthesis, and higher yield." },
  { id: "hi-power", name: "Hi-Power", category: "Energy Complex", oneLiner: "Dense micronutrient blend formulated for high-value, intensive cropping systems." },
  { id: "high-zinc", name: "High-Zinc", category: "Zinc", oneLiner: "Fast-correcting zinc solution for reversing zinc deficiency and restoring healthy crop growth." },
  { id: "humigrow", name: "Humigrow", category: "Soil Conditioner", oneLiner: "Concentrated humic acid that improves soil structure, water retention, and nutrient availability." },
  { id: "kalpam", name: "Kalpam", category: "Multi-Micronutrient", oneLiner: "Broad-spectrum micronutrient blend covering all common deficiencies in Indian agricultural soils." },
  { id: "nutri-ferti", name: "Nutri-Ferti", category: "Fertigation", oneLiner: "Stage 1 fertigation formula delivering balanced nutrition through drip irrigation systems." },
  { id: "nutri-ferti2", name: "Nutri-Ferti 2", category: "Fertigation", oneLiner: "Supports rapid canopy development and stem strength during the active growth phase." },
  { id: "nutri-ferti3", name: "Nutri-Ferti 3", category: "Fertigation", oneLiner: "Bridges the transition from vegetative to reproductive growth with balanced mid-season nutrition." },
  { id: "nutri-ferti4", name: "Nutri-Ferti 4", category: "Fertigation", oneLiner: "Prepares crops for flowering with targeted phosphorus and micronutrient support." },
  { id: "nutri-ferti5", name: "Nutri-Ferti 5", category: "Fertigation", oneLiner: "Fuels cell division and fruit expansion during the critical fruit-fill stage." },
  { id: "nutri-ferti6", name: "Nutri-Ferti 6", category: "Fertigation", oneLiner: "Final-stage formula that improves fruit colour, Brix levels, and post-harvest shelf life." },
  { id: "nutrical", name: "Nutrical", category: "Post-Harvest", oneLiner: "Reduces physiological disorders and extends shelf life through timely calcium supplementation." },
  { id: "nutrichill", name: "Nutrichill", category: "Stress Relief", oneLiner: "Protects crops from heat, cold, and drought stress through targeted osmoprotectant nutrition." },
  { id: "nutriferus-12", name: "Nutriferus-12", category: "12-Element Mix", oneLiner: "Comprehensive 12-micronutrient formula for correcting complex, multiple-deficiency situations." },
  { id: "nutrigold", name: "Nutrigold", category: "Premium Blend", oneLiner: "Premium chelated micronutrient blend for high-value crops demanding exceptional quality output." },
  { id: "nutrigrow", name: "Nutrigrow", category: "Growth Stages", oneLiner: "Stage-matched nutrient delivery system supporting crops from germination through full canopy." },
  { id: "nutrimag", name: "Nutrimag", category: "Magnesium", oneLiner: "Corrects magnesium deficiency and enhances chlorophyll function for better photosynthesis." },
  { id: "nutrimix", name: "Nutrimix", category: "Multi-Nutrient", oneLiner: "All-in-one nutrient blend for maintaining balanced crop nutrition throughout the season." },
  { id: "pride-x", name: "Pride-X", category: "Next-Gen", oneLiner: "Advanced chelated formula designed for precision farming and high-efficiency nutrient use." },
  { id: "s-400", name: "S-400", category: "Sulphur", oneLiner: "High-sulphur formulation addressing sulphur deficiency in oilseed, pulse, and allium crops." },
  { id: "superplus", name: "Superplus", category: "Intensive Crop", oneLiner: "High-density micronutrient mix for crops under intensive management and high-yield targets." },
  { id: "vajra", name: "Vajra", category: "Root & Strength", oneLiner: "Promotes robust root architecture and stem strength for better nutrient and water absorption." },
  { id: "wetgrow", name: "Wetgrow", category: "Wetland Crops", oneLiner: "Micronutrient blend specifically designed for flooded and wetland crop cultivation conditions." },
];
