import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ServicesOverview from '../components/ServicesOverview';
import Differentiation from '../components/Differentiation';
import CaseStudiesPreview from '../components/CaseStudiesPreview';
import Process from '../components/Process';
import Industries from '../components/Industries';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <Differentiation />
      <CaseStudiesPreview />
      <Process />
      <Industries />
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default HomePage;

