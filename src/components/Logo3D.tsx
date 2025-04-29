
import React, { useEffect, useRef } from 'react';

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
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16 md:w-24 md:h-24 mb-2">
          {/* Hexagon shape base */}
          <div className="absolute inset-0 bg-cyberpunk-muted border border-cyberpunk-secondary/50 shadow-neon-secondary animate-pulse-glow"
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
          
          {/* Text AD */}
          <div className="absolute inset-0 flex items-center justify-center text-cyberpunk-foreground font-bold text-xs md:text-base font-mono neon-text-secondary"
               style={{ transform: 'translateZ(10px)' }}>
            AD
          </div>
        </div>
        
        <div className="text-center" style={{ transform: 'translateZ(5px)' }}>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tighter neon-text-secondary">
            AD MAKER GPT
          </h1>
          <p className="text-xs md:text-sm text-cyberpunk-secondary/80 mt-1">
            Presented by <a href="https://www.aiwebtools.ai" className="underline hover:text-cyberpunk-primary transition-colors">AiWebTools.Ai</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logo3D;
