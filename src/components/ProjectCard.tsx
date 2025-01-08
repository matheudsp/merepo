import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  categories: string[];
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  categories,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover grayscale"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-8"
      >
        <h3 className="text-2xl font-bold mb-3 text-black">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}