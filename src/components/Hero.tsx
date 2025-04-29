
import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:py-36 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Create 
              <span className="neon-text-primary"> Breathtaking </span> 
              Ads with
              <span className="neon-text-secondary"> AI </span>
              Power
            </h1>
            
            <p className="text-xl mb-8 text-cyberpunk-foreground/80">
              AD MAKER GPT transforms your ideas into high-quality, personalized advertisements in seconds using cutting-edge GPT-4o image generation technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://chatgpt.com/g/g-6810ea3238888191a084c4f20b40225f-ad-maker-gpt"
                className="cyberpunk-button group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  <Sparkles className="mr-2" size={18} />
                  START CREATING NOW
                </span>
              </a>
              
              <a 
                href="#how-it-works" 
                className="inline-flex items-center justify-center px-6 py-3 border border-cyberpunk-secondary/50 text-cyberpunk-secondary rounded-lg hover:bg-cyberpunk-secondary/10 transition-colors"
              >
                Learn How It Works
              </a>
            </div>
            
            <p className="mt-6 text-cyberpunk-foreground/60 text-sm">
              Powered by GPT-4o image generation technology
            </p>
          </div>
          
          <div className="relative md:mt-0 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AD MAKER GPT Card */}
            <a 
              href="https://chatgpt.com/g/g-6810ea3238888191a084c4f20b40225f-ad-maker-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="aspect-square relative cyberpunk-border p-1 rounded-lg overflow-hidden animate-float hover:shadow-neon-primary transition-shadow duration-300"
            >
              <div className="bg-gradient-to-br from-cyberpunk-primary/20 to-cyberpunk-secondary/20 w-full h-full rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-6 relative">
                    {/* Hexagon shape base */}
                    <div className="absolute inset-0 bg-cyberpunk-muted border-2 border-cyberpunk-secondary shadow-neon-secondary animate-pulse-glow"
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    </div>
                    
                    {/* Inner light effect */}
                    <div className="absolute inset-3 bg-gradient-to-br from-cyberpunk-secondary/40 to-cyberpunk-primary/40"
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    </div>
                    
                    {/* Text AD */}
                    <div className="absolute inset-0 flex items-center justify-center text-cyberpunk-foreground font-bold text-base font-mono neon-text-secondary">
                      AD
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold neon-text-secondary mb-2">AD MAKER GPT</h3>
                  <p className="text-cyberpunk-foreground mb-4">Limitless Ad Creation Power</p>
                  
                  <div className="space-y-3">
                    <div className="text-sm p-2 border border-cyberpunk-secondary/20 rounded bg-cyberpunk-muted/50">
                      5 Stunning Ad Variations
                    </div>
                    <div className="text-sm p-2 border border-cyberpunk-primary/20 rounded bg-cyberpunk-muted/50">
                      Professional Design
                    </div>
                    <div className="text-sm p-2 border border-cyberpunk-accent/20 rounded bg-cyberpunk-muted/50">
                      Instant Generation
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* LOGO GENERATOR GPT Card */}
            <a 
              href="https://chatgpt.com/g/g-ICcKk0tgw-creative-logo-generator-and-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square relative cyberpunk-border p-1 rounded-lg overflow-hidden animate-float hover:shadow-neon-accent transition-shadow duration-300"
            >
              <div className="bg-gradient-to-br from-cyberpunk-accent/20 to-cyberpunk-secondary/20 w-full h-full rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-6 relative">
                    {/* Hexagon shape base */}
                    <div className="absolute inset-0 bg-cyberpunk-muted border-2 border-cyberpunk-accent shadow-neon-accent animate-pulse-glow"
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    </div>
                    
                    {/* Inner light effect */}
                    <div className="absolute inset-3 bg-gradient-to-br from-cyberpunk-accent/40 to-cyberpunk-secondary/40"
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    </div>
                    
                    {/* Text LOGO */}
                    <div className="absolute inset-0 flex items-center justify-center text-cyberpunk-foreground font-bold text-base font-mono neon-text-accent">
                      LOGO
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold neon-text-accent mb-2">LOGO GENERATOR GPT</h3>
                  <p className="text-cyberpunk-foreground mb-4">Professional Logo Design</p>
                  
                  <div className="space-y-3">
                    <div className="text-sm p-2 border border-cyberpunk-accent/20 rounded bg-cyberpunk-muted/50">
                      Custom Brand Identity
                    </div>
                    <div className="text-sm p-2 border border-cyberpunk-primary/20 rounded bg-cyberpunk-muted/50">
                      Multiple Style Options
                    </div>
                    <div className="text-sm p-2 border border-cyberpunk-secondary/20 rounded bg-cyberpunk-muted/50">
                      Ready To Use Designs
                    </div>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Decorative elements */}
            <div className="absolute -top-5 -right-5 w-20 h-20 border-t-2 border-r-2 border-cyberpunk-primary opacity-60"></div>
            <div className="absolute -bottom-5 -left-5 w-20 h-20 border-b-2 border-l-2 border-cyberpunk-secondary opacity-60"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-cyberpunk-grid bg-[size:50px_50px] opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyberpunk-primary/10 rounded-full filter blur-[80px]"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyberpunk-secondary/10 rounded-full filter blur-[80px]"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-cyberpunk-accent/10 rounded-full filter blur-[80px]"></div>
    </section>
  );
};

export default Hero;
