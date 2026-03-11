import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

 function Hero({ name = "Serigne Moustapha Bassirou Thiamm", roles = [] }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const defaultRoles = [
    "Développeur Full Stack",
    "Designer",
    "Monteur Vidéo",
    "Infographe"
  ];

  const displayRoles = roles.length > 0 ? roles : defaultRoles;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % displayRoles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [displayRoles.length]);

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-purple-400 text-xl md:text-2xl mb-4">Bonjour, je suis</h2>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {name.split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          <motion.div
            className="mb-8 min-h-[60px] flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-xl md:text-2xl text-gray-300"
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {displayRoles[currentRoleIndex]}
            </motion.div>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Créateur passionné d'expériences numériques exceptionnelles,
            de l'idée à la réalisation.
          </motion.p>

          <motion.div className="flex flex-col gap-6 items-center"
            
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
                className="flex justify-center my-8" 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl"></div>
    
            <img 
            src="/Bcahir.jpg" 
            alt="Profile" 
            className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
            />
            </div>
            </motion.div>            
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Me Contacter
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Voir Mes Projets
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );}
export default Hero;
