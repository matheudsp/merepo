import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Contact = () => {
  return (
    <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-16 transform transition-all duration-500 hover:scale-105">
          Vamos Conversar?
        </h2>
        <div className="flex justify-center space-x-4 sm:space-x-8 mb-12">
          <a 
            href="mailto:seu-email@exemplo.com" 
            className="p-3 bg-gray-100 rounded-full transform transition-all duration-300 hover:bg-gray-200 hover:scale-110 hover:shadow-lg"
          >
            <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a 
            href="https://github.com/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-100 rounded-full transform transition-all duration-300 hover:bg-gray-200 hover:scale-110 hover:shadow-lg"
          >
            <Github className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-100 rounded-full transform transition-all duration-300 hover:bg-gray-200 hover:scale-110 hover:shadow-lg"
          >
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 transform transition-all duration-500 hover:translate-y-[-4px]">
          Estou disponível para novos projetos. Entre em contato para discutirmos como posso ajudar a transformar suas ideias em realidade.
        </p>
        <WhatsAppButton />
      </div>
    </section>
  );
}

export default Contact;