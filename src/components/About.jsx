import { motion } from "framer-motion";
import { Code2, Palette, Video, Layers } from "lucide-react";
import { FeatureCard } from "./FeatureCard";
import { useState } from "react";

const features = [
  {
    icon: Code2,
    title: "Développement",
    description: "Expert en développement Front-end, Back-end et Full Stack pour le web et mobile",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "Design",
    description: "Création d'interfaces utilisateur modernes et intuitives avec une attention aux détails",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Video,
    title: "Montage Vidéo",
    description: "Production et montage de contenus vidéo professionnels pour tous types de projets",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Layers,
    title: "Infographie",
    description: "Conception graphique créative pour supports digitaux et print",
    color: "from-green-500 to-emerald-500"
  }
];

function About({ stats = null }) {
  const [hoveredStat, setHoveredStat] = useState(null);

  const defaultStats = [
    { value: "3+", label: "Années d'Expérience" },
    { value: "10+", label: "Projets Réalisés" },
    { value: "15+", label: "Clients Satisfaits" }
  ];

  const displayStats = stats || defaultStats;

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">À Propos de Moi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un professionnel polyvalent qui transforme vos idées en réalité numérique
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-purple-900 to-pink-900 rounded-3xl p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Ma Mission</h3>
            <p className="text-lg text-purple-100 mb-8">
              Je suis passionné par la création d'expériences numériques qui combinent 
              esthétique et fonctionnalité. Mon approche multidisciplinaire me permet 
              d'offrir des solutions complètes, de la conception à la réalisation, 
              en passant par le développement et la création de contenu visuel.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {displayStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                    hoveredStat === index ? "text-white" : "text-purple-300"
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-purple-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default About;
