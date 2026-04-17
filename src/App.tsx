import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Products, WhyUs } from './pages';
import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
