
import React, { useState, useEffect, useCallback } from 'react';
import Logo3D from './Logo3D';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const navLinks = [
    { href: "https://chatgpt.com/g/g-6810ea3238888191a084c4f20b40225f-ad-maker-gpt", label: "USE AD MAKER GPT", isButton: true },
    { href: "https://chatgpt.com/g/g-ICcKk0tgw-creative-logo-generator-and-assistant", label: "LOGO GENERATOR GPT", isButton: true },
    { href: "https://productphotographygpt.lovable.app/?via=aiwebtools", label: "PRODUCT PHOTOGRAPHY GPT", isButton: true },
    { href: "https://graphicdesigngpt.lovable.app/?via=aiwebtools", label: "GRAPHIC & COVER DESIGN GPT", isButton: true },
  ];

  const textLinks = [
    { href: "#faq", label: "FAQ", external: false },
    { href: "#disclaimer", label: "Disclaimer", external: false },
    { href: "https://aiwebtools.lovable.app/?via=aiwebtools", label: "More AI Tools", external: true },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled 
            ? 'py-2 backdrop-blur-xl bg-cyberpunk/90 border-b border-cyberpunk-muted shadow-lg'
            : 'py-3 lg:py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center min-w-0 shrink-0">
            <div className="mr-2 lg:mr-4">
              <Logo3D />
            </div>
            <p className="hidden xl:block text-xs uppercase tracking-widest neon-text-secondary whitespace-nowrap">
              POWERED BY GPT4o IMAGE GENERATION TECHNOLOGY
            </p>
          </div>
          
          {/* Mobile/Tablet menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden p-2 text-cyberpunk-secondary hover:text-cyberpunk-primary focus:outline-none active:scale-95 transition-transform"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 flex-wrap justify-end">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="cyberpunk-button group text-xs xl:text-sm whitespace-nowrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.label}</span>
              </a>
            ))}
            {textLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors text-sm whitespace-nowrap px-1"
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-cyberpunk-muted border-l border-cyberpunk-border shadow-2xl z-50 lg:hidden transition-transform duration-200 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={closeMenu}
            className="p-2 text-cyberpunk-secondary hover:text-cyberpunk-primary active:scale-95 transition-transform"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="px-6 pb-8 flex flex-col space-y-3 overflow-y-auto max-h-[calc(100vh-80px)]">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="cyberpunk-button group w-full text-center py-3 text-sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <span>{link.label}</span>
            </a>
          ))}
          <div className="border-t border-cyberpunk-border pt-3 mt-2 flex flex-col space-y-3">
            {textLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-cyberpunk-foreground hover:text-cyberpunk-primary transition-colors py-2 text-base"
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs uppercase tracking-widest neon-text-secondary text-center pt-4">
            POWERED BY GPT4o IMAGE GENERATION TECHNOLOGY
          </p>
        </nav>
      </div>
    </>
  );
};

export default Header;
