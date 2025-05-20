
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
    document.title = "Ad Maker GPT & Logo Generator GPT | AIWebTools.ai";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Create professional ads and logos instantly with our AI-powered tools. Ad Maker GPT generates stunning advertisements while Logo Generator GPT designs custom logos using GPT-4o technology.');
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
