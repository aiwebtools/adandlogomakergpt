
import React from 'react';
import { StarIcon } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Emma Rodriguez",
      role: "Marketing Director",
      avatar: "https://i.pravatar.cc/150?img=1",
      content: "AD MAKER GPT transformed our marketing strategy. We now create professional ads in minutes instead of days. The quality is outstanding!",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Small Business Owner",
      avatar: "https://i.pravatar.cc/150?img=8",
      content: "As a small business owner with no design experience, this tool is a game-changer. I can now create ads that compete with big brands.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "E-commerce Entrepreneur",
      avatar: "https://i.pravatar.cc/150?img=5",
      content: "The 5 variations feature is brilliant. I always find at least one perfect ad that resonates with my audience. Highly recommended!",
      rating: 4
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="neon-text-accent">Users</span> Say
          </h2>
          <p className="max-w-2xl mx-auto text-cyberpunk-foreground/80">
            Don't just take our word for it. See what businesses and marketers have achieved with AD MAKER GPT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-cyberpunk-muted/30 backdrop-blur-sm rounded-lg p-6 cyberpunk-border relative"
            >
              {/* Quotation mark */}
              <div className="absolute -top-4 -left-2 text-6xl text-cyberpunk-primary opacity-20 font-serif">"</div>
              
              {/* Stars */}
              <div className="flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <StarIcon 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? "text-cyberpunk-secondary fill-cyberpunk-secondary" : "text-gray-600"} 
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-cyberpunk-foreground/80 mb-6">"{testimonial.content}"</p>
              
              {/* User info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyberpunk-accent mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-cyberpunk-foreground/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyberpunk/30 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyberpunk-primary/5 rounded-full filter blur-[80px]"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyberpunk-secondary/5 rounded-full filter blur-[80px]"></div>
    </section>
  );
};

export default Testimonials;
