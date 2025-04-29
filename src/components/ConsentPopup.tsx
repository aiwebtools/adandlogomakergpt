
import React, { useState, useEffect } from 'react';
import { AlertCircleIcon, XIcon } from 'lucide-react';

const ConsentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the terms
    const hasAccepted = localStorage.getItem('adMakerConsent');
    
    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Save acceptance in local storage
    localStorage.setItem('adMakerConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg p-6 bg-cyberpunk border border-cyberpunk-secondary rounded-lg shadow-neon-secondary m-4">
        <button 
          onClick={handleAccept}
          className="absolute top-3 right-3 text-cyberpunk-foreground/60 hover:text-cyberpunk-primary"
        >
          <XIcon size={20} />
        </button>
        
        <div className="flex items-center mb-4">
          <AlertCircleIcon className="text-cyberpunk-primary mr-2" size={24} />
          <h3 className="text-xl font-bold neon-text-primary">Terms of Use Agreement</h3>
        </div>
        
        <div className="mb-6 max-h-60 overflow-y-auto pr-2 text-cyberpunk-foreground/80 text-sm">
          <p className="mb-4">
            By using AD MAKER GPT, you agree to the following terms:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You will use AD MAKER GPT in compliance with all applicable laws and regulations.</li>
            <li>You have the legal right to use any logos, trademarks, or other content you upload or request to be incorporated into advertisements.</li>
            <li>You are responsible for reviewing and ensuring the legality and appropriateness of all generated advertisements before use.</li>
            <li>You acknowledge that AI WEB TOOLS LLC is not liable for any direct, indirect, or consequential damages resulting from your use of AD MAKER GPT.</li>
            <li>You agree to our <a href="https://aiwebtools.ai/terms-of-services" className="text-cyberpunk-secondary hover:underline" target="_blank" rel="noopener noreferrer">Terms of Service</a> and <a href="https://openai.com/policies/privacy-policy/" className="text-cyberpunk-secondary hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</li>
          </ul>
        </div>
        
        <button 
          onClick={handleAccept}
          className="w-full py-3 bg-cyberpunk-primary hover:bg-cyberpunk-primary/80 text-white font-medium rounded-lg transition-colors shadow-neon-primary"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default ConsentPopup;
