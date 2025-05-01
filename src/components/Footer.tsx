
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyberpunk-muted border-t border-cyberpunk-border py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 neon-text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-6810ea3238888191a084c4f20b40225f-ad-maker-gpt"
                  className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  USE AD MAKER GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://chatgpt.com/g/g-ICcKk0tgw-creative-logo-generator-and-assistant"
                  className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LOGO GENERATOR GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://productphotographygpt.lovable.app/?via=aiwebtools"
                  className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PRODUCT PHOTOGRAPHY GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://graphicdesigngpt.lovable.app/?via=aiwebtools"
                  className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GRAPHIC & COVER DESIGN GPT
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 neon-text-secondary">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  className="text-cyberpunk-foreground hover:text-cyberpunk-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services"
                  className="text-cyberpunk-foreground hover:text-cyberpunk-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-widest neon-text-secondary mt-4">
                  POWERED BY GPT4o IMAGE GENERATION TECHNOLOGY
                </p>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 neon-text-accent">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+14758008096"
                  className="text-cyberpunk-foreground hover:text-cyberpunk-accent transition-colors"
                >
                  Phone: (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com"
                  className="text-cyberpunk-foreground hover:text-cyberpunk-accent transition-colors"
                >
                  Email: Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-cyberpunk-border text-center">
          <p className="text-cyberpunk-foreground/60 text-sm">
            <a 
              href="https://www.aiwebtools.ai"
              className="hover:text-cyberpunk-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              © 2025 AI WEB TOOLS LLC. All rights reserved.
            </a>
          </p>
        </div>
      </div>
      
      {/* More AI Tools Button */}
      <div className="absolute bottom-8 right-8">
        <a 
          href="https://www.aiwebtools.ai"
          className="inline-flex items-center justify-center px-6 py-3 bg-cyberpunk-accent rounded-full text-white font-medium hover:shadow-neon-accent transition-shadow"
          target="_blank"
          rel="noopener noreferrer"
        >
          More AI Tools
        </a>
      </div>
    </footer>
  );
};

export default Footer;
