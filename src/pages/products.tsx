import { Routes, Route, Link } from 'react-router-dom';
import {
  Sampurna,
  SampurnaFourG,
  Aam,
  Amigrow,
  Banana,
  Bhushakthi,
  BoronPlus,
  Boronplus,
  Calbon,
  Calon,
  Citron,
  DymondPlus33,
  Dymond12,
  Dymond21,
  Greenplus,
  HiPower,
  HighZinc,
  Humigrow,
  Kalpam,
  NutriFertiOne,
  NutriFerti2,
  NutriFerti3,
  NutriFerti4,
  NutriFerti5,
  NutriFerti6,
  Nutrical,
  Nutrichill,
  Nutriferus12,
  Nutrigold,
  Nutrigrow,
  Nutrimag,
  Nutrimix,
  PrideX,
  S400,
  Superplus,
  Vajra,
  Wetgrow,
} from './Pages_Products';

const Products = () => {
  const productList = [
    { id: 'sampurna', name: 'Sampurna' },
    { id: 'sampurna-4g', name: 'Sampurna-4G' },
    { id: 'aam', name: 'Aam' },
    { id: 'amigrow', name: 'Amigrow' },
    { id: 'banana', name: 'Banana' },
    { id: 'bhushakthi', name: 'Bhushakthi' },
    { id: 'boron-plus', name: 'Boron+' },
    { id: 'boronplus', name: 'Boronplus' },
    { id: 'calbon', name: 'Calbon' },
    { id: 'calon', name: 'Calon' },
    { id: 'citron', name: 'Citron' },
    { id: 'dymond-plus-33', name: 'Dymond+33' },
    { id: 'dymond-12', name: 'Dymond-12' },
    { id: 'dymond-21', name: 'Dymond-21' },
    { id: 'greenplus', name: 'Greenplus' },
    { id: 'hi-power', name: 'Hi-power' },
    { id: 'high-zinc', name: 'High-zinc' },
    { id: 'humigrow', name: 'Humigrow' },
    { id: 'kalpam', name: 'Kalpam' },
    { id: 'nutri-ferti', name: 'Nutri-ferti' },
    { id: 'nutri-ferti2', name: 'Nutri-ferti2' },
    { id: 'nutri-ferti3', name: 'Nutri-ferti3' },
    { id: 'nutri-ferti4', name: 'Nutri-ferti4' },
    { id: 'nutri-ferti5', name: 'Nutri-ferti5' },
    { id: 'nutri-ferti6', name: 'Nutri-ferti6' },
    { id: 'nutrical', name: 'Nutrical' },
    { id: 'nutrichill', name: 'Nutrichill' },
    { id: 'nutriferus-12', name: 'Nutriferus-12' },
    { id: 'nutrigold', name: 'Nutrigold' },
    { id: 'nutrigrow', name: 'Nutrigrow' },
    { id: 'nutrimag', name: 'Nutrimag' },
    { id: 'nutrimix', name: 'Nutrimix' },
    { id: 'pride-x', name: 'Pride-x' },
    { id: 's-400', name: 'S-400' },
    { id: 'superplus', name: 'Superplus' },
    { id: 'vajra', name: 'Vajra' },
    { id: 'wetgrow', name: 'Wetgrow' },
  ];

  return (
    <div className="products-container">
      <Routes>
        <Route
          path="/"
          element={
            <div className="products-page">
              <h1>Our Products</h1>
              <p>Explore our complete line of nutrient products</p>
              <div className="products-grid">
                {productList.map((product) => (
                  <Link
                    key={product.id}
                    to={`${product.id}`}
                    className="product-card"
                  >
                    <h3>{product.name}</h3>
                  </Link>
                ))}
              </div>
            </div>
          }
        />
        <Route path="sampurna" element={<Sampurna />} />
        <Route path="sampurna-4g" element={<SampurnaFourG />} />
        <Route path="aam" element={<Aam />} />
        <Route path="amigrow" element={<Amigrow />} />
        <Route path="banana" element={<Banana />} />
        <Route path="bhushakthi" element={<Bhushakthi />} />
        <Route path="boron-plus" element={<BoronPlus />} />
        <Route path="boronplus" element={<Boronplus />} />
        <Route path="calbon" element={<Calbon />} />
        <Route path="calon" element={<Calon />} />
        <Route path="citron" element={<Citron />} />
        <Route path="dymond-plus-33" element={<DymondPlus33 />} />
        <Route path="dymond-12" element={<Dymond12 />} />
        <Route path="dymond-21" element={<Dymond21 />} />
        <Route path="greenplus" element={<Greenplus />} />
        <Route path="hi-power" element={<HiPower />} />
        <Route path="high-zinc" element={<HighZinc />} />
        <Route path="humigrow" element={<Humigrow />} />
        <Route path="kalpam" element={<Kalpam />} />
        <Route path="nutri-ferti" element={<NutriFertiOne />} />
        <Route path="nutri-ferti2" element={<NutriFerti2 />} />
        <Route path="nutri-ferti3" element={<NutriFerti3 />} />
        <Route path="nutri-ferti4" element={<NutriFerti4 />} />
        <Route path="nutri-ferti5" element={<NutriFerti5 />} />
        <Route path="nutri-ferti6" element={<NutriFerti6 />} />
        <Route path="nutrical" element={<Nutrical />} />
        <Route path="nutrichill" element={<Nutrichill />} />
        <Route path="nutriferus-12" element={<Nutriferus12 />} />
        <Route path="nutrigold" element={<Nutrigold />} />
        <Route path="nutrigrow" element={<Nutrigrow />} />
        <Route path="nutrimag" element={<Nutrimag />} />
        <Route path="nutrimix" element={<Nutrimix />} />
        <Route path="pride-x" element={<PrideX />} />
        <Route path="s-400" element={<S400 />} />
        <Route path="superplus" element={<Superplus />} />
        <Route path="vajra" element={<Vajra />} />
        <Route path="wetgrow" element={<Wetgrow />} />
      </Routes>
    </div>
  );
};

export default Products;