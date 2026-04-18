export interface ProductData {
  id: string;
  name: string;
  category: string;
  tagline: string;
  oneLiner: string;
  description: string;
  benefits: string[];
  image: string;
  relatedIds: string[];
}

export const productsData: ProductData[] = [
  {
    id: "sampurna",
    name: "Sampurna",
    category: "Complete Nutrition",
    tagline: "Complete crop nutrition in every drop",
    oneLiner: "A comprehensive macro and micronutrient blend for all crop types and soils.",
    description: "Nutrizenix Sampurna is a premium complete nutrition designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/sampurna.jpg",
    relatedIds: ["sampurna-4g", "aam", "amigrow"]
  },
  {
    id: "sampurna-4g",
    name: "Sampurna 4G",
    category: "Slow Release",
    tagline: "Four-generation formula for lasting soil health",
    oneLiner: "Extended-release nutrition that feeds crops across all four growth stages.",
    description: "Nutrizenix Sampurna 4G is a premium slow release designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/sampurna-4g.jpg",
    relatedIds: ["aam", "amigrow", "banana"]
  },
  {
    id: "aam",
    name: "Aam",
    category: "Orchard Nutrition",
    tagline: "Specialized nutrition for mango orchards",
    oneLiner: "Precision micronutrient formula developed specifically for mango crop health and fruit quality.",
    description: "Nutrizenix Aam is a premium orchard nutrition designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/aam.jpg",
    relatedIds: ["amigrow", "banana", "bhushakthi"]
  },
  {
    id: "amigrow",
    name: "Amigrow",
    category: "Growth Promoter",
    tagline: "Amino acid-enriched growth promoter",
    oneLiner: "Boosts root development and plant vigour through concentrated amino acid nutrition.",
    description: "Nutrizenix Amigrow is a premium growth promoter designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Stimulates root development","Improves nutrient uptake efficiency","Enhances resistance to abiotic stress","Increases dry matter accumulation"],
    image: "/src/assets/products/amigrow.jpg",
    relatedIds: ["banana", "bhushakthi", "boron-plus"]
  },
  {
    id: "banana",
    name: "Banana",
    category: "Crop-Specific",
    tagline: "Targeted nutrition for high-yield banana cultivation",
    oneLiner: "Tailored nutrient blend that maximizes bunch weight and fruit quality in banana crops.",
    description: "Nutrizenix Banana is a premium crop-specific designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/banana.jpg",
    relatedIds: ["bhushakthi", "boron-plus", "boronplus"]
  },
  {
    id: "bhushakthi",
    name: "Bhushakthi",
    category: "Soil Health",
    tagline: "Revitalize soil. Restore yield.",
    oneLiner: "Restores depleted soil vitality and improves nutrient availability for long-term productivity.",
    description: "Nutrizenix Bhushakthi is a premium soil health designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Improves cation exchange capacity","Enhances water-holding capacity","Stimulates beneficial microbial activity","Reduces nutrient leaching losses"],
    image: "/src/assets/products/bhushakthi.jpg",
    relatedIds: ["boron-plus", "boronplus", "calbon"]
  },
  {
    id: "boron-plus",
    name: "Boron+",
    category: "Boron",
    tagline: "Enhanced boron for better fruit set and flowering",
    oneLiner: "High-efficiency boron supplement that improves pollination, fruit set, and quality.",
    description: "Nutrizenix Boron+ is a premium boron designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Improves pollination and fruit set","Enhances sugar translocation","Reduces hollow heart in root vegetables","Effective at low application rates"],
    image: "/src/assets/products/boron-plus.jpg",
    relatedIds: ["boronplus", "calbon", "calon"]
  },
  {
    id: "boronplus",
    name: "Boronplus",
    category: "Boron",
    tagline: "Precision boron nutrition for Indian crops",
    oneLiner: "Soluble boron formulation for correcting deficiencies across a wide range of crops.",
    description: "Nutrizenix Boronplus is a premium boron designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Improves pollination and fruit set","Enhances sugar translocation","Reduces hollow heart in root vegetables","Effective at low application rates"],
    image: "/src/assets/products/boronplus.jpg",
    relatedIds: ["calbon", "calon", "citron"]
  },
  {
    id: "calbon",
    name: "Calbon",
    category: "Calcium + Boron",
    tagline: "Calcium and boron synergy for stronger crops",
    oneLiner: "Synergistic blend of calcium and boron for stronger cell walls and better fruit set.",
    description: "Nutrizenix Calbon is a premium calcium + boron designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Strengthens cell walls and reduces cracking","Prevents blossom end rot and tip burn","Improves post-harvest shelf life","Works best with boron for maximum absorption"],
    image: "/src/assets/products/calbon.jpg",
    relatedIds: ["calon", "citron", "dymond-plus-33"]
  },
  {
    id: "calon",
    name: "Calon",
    category: "Calcium",
    tagline: "Calcium-optimized formula for cell wall strength",
    oneLiner: "High-absorption calcium formula that reduces tip burn, blossom end rot, and cracking.",
    description: "Nutrizenix Calon is a premium calcium designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Strengthens cell walls and reduces cracking","Prevents blossom end rot and tip burn","Improves post-harvest shelf life","Works best with boron for maximum absorption"],
    image: "/src/assets/products/calon.jpg",
    relatedIds: ["citron", "dymond-plus-33", "dymond-12"]
  },
  {
    id: "citron",
    name: "Citron",
    category: "Citrus Nutrition",
    tagline: "Specialized micronutrient blend for citrus crops",
    oneLiner: "Balanced micronutrient mix designed to meet the unique nutritional demands of citrus orchards.",
    description: "Nutrizenix Citron is a premium citrus nutrition designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/citron.jpg",
    relatedIds: ["dymond-plus-33", "dymond-12", "dymond-21"]
  },
  {
    id: "dymond-plus-33",
    name: "Dymond+33",
    category: "NPK Complex",
    tagline: "Triple-action NPK boost for maximum yield",
    oneLiner: "High-efficiency water-soluble NPK complex for rapid uptake and vigorous crop growth.",
    description: "Nutrizenix Dymond+33 is a premium npk complex designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/dymond-plus-33.jpg",
    relatedIds: ["dymond-12", "dymond-21", "greenplus"]
  },
  {
    id: "dymond-12",
    name: "Dymond-12",
    category: "Nitrogen",
    tagline: "12% nitrogen formula for balanced growth",
    oneLiner: "Steady-release nitrogen source that supports uniform canopy development and leaf colour.",
    description: "Nutrizenix Dymond-12 is a premium nitrogen designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/dymond-12.jpg",
    relatedIds: ["dymond-21", "greenplus", "hi-power"]
  },
  {
    id: "dymond-21",
    name: "Dymond-21",
    category: "High-N Complex",
    tagline: "High-efficiency 21% nutrient complex",
    oneLiner: "Concentrated nutrient formula delivering rapid green-up and accelerated vegetative growth.",
    description: "Nutrizenix Dymond-21 is a premium high-n complex designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/dymond-21.jpg",
    relatedIds: ["greenplus", "hi-power", "high-zinc"]
  },
  {
    id: "greenplus",
    name: "Greenplus",
    category: "Chlorophyll Booster",
    tagline: "Boost chlorophyll. Boost growth.",
    oneLiner: "Stimulates chlorophyll synthesis for deeper leaf colour, better photosynthesis, and higher yield.",
    description: "Nutrizenix Greenplus is a premium chlorophyll booster designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/greenplus.jpg",
    relatedIds: ["hi-power", "high-zinc", "humigrow"]
  },
  {
    id: "hi-power",
    name: "Hi-Power",
    category: "Energy Complex",
    tagline: "High-energy micronutrient complex for intensive crops",
    oneLiner: "Dense micronutrient blend formulated for high-value, intensive cropping systems.",
    description: "Nutrizenix Hi-Power is a premium energy complex designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Stimulates root development","Improves nutrient uptake efficiency","Enhances resistance to abiotic stress","Increases dry matter accumulation"],
    image: "/src/assets/products/hi-power.jpg",
    relatedIds: ["high-zinc", "humigrow", "kalpam"]
  },
  {
    id: "high-zinc",
    name: "High-Zinc",
    category: "Zinc",
    tagline: "Concentrated zinc for deficiency correction",
    oneLiner: "Fast-correcting zinc solution for reversing zinc deficiency and restoring healthy crop growth.",
    description: "Nutrizenix High-Zinc is a premium zinc designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/high-zinc.jpg",
    relatedIds: ["humigrow", "kalpam", "nutri-ferti"]
  },
  {
    id: "humigrow",
    name: "Humigrow",
    category: "Soil Conditioner",
    tagline: "Humic acid formula for soil conditioning",
    oneLiner: "Concentrated humic acid that improves soil structure, water retention, and nutrient availability.",
    description: "Nutrizenix Humigrow is a premium soil conditioner designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Improves cation exchange capacity","Enhances water-holding capacity","Stimulates beneficial microbial activity","Reduces nutrient leaching losses"],
    image: "/src/assets/products/humigrow.jpg",
    relatedIds: ["kalpam", "nutri-ferti", "nutri-ferti2"]
  },
  {
    id: "kalpam",
    name: "Kalpam",
    category: "Multi-Micronutrient",
    tagline: "The complete micronutrient mix for Indian soils",
    oneLiner: "Broad-spectrum micronutrient blend covering all common deficiencies in Indian agricultural soils.",
    description: "Nutrizenix Kalpam is a premium multi-micronutrient designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/kalpam.jpg",
    relatedIds: ["nutri-ferti", "nutri-ferti2", "nutri-ferti3"]
  },
  {
    id: "nutri-ferti",
    name: "Nutri-Ferti",
    category: "Fertigation",
    tagline: "First in precision fertigation nutrition",
    oneLiner: "Stage 1 fertigation formula delivering balanced nutrition through drip irrigation systems.",
    description: "Nutrizenix Nutri-Ferti is a premium fertigation designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Optimized for drip and micro-irrigation","Fully water-soluble with no residue","Balanced N:P:K ratio for the growth stage","Safe for sensitive crops and soils"],
    image: "/src/assets/products/nutri-ferti.jpg",
    relatedIds: ["nutri-ferti2", "nutri-ferti3", "nutri-ferti4"]
  },
  {
    id: "nutri-ferti2",
    name: "Nutri-Ferti 2",
    category: "Fertigation",
    tagline: "Stage 2 formula for active vegetative growth",
    oneLiner: "Supports rapid canopy development and stem strength during the active growth phase.",
    description: "Nutrizenix Nutri-Ferti 2 is a premium fertigation designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Optimized for drip and micro-irrigation","Fully water-soluble with no residue","Balanced N:P:K ratio for the growth stage","Safe for sensitive crops and soils"],
    image: "/src/assets/products/nutri-ferti2.jpg",
    relatedIds: ["nutri-ferti3", "nutri-ferti4", "nutri-ferti5"]
  },
  {
    id: "nutri-ferti3",
    name: "Nutri-Ferti 3",
    category: "Fertigation",
    tagline: "Mid-season nutrient balance for peak performance",
    oneLiner: "Bridges the transition from vegetative to reproductive growth with balanced mid-season nutrition.",
    description: "Nutrizenix Nutri-Ferti 3 is a premium fertigation designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Optimized for drip and micro-irrigation","Fully water-soluble with no residue","Balanced N:P:K ratio for the growth stage","Safe for sensitive crops and soils"],
    image: "/src/assets/products/nutri-ferti3.jpg",
    relatedIds: ["nutri-ferti4", "nutri-ferti5", "nutri-ferti6"]
  },
  {
    id: "nutri-ferti4",
    name: "Nutri-Ferti 4",
    category: "Fertigation",
    tagline: "Pre-flowering nutrition for better fruit set",
    oneLiner: "Prepares crops for flowering with targeted phosphorus and micronutrient support.",
    description: "Nutrizenix Nutri-Ferti 4 is a premium fertigation designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Optimized for drip and micro-irrigation","Fully water-soluble with no residue","Balanced N:P:K ratio for the growth stage","Safe for sensitive crops and soils"],
    image: "/src/assets/products/nutri-ferti4.jpg",
    relatedIds: ["nutri-ferti5", "nutri-ferti6", "nutrical"]
  },
  {
    id: "nutri-ferti5",
    name: "Nutri-Ferti 5",
    category: "Fertigation",
    tagline: "Fruit development formula for size and quality",
    oneLiner: "Fuels cell division and fruit expansion during the critical fruit-fill stage.",
    description: "Nutrizenix Nutri-Ferti 5 is a premium fertigation designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Optimized for drip and micro-irrigation","Fully water-soluble with no residue","Balanced N:P:K ratio for the growth stage","Safe for sensitive crops and soils"],
    image: "/src/assets/products/nutri-ferti5.jpg",
    relatedIds: ["nutri-ferti6", "nutrical", "nutrichill"]
  },
  {
    id: "nutri-ferti6",
    name: "Nutri-Ferti 6",
    category: "Fertigation",
    tagline: "Harvest-ready ripening and colour enhancement",
    oneLiner: "Final-stage formula that improves fruit colour, Brix levels, and post-harvest shelf life.",
    description: "Nutrizenix Nutri-Ferti 6 is a premium fertigation designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Optimized for drip and micro-irrigation","Fully water-soluble with no residue","Balanced N:P:K ratio for the growth stage","Safe for sensitive crops and soils"],
    image: "/src/assets/products/nutri-ferti6.jpg",
    relatedIds: ["nutrical", "nutrichill", "nutriferus-12"]
  },
  {
    id: "nutrical",
    name: "Nutrical",
    category: "Post-Harvest",
    tagline: "Calcium-rich formula for post-harvest quality",
    oneLiner: "Reduces physiological disorders and extends shelf life through timely calcium supplementation.",
    description: "Nutrizenix Nutrical is a premium post-harvest designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/nutrical.jpg",
    relatedIds: ["nutrichill", "nutriferus-12", "nutrigold"]
  },
  {
    id: "nutrichill",
    name: "Nutrichill",
    category: "Stress Relief",
    tagline: "Stress relief nutrition for extreme conditions",
    oneLiner: "Protects crops from heat, cold, and drought stress through targeted osmoprotectant nutrition.",
    description: "Nutrizenix Nutrichill is a premium stress relief designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/nutrichill.jpg",
    relatedIds: ["nutriferus-12", "nutrigold", "nutrigrow"]
  },
  {
    id: "nutriferus-12",
    name: "Nutriferus-12",
    category: "12-Element Mix",
    tagline: "12-element complex for deficiency management",
    oneLiner: "Comprehensive 12-micronutrient formula for correcting complex, multiple-deficiency situations.",
    description: "Nutrizenix Nutriferus-12 is a premium 12-element mix designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/nutriferus-12.jpg",
    relatedIds: ["nutrigold", "nutrigrow", "nutrimag"]
  },
  {
    id: "nutrigold",
    name: "Nutrigold",
    category: "Premium Blend",
    tagline: "Gold-standard micronutrient mix for premium yield",
    oneLiner: "Premium chelated micronutrient blend for high-value crops demanding exceptional quality output.",
    description: "Nutrizenix Nutrigold is a premium premium blend designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/nutrigold.jpg",
    relatedIds: ["nutrigrow", "nutrimag", "nutrimix"]
  },
  {
    id: "nutrigrow",
    name: "Nutrigrow",
    category: "Growth Stages",
    tagline: "Growth-stage nutrition from seedling to canopy",
    oneLiner: "Stage-matched nutrient delivery system supporting crops from germination through full canopy.",
    description: "Nutrizenix Nutrigrow is a premium growth stages designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Stimulates root development","Improves nutrient uptake efficiency","Enhances resistance to abiotic stress","Increases dry matter accumulation"],
    image: "/src/assets/products/nutrigrow.jpg",
    relatedIds: ["nutrimag", "nutrimix", "pride-x"]
  },
  {
    id: "nutrimag",
    name: "Nutrimag",
    category: "Magnesium",
    tagline: "Magnesium-focused formula for photosynthesis support",
    oneLiner: "Corrects magnesium deficiency and enhances chlorophyll function for better photosynthesis.",
    description: "Nutrizenix Nutrimag is a premium magnesium designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/nutrimag.jpg",
    relatedIds: ["nutrimix", "pride-x", "s-400"]
  },
  {
    id: "nutrimix",
    name: "Nutrimix",
    category: "Multi-Nutrient",
    tagline: "Multi-nutrient blend for balanced crop health",
    oneLiner: "All-in-one nutrient blend for maintaining balanced crop nutrition throughout the season.",
    description: "Nutrizenix Nutrimix is a premium multi-nutrient designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/nutrimix.jpg",
    relatedIds: ["pride-x", "s-400", "superplus"]
  },
  {
    id: "pride-x",
    name: "Pride-X",
    category: "Next-Gen",
    tagline: "Next-generation crop nutrition for modern farming",
    oneLiner: "Advanced chelated formula designed for precision farming and high-efficiency nutrient use.",
    description: "Nutrizenix Pride-X is a premium next-gen designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/pride-x.jpg",
    relatedIds: ["s-400", "superplus", "vajra"]
  },
  {
    id: "s-400",
    name: "S-400",
    category: "Sulphur",
    tagline: "Sulphur-400 formula for oilseed and pulse crops",
    oneLiner: "High-sulphur formulation addressing sulphur deficiency in oilseed, pulse, and allium crops.",
    description: "Nutrizenix S-400 is a premium sulphur designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/s-400.jpg",
    relatedIds: ["superplus", "vajra", "wetgrow"]
  },
  {
    id: "superplus",
    name: "Superplus",
    category: "Intensive Crop",
    tagline: "Super-charged blend for intensive cultivation",
    oneLiner: "High-density micronutrient mix for crops under intensive management and high-yield targets.",
    description: "Nutrizenix Superplus is a premium intensive crop designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/superplus.jpg",
    relatedIds: ["vajra", "wetgrow", "sampurna"]
  },
  {
    id: "vajra",
    name: "Vajra",
    category: "Root & Strength",
    tagline: "Strong roots. Strong yield. Every season.",
    oneLiner: "Promotes robust root architecture and stem strength for better nutrient and water absorption.",
    description: "Nutrizenix Vajra is a premium root & strength designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Stimulates root development","Improves nutrient uptake efficiency","Enhances resistance to abiotic stress","Increases dry matter accumulation"],
    image: "/src/assets/products/vajra.jpg",
    relatedIds: ["wetgrow", "sampurna", "sampurna-4g"]
  },
  {
    id: "wetgrow",
    name: "Wetgrow",
    category: "Wetland Crops",
    tagline: "Optimized nutrition for paddy and wetland crops",
    oneLiner: "Micronutrient blend specifically designed for flooded and wetland crop cultivation conditions.",
    description: "Nutrizenix Wetgrow is a premium wetland crops designed to optimize crop performance. It addresses specific physiological needs during key growth stages, ensuring that your investment translates into higher yields and better market value. Formulated for maximum nutrient use efficiency, this product is a staple for progressive farmers aiming for excellence.",
    benefits: ["Corrects nutrient deficiency quickly","Suitable for foliar and soil application","Compatible with most fertilizer schedules","Improves crop quality and marketable yield"],
    image: "/src/assets/products/wetgrow.jpg",
    relatedIds: ["sampurna", "sampurna-4g", "aam"]
  }
];
