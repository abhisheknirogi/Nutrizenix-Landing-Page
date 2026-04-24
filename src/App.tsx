
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout';
import Home from './pages/home';
import About from './pages/about';
import WhyUs from './pages/why_us';
import Products from './pages/products.tsx';
import Contact from './pages/contact';
import * as P from './pages/Pages_Products';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/sampurna" element={<P.Sampurna />} />
          <Route path="products/sampurna-4g" element={<P.SampurnaFourG />} />
          <Route path="products/aam" element={<P.Aam />} />
          <Route path="products/amigrow" element={<P.Amigrow />} />
          <Route path="products/banana" element={<P.Banana />} />
          <Route path="products/bhushakthi" element={<P.Bhushakthi />} />
          <Route path="products/boron-plus" element={<P.BoronPlus />} />
          <Route path="products/boronplus" element={<P.Boronplus />} />
          <Route path="products/calbon" element={<P.Calbon />} />
          <Route path="products/calon" element={<P.Calon />} />
          <Route path="products/citron" element={<P.Citron />} />
          <Route path="products/dymond-plus-33" element={<P.DymondPlus33 />} />
          <Route path="products/dymond-12" element={<P.Dymond12 />} />
          <Route path="products/dymond-21" element={<P.Dymond21 />} />
          <Route path="products/greenplus" element={<P.Greenplus />} />
          <Route path="products/hi-power" element={<P.HiPower />} />
          <Route path="products/high-zinc" element={<P.HighZinc />} />
          <Route path="products/humigrow" element={<P.Humigrow />} />
          <Route path="products/kalpam" element={<P.Kalpam />} />
          <Route path="products/nutri-ferti" element={<P.NutriFertiOne />} />
          <Route path="products/nutri-ferti2" element={<P.NutriFerti2 />} />
          <Route path="products/nutri-ferti3" element={<P.NutriFerti3 />} />
          <Route path="products/nutri-ferti4" element={<P.NutriFerti4 />} />
          <Route path="products/nutri-ferti5" element={<P.NutriFerti5 />} />
          <Route path="products/nutri-ferti6" element={<P.NutriFerti6 />} />
          <Route path="products/nutrical" element={<P.Nutrical />} />
          <Route path="products/nutrichill" element={<P.Nutrichill />} />
          <Route path="products/nutriferus-12" element={<P.Nutriferus12 />} />
          <Route path="products/nutrigold" element={<P.Nutrigold />} />
          <Route path="products/nutrigrow" element={<P.Nutrigrow />} />
          <Route path="products/nutrimag" element={<P.Nutrimag />} />
          <Route path="products/nutrimix" element={<P.Nutrimix />} />
          <Route path="products/pride-x" element={<P.PrideX />} />
          <Route path="products/s-400" element={<P.S400 />} />
          <Route path="products/superplus" element={<P.Superplus />} />
          <Route path="products/vajra" element={<P.Vajra />} />
          <Route path="products/wetgrow" element={<P.Wetgrow />} />
        </Route>
      </Routes>
      </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
