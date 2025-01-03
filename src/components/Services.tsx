import React from 'react';
import { Layout, Code2, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'Páginas otimizadas para conversão que capturam a atenção dos visitantes e geram resultados.'
  },
  {
    icon: Code2,
    title: 'Sistemas Web',
    description: 'Desenvolvimento de sistemas personalizados que automatizam e otimizam seus processos.'
  },
  {
    icon: Smartphone,
    title: 'Apps Mobile',
    description: 'Aplicativos móveis nativos e multiplataforma com foco em usabilidade e performance.'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16 transform transition-all duration-500 hover:scale-105">
          Serviços
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:translate-y-[-4px]"
            >
              <service.icon className="h-12 w-12 mb-6 text-black transform transition-all duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;