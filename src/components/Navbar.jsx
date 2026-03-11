import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "À Propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

 function Navbar({ logo = "SMB Thiamm" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Gérer l'effet de scroll sur la navbar
      setScrolled(window.scrollY > 50);

      // Détecter la section active
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg" 
          : "bg-slate-900/80 backdrop-blur-md"
      } border-b border-white/10`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >

        <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Logo" className="h-16 w-auto object-contain" /> 
        </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={`transition-colors relative group ${
                  activeSection === link.href.substring(1)
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 ${
                    activeSection === link.href.substring(1) 
                      ? "w-full" 
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contactez-moi
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`block py-3 transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-center"
              onClick={handleLinkClick}
            >
              Contactez-moi
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
export default Navbar;
