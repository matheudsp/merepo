import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/5589994176493";
  
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;