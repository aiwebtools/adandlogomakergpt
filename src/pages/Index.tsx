
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
  // Set dark theme and proper title with enhanced SEO
  useEffect(() => {
    document.body.classList.add('bg-cyberpunk');
    document.title = "Ad Maker GPT & Logo Generator GPT - Create Professional Ads & Logos Instantly | AI Web Tools";
    
    // Update meta description with targeted keywords
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ad Maker GPT creates stunning advertisements and Logo Generator GPT designs professional logos instantly using advanced GPT-4o AI technology. Transform your marketing with AI Web Tools - the best AI-powered design tools for businesses in 2025.');
    }

    // Add keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'ad maker GPT, logo generator GPT, AI web tools, AI tools, AI marketing tools, AI advertisement creator, AI logo design, GPT-4o image generation, create ads with AI, AI logo maker, professional ad creator, automated design tools, AI graphic design, digital marketing tools, AI business tools');

    // Add robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://www.aiwebtools.ai/');

    // Add structured data for better search results
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AI Web Tools",
      "alternateName": "AIWebTools.ai",
      "url": "https://www.aiwebtools.ai",
      "logo": "https://www.aiwebtools.ai/favicon.png",
      "description": "Ad Maker GPT creates stunning advertisements and Logo Generator GPT designs professional logos instantly using advanced GPT-4o AI technology. AI Web Tools provides the best AI-powered marketing and design tools for businesses.",
      "foundingDate": "2024",
      "sameAs": [
        "https://chatgpt.com/g/g-6810ea3238888191a084c4f20b40225f-ad-maker-gpt",
        "https://chatgpt.com/g/g-ICcKk0tgw-creative-logo-generator-and-assistant"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+14758008096",
        "email": "Contact@ai-webtools.com",
        "contactType": "customer service"
      },
      "offers": {
        "@type": "Offer",
        "name": "Ad Maker GPT & Logo Generator GPT",
        "description": "Ad Maker GPT creates professional advertisements instantly and Logo Generator GPT designs custom logos using advanced AI technology"
      }
    };

    // Add or update structured data script
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Add hreflang for international SEO
    let hreflangEn = document.querySelector('link[hreflang="en"]');
    if (!hreflangEn) {
      hreflangEn = document.createElement('link');
      hreflangEn.setAttribute('rel', 'alternate');
      hreflangEn.setAttribute('hreflang', 'en');
      hreflangEn.setAttribute('href', 'https://www.aiwebtools.ai/');
      document.head.appendChild(hreflangEn);
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
