
import React, { useState, useEffect } from 'react';
import Logo3D from './Logo3D';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 backdrop-blur-xl bg-cyberpunk/80 border-b border-cyberpunk-muted'
          : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            <Logo3D />
          </div>
          <p className="hidden md:block text-xs uppercase tracking-widest neon-text-secondary">
            POWERED BY GPT4o IMAGE GENERATION TECHNOLOGY
          </p>
        </div>
        
        {/* Mobile menu button */}
        <div className="block md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-2 text-cyberpunk-secondary hover:text-cyberpunk-primary focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="https://chatgpt.com/g/g-6810ea3238888191a084c4f20b40225f-ad-maker-gpt"
            className="cyberpunk-button group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>USE AD MAKER GPT</span>
          </a>
          <a 
            href="https://chatgpt.com/g/g-ICcKk0tgw-creative-logo-generator-and-assistant"
            className="cyberpunk-button group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LOGO GENERATOR GPT</span>
          </a>
          <a 
            href="#faq" 
            className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors"
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            More AI Tools
          </a>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-cyberpunk-muted border-b border-cyberpunk-border shadow-lg transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="https://chatgpt.com/g/g-6810ea3238888191a084c4f20b40225f-ad-maker-gpt"
            className="cyberpunk-button group w-full text-center py-2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>USE AD MAKER GPT</span>
          </a>
          <a 
            href="https://chatgpt.com/g/g-ICcKk0tgw-creative-logo-generator-and-assistant"
            className="cyberpunk-button group w-full text-center py-2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>LOGO GENERATOR GPT</span>
          </a>
          <a 
            href="#faq" 
            className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors py-2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            More AI Tools
          </a>
          <p className="text-xs uppercase tracking-widest neon-text-secondary text-center pt-2">
            POWERED BY GPT4o IMAGE GENERATION TECHNOLOGY
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
