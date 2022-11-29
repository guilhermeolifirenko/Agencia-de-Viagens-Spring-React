import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/layout/Navbar";
import TopHeader from "./components/layout/TopHeader";
import Footer from "./components/layout/Footer";
import Home from './components/pages/Home';
import TopOfertas from './components/pages/TopOfertas'
import Voos from './components/pages/Voos';

function App() {
  return (
    <Router>
      <TopHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ofertas" element={<TopOfertas />} />
        <Route path="/voos" element={<Voos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
