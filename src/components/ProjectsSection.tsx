import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "E-commerce Moderno",
    description: "Desenvolvimento de plataforma completa de e-commerce com painel administrativo e integração com meios de pagamento",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    categories: ["React", "Node.js", "E-commerce"],
  },
  {
    title: "App de Delivery",
    description: "Aplicativo mobile para delivery com rastreamento em tempo real e sistema de avaliações",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    categories: ["React Native", "Firebase", "Maps"],
  },
  {
    title: "Sistema de Gestão",
    description: "Sistema web completo para gestão empresarial com múltiplos módulos e relatórios avançados",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    categories: ["Vue.js", "Laravel", "PostgreSQL"],
  }
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-bold tracking-wider text-gray-900 uppercase">
              Portfólio
            </span>
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 text-black">
            Últimos Projetos
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que desenvolvi utilizando as mais modernas
            tecnologias do mercado.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}