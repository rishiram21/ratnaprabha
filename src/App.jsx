import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import SolidWasteManagement from './subpages/SolidWasteManagement';
import ConstructionDevelopment from './subpages/ConstructionDevelopment';
import ElectricalService from './subpages/ElectricalService';
import Housekeeping from './subpages/Housekeeping';
import LogisticTransport from './subpages/LogisticTransport';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contactus />} />

            {/* Sub-Pages */}
            <Route path="/solid-waste-management" element={<SolidWasteManagement />} />
            <Route path="/construction-development" element={<ConstructionDevelopment />} />
            <Route path="/electrical-service" element={<ElectricalService />} />
            <Route path="/housekeeping" element={<Housekeeping />} />
            <Route path="/logistic-transport" element={<LogisticTransport />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
