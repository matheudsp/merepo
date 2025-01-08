import { motion } from 'framer-motion';
import {
  Layers,
  Smartphone,
  Globe,
  Code,
  Rocket,
  Shield,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Landing Pages',
    description:
      'Páginas de alta conversão que transformam visitantes em clientes, com design moderno e responsivo.',
  },
  {
    icon: Code,
    title: 'Sistemas Web',
    description:
      'Desenvolvimento de aplicações web complexas e escaláveis com as melhores tecnologias do mercado.',
  },
  {
    icon: Smartphone,
    title: 'Apps Mobile',
    description:
      'Aplicativos nativos e híbridos que proporcionam a melhor experiência em dispositivos móveis.',
  },
  {
    icon: Layers,
    title: 'Arquitetura Moderna',
    description:
      'Projetos construídos com arquitetura escalável e práticas modernas de desenvolvimento.',
  },
  {
    icon: Shield,
    title: 'Segurança',
    description:
      'Implementação das melhores práticas de segurança para proteger seus dados e usuários.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description:
      'Otimização de performance para garantir a melhor experiência de usuário possível.',
  },
];

export function ServicesSection() {
  return (
    <section id="serviços" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="text-5xl font-bold mb-6 text-black">
            Soluções Completas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um conjunto completo de serviços para transformar sua presença
            digital com tecnologia de ponta e design excepcional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Icon className="w-12 h-12 mb-6 text-gray-900" />
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}