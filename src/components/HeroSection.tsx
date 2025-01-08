import { motion } from 'framer-motion';
import { Code, Smartphone, Globe } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="início" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transformando Ideias em{' '}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Experiências Digitais
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Desenvolvimento profissional de landing pages, sistemas web e aplicativos
              mobile que impulsionam seu negócio para o próximo nível.
            </p>
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Iniciar Projeto
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 w-full"
          >
            {[
              { icon: Globe, text: 'Landing Pages' },
              { icon: Code, text: 'Sistemas Web' },
              { icon: Smartphone, text: 'Apps Mobile' },
            ].map(({ icon: Icon, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`p-6 md:p-8 bg-gray-50 rounded-2xl ${
                  index === 2 ? 'col-span-2 lg:col-span-1' : ''
                }`}
              >
                <Icon className="w-8 h-8 md:w-12 md:h-12 mb-4 text-gray-900" />
                <h3 className="text-lg md:text-xl font-bold">{text}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}