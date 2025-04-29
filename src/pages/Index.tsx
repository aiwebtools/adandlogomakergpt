
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import ConsentPopup from '../components/ConsentPopup';

const Index = () => {
  // Set dark theme and proper title
  useEffect(() => {
    document.body.classList.add('bg-cyberpunk');
    document.title = "AD MAKER GPT | AI-Powered Ad Creation";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AD MAKER GPT creates breathtaking, high-quality, personalized advertisements using GPT-4o image generation technology.');
    }
    
    return () => {
      document.body.classList.remove('bg-cyberpunk');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
