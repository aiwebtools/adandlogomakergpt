
import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-44 pb-32 md:pt-48 md:py-44 relative overflow-hidden">
      {/* Enhanced divine background with floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyberpunk-primary rounded-full animate-cosmic-drift opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-cyberpunk-secondary rounded-full animate-celestial-dance opacity-70"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyberpunk-accent rounded-full animate-divine-float opacity-80"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-cyberpunk-primary rounded-full animate-holy-pulse opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cyberpunk-secondary rounded-full animate-divine-glow opacity-60"></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-cyberpunk-accent rounded-full animate-celestial-dance opacity-90"></div>
        <div className="absolute bottom-1/6 left-1/6 w-1 h-1 bg-cyberpunk-primary rounded-full animate-cosmic-drift opacity-70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-left space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Create 
              <span className="neon-text-primary block mt-2"> Breathtaking </span> 
              Ads with
              <span className="neon-text-secondary block mt-2"> AI </span>
              Power
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-cyberpunk-foreground/90 leading-relaxed">
              AD MAKER GPT transforms your ideas into high-quality, personalized advertisements in seconds using cutting-edge GPT-4o image generation technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="https://chatgpt.com/g/g-6810ea3238888191a084c4f20b40225f-ad-maker-gpt"
                className="cyberpunk-button group relative overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-divine-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="flex items-center relative z-10">
                  <Sparkles className="mr-3 animate-ethereal-flicker" size={20} />
                  START CREATING NOW
                </span>
              </a>
              
              <a 
                href="#how-it-works" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyberpunk-secondary/60 text-cyberpunk-secondary rounded-lg hover:bg-cyberpunk-secondary/20 hover:shadow-neon-secondary transition-all duration-300"
              >
                Learn How It Works
              </a>
            </div>
            
            <div className="mt-8 p-4 border border-cyberpunk-accent/30 rounded-lg bg-cyberpunk-muted/20 backdrop-blur-sm">
              <p className="text-cyberpunk-foreground/70 text-sm leading-relaxed">
                <span className="neon-text-accent font-semibold">Educational Disclaimer:</span> This website and its tools are provided for informational, educational, and research purposes only.
              </p>
            </div>
            
            <p className="mt-6 text-cyberpunk-foreground/60 text-sm">
              Powered by GPT-4o image generation technology
            </p>
          </div>
          
          <div className="relative md:mt-0 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AD MAKER GPT Card */}
            <a 
              href="https://chatgpt.com/g/g-6810ea3238888191a084c4f20b40225f-ad-maker-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="aspect-square relative cyberpunk-border p-2 rounded-lg overflow-hidden hover:shadow-divine transition-all duration-500"
            >
              <div className="bg-cyberpunk-muted/90 backdrop-blur-md border border-cyberpunk-secondary/30 w-full h-full rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-divine-shimmer"></div>
                
                <div className="text-center p-6 relative z-10">
                  <div className="w-24 h-24 mx-auto mb-8 relative">
                    {/* Enhanced hexagon with divine glow */}
                    <div className="absolute inset-0 bg-cyberpunk-muted border-2 border-cyberpunk-secondary shadow-neon-secondary animate-divine-glow"
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    </div>
                    
                    <div className="absolute inset-2 bg-gradient-to-br from-cyberpunk-secondary/50 to-cyberpunk-primary/50 animate-holy-pulse"
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg font-mono drop-shadow-lg">
                      AD
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-cyberpunk-secondary mb-3 drop-shadow-lg">AD MAKER GPT</h3>
                  <p className="text-white/90 mb-6 text-sm font-medium drop-shadow-md">Limitless Ad Creation Power</p>
                  
                  <div className="space-y-3">
                    <div className="text-xs p-3 border border-cyberpunk-secondary/50 rounded bg-cyberpunk-muted/80 backdrop-blur-sm text-white/90 font-medium">
                      5 Stunning Ad Variations
                    </div>
                    <div className="text-xs p-3 border border-cyberpunk-primary/50 rounded bg-cyberpunk-muted/80 backdrop-blur-sm text-white/90 font-medium">
                      Professional Design
                    </div>
                    <div className="text-xs p-3 border border-cyberpunk-accent/50 rounded bg-cyberpunk-muted/80 backdrop-blur-sm text-white/90 font-medium">
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
              className="aspect-square relative cyberpunk-border p-2 rounded-lg overflow-hidden hover:shadow-divine transition-all duration-500 animation-delay-1000"
            >
              <div className="bg-cyberpunk-muted/90 backdrop-blur-md border border-cyberpunk-accent/30 w-full h-full rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-divine-shimmer animation-delay-1000"></div>
                
                <div className="text-center p-6 relative z-10">
                  <div className="w-24 h-24 mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-cyberpunk-muted border-2 border-cyberpunk-accent shadow-neon-accent animate-divine-glow"
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    </div>
                    
                    <div className="absolute inset-2 bg-gradient-to-br from-cyberpunk-accent/50 to-cyberpunk-secondary/50 animate-holy-pulse"
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg font-mono drop-shadow-lg">
                      LOGO
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-cyberpunk-accent mb-3 drop-shadow-lg">LOGO GENERATOR GPT</h3>
                  <p className="text-white/90 mb-6 text-sm font-medium drop-shadow-md">Professional Logo Design</p>
                  
                  <div className="space-y-3">
                    <div className="text-xs p-3 border border-cyberpunk-accent/50 rounded bg-cyberpunk-muted/80 backdrop-blur-sm text-white/90 font-medium">
                      Custom Brand Identity
                    </div>
                    <div className="text-xs p-3 border border-cyberpunk-primary/50 rounded bg-cyberpunk-muted/80 backdrop-blur-sm text-white/90 font-medium">
                      Multiple Style Options
                    </div>
                    <div className="text-xs p-3 border border-cyberpunk-secondary/50 rounded bg-cyberpunk-muted/80 backdrop-blur-sm text-white/90 font-medium">
                      Ready To Use Designs
                    </div>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-t-4 border-r-4 border-cyberpunk-primary opacity-60 animate-ethereal-flicker"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-b-4 border-l-4 border-cyberpunk-secondary opacity-60 animate-divine-glow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-cyberpunk-accent opacity-40 animate-celestial-dance"></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 bg-cyberpunk-grid bg-[size:80px_80px] opacity-20 animate-holy-pulse"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyberpunk-primary/15 rounded-full filter blur-[120px] animate-cosmic-drift"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyberpunk-secondary/15 rounded-full filter blur-[120px] animate-celestial-dance"></div>
      <div className="absolute top-60 right-40 w-96 h-96 bg-cyberpunk-accent/15 rounded-full filter blur-[120px] animate-divine-float"></div>
    </section>
  );
};

export default Hero;
