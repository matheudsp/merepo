import React from 'react';
import { ChevronDown } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 transform transition-all duration-500 hover:scale-105">
            Matheus Pereira
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto transform transition-all duration-500 hover:translate-y-[-4px]">
            Desenvolvedor Full Stack especializado em criar soluções digitais de alto impacto:
            landing pages, sistemas web e aplicativos móveis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <a
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Ver Serviços
              <ChevronDown className="h-4 w-4" />
            </a>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;