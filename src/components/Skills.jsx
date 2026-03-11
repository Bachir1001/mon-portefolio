import { motion } from "framer-motion";
import { SkillBar } from "./SkillBar";

const skillCategories = [
  {
    category: "Front-End",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript / JavaScript", level: 90 },
      { name: "HTML / CSS / Tailwind", level: 95 },
      { name: "Vue.js", level: 85 }
    ],
    color: "bg-blue-500"
  },
  {
    category: "Back-End",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / Django", level: 85 },
      { name: "PHP / Laravel", level: 80 },
      { name: "Bases de données SQL/NoSQL", level: 88 }
    ],
    color: "bg-green-500"
  },
  {
    category: "Mobile",
    skills: [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "iOS / Android", level: 80 },
      { name: "Progressive Web Apps", level: 92 }
    ],
    color: "bg-purple-500"
  },
  {
    category: "Design & Création",
    skills: [
      { name: "Adobe Photoshop", level: 95 },
      { name: "Adobe Illustrator", level: 90 },
      { name: "Adobe Premiere Pro", level: 92 },
      { name: "Figma / UI Design", level: 95 }
    ],
    color: "bg-pink-500"
  }
];

function Skills({ categories = null }) {
  const displayCategories = categories || skillCategories;

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mes Compétences</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise technique complète pour concrétiser vos projets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-slate-50 p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className={`w-2 h-2 ${category.color} rounded-full`}></span>
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={categoryIndex * 0.1 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;


