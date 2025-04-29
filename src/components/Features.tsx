
import React from 'react';
import { ImageIcon, RepeatIcon, MessageSquareTextIcon, PaletteIcon } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <ImageIcon className="text-cyberpunk-secondary" />,
      title: "GPT-4o Image Generation",
      description: "Create professional, high-quality ad images with cutting-edge AI technology."
    },
    {
      icon: <RepeatIcon className="text-cyberpunk-primary" />,
      title: "5 Unique Variations",
      description: "Automatically get 5 different ad designs for every concept you request."
    },
    {
      icon: <MessageSquareTextIcon className="text-cyberpunk-accent" />,
      title: "Guided Creation Process",
      description: "Answer simple questions about your brand, goals, and audience for perfectly tailored results."
    },
    {
      icon: <PaletteIcon className="text-cyberpunk-secondary" />,
      title: "Unlimited Customization",
      description: "Request changes to style, layout, text, imagery, and more until your ad is perfect."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text-secondary">Advanced</span> Features
          </h2>
          <p className="max-w-2xl mx-auto text-cyberpunk-foreground/80">
            AD MAKER GPT leverages cutting-edge AI technology to deliver professional advertisements that match your brand's unique identity and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-cyberpunk-muted/50 rounded-lg p-6 cyberpunk-border hover:shadow-neon-secondary transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-cyberpunk-muted flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-cyberpunk-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-6810ea3238888191a084c4f20b40225f-ad-maker-gpt"
            className="cyberpunk-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>TRY IT NOW</span>
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-cyberpunk-accent/5 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-cyberpunk-primary/5 rounded-full filter blur-[100px]"></div>
    </section>
  );
};

export default Features;
