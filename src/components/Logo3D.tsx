
import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const Logo3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple 3D floating effect
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      container.style.transform = `
        perspective(1000px) 
        rotateY(${x * 10}deg) 
        rotateX(${-y * 10}deg)
      `;
    };
    
    const handleMouseLeave = () => {
      container.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="relative transition-transform duration-300 ease-out" 
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          {/* Combined hexagon shape with both icons */}
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            {/* Hexagon shape base */}
            <div className="absolute inset-0 bg-cyberpunk-muted border border-cyberpunk-secondary/50 shadow-neon-secondary"
                 style={{ 
                   clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                   transform: 'translateZ(0px)'
                 }}>
            </div>
            
            {/* Inner light effect */}
            <div className="absolute inset-2 bg-gradient-to-br from-cyberpunk-secondary/40 to-cyberpunk-primary/40"
                 style={{ 
                   clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                   transform: 'translateZ(5px)'
                 }}>
            </div>
            
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center text-cyberpunk-foreground"
                 style={{ transform: 'translateZ(10px)' }}>
              <Sparkles size={18} className="text-cyberpunk-secondary animate-pulse" />
            </div>
          </div>
          
          <div className="pl-2" style={{ transform: 'translateZ(5px)' }}>
            <div className="flex flex-col">
              <h1 className="text-sm md:text-lg font-bold tracking-tighter neon-text-secondary leading-tight">
                AD MAKER <span className="neon-text-accent">& LOGO</span>
              </h1>
              <p className="text-[10px] md:text-xs text-cyberpunk-secondary/80">
                by <a href="https://www.aiwebtools.ai" className="hover:text-cyberpunk-primary transition-colors">AiWebTools.Ai</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo3D;
