import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export function ProjectCard({ project, index, onViewDetails }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* IMAGE DU PROJET */}
      <div className="relative overflow-hidden h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay au hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-opacity duration-300 flex items-center justify-center ${
            isHovered ? "opacity-90" : "opacity-0"
          }`}
        >
          <div className="flex gap-4">

            <motion.button
              className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              onClick={() => onViewDetails && onViewDetails(project)}
            >
              <ExternalLink className="w-6 h-6 text-slate-900" />
            </motion.button>

            <motion.button
              className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Github className="w-6 h-6 text-slate-900" />
            </motion.button>

          </div>
        </div>
      </div>

      {/* CONTENU */}
      <div className="p-6">
        <div className="text-sm text-purple-400 mb-2">
          {project.category}
        </div>

        <h3 className="text-xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </motion.div>
  );
}

