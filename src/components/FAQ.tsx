
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is AD MAKER GPT?",
      answer: "AD MAKER GPT is an advanced AI tool that creates high-quality, personalized advertisements based on your specific brand requirements, goals, and target audience. It utilizes GPT-4o image generation technology to produce professional ad designs instantly."
    },
    {
      question: "How does AD MAKER GPT create advertisements?",
      answer: "AD MAKER GPT creates ads by asking you focused questions about your brand, goals, target audience, and preferences. It then generates an outline for your ad and creates 5 unique variations using GPT-4o technology. You can request modifications until you're completely satisfied with the results."
    },
    {
      question: "Do I need design experience to use AD MAKER GPT?",
      answer: "Not at all! AD MAKER GPT is designed to be user-friendly and accessible to everyone, regardless of design experience. The AI guides you through the entire process with simple questions, and creates professional designs based on your answers."
    },
    {
      question: "What types of ads can AD MAKER GPT create?",
      answer: "AD MAKER GPT can create a wide range of advertisement types, including social media ads, display banners, product advertisements, promotional materials, print ads, and more. It can adapt to various formats and styles based on your requirements."
    },
    {
      question: "Can I request changes to the generated ads?",
      answer: "Absolutely! After generating the initial 5 variations, AD MAKER GPT will ask if you want to modify anything or try a different style. You can provide feedback and request specific changes until the ad perfectly matches your vision."
    },
    {
      question: "How do I download the advertisements?",
      answer: "All generated ads are automatically compiled into downloadable documents and offered to you at the end of the creation process. You can easily save them and use them immediately in your marketing campaigns."
    },
    {
      question: "Is there a limit to how many ads I can create?",
      answer: "AD MAKER GPT operates without limitations. You can create as many ads as you need, and generate multiple variations for each concept to find the perfect match for your marketing needs."
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently <span className="neon-text-secondary">Asked</span> Questions
          </h2>
          <p className="max-w-2xl mx-auto text-cyberpunk-foreground/80">
            Find answers to common questions about AD MAKER GPT and how it can help you create stunning advertisements.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-cyberpunk-muted rounded-lg overflow-hidden bg-cyberpunk-muted/30 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-cyberpunk-muted/50 hover:no-underline text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-cyberpunk-foreground/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-6 text-cyberpunk-foreground/70">Still have questions?</p>
          <a 
            href="mailto:Contact@ai-webtools.com" 
            className="inline-flex items-center justify-center px-6 py-3 bg-cyberpunk-muted border border-cyberpunk-secondary/50 rounded-lg hover:bg-cyberpunk-muted/80 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-cyberpunk/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyberpunk/30 to-transparent"></div>
    </section>
  );
};

export default FAQ;
