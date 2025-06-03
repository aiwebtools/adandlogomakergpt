
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
    document.title = "AI Web Tools - Ad Maker GPT & Logo Generator GPT | Best AI Tools for Marketing 2025";
    
    // Update meta description with targeted keywords
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI Web Tools: Create professional ads and logos instantly with our AI-powered tools. Ad Maker GPT generates stunning advertisements while Logo Generator GPT designs custom logos using GPT-4o technology. Best AI tools for marketing in 2025.');
    }

    // Add keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'AI web tools, AI tools, ad maker GPT, logo generator GPT, AI marketing tools, artificial intelligence tools, GPT-4o image generation, AI advertisement creator, AI logo design, marketing automation, AI graphic design, digital marketing tools, AI-powered advertising, automated design tools, AI business tools');

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
      "logo": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "description": "AI Web Tools provides the best AI-powered marketing tools including Ad Maker GPT and Logo Generator GPT for creating professional advertisements and logos instantly.",
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
        "name": "AI Marketing Tools Suite",
        "description": "Professional AI-powered tools for creating advertisements and logos"
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
