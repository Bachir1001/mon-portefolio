import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";

/* Import de TES images */
import mobileImg from "./projects/mobile.png";
import videoImg from "./projects/video.png";
import designImg from "./projects/design.png";
import studioImg from "./projects/studio.png";

const projects = [
  
  {
    title: "Application Mobile",
    category: "Développement Mobile",
    description: "App de suivi santé avec notifications, graphiques et synchronisation cloud",
    image: mobileImg,
    tags: ["React Native", "Firebase", "TypeScript"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Montage Vidéo Corporate",
    category: "Production Vidéo",
    description: "Série de vidéos corporate pour présentation d'entreprise et réseaux sociaux",
    image: videoImg,
    tags: ["Premiere Pro", "After Effects", "Color Grading"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Identité Visuelle",
    category: "Design Graphique",
    description: "Création d'identité de marque complète: logo, charte graphique, supports print",
    image: designImg,
    tags: ["Illustrator", "Photoshop", "Branding"],
    color: "from-green-500 to-emerald-500"
  },
 
  {
    title: "Studio Créatif",
    category: "Design & Développement",
    description: "Site web portfolio pour studio créatif avec animations et galerie interactive",
    image: studioImg,
    tags: ["React", "Three.js", "GSAP", "Tailwind"],
    color: "from-pink-500 to-rose-500"
  }
];

const categories = [
  "Tous",
  "Développement Web",
  "Développement Mobile",
  "Production Vidéo",
  "Design Graphique",
  "Développement Full Stack",
  "Design & Développement"
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  const handleViewDetails = (project) => {
    console.log("Voir les détails du projet:", project.title);
  };

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Mes Projets
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Une sélection de mes réalisations récentes
          </p>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onViewDetails={handleViewDetails}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
export default Projects;
