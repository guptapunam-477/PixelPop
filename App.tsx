import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ShopifyDevelopmentPage from './pages/ShopifyDevelopmentPage';
import GrowthMarketingPage from './pages/GrowthMarketingPage';
import UIDesignPage from './pages/UIDesignPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative isolation-isolate">
        <div className="parallax-bg">
          <div className="bg-blob blob-1"></div>
          <div className="bg-blob blob-2"></div>
          <div className="bg-blob blob-3"></div>
        </div>
        
        <Header />
        <main className="pt-24 md:pt-28">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/shopify-development" element={<ShopifyDevelopmentPage />} />
            <Route path="/services/growth-marketing" element={<GrowthMarketingPage />} />
            <Route path="/services/ui-ux-design" element={<UIDesignPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
