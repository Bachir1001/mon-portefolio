import  {useState}  from "react";
import  Navbar from "./components/Navbar";
import  Hero from "./components/Home";
import  About from "./components/About";
import  Skills  from "./components/Skills";
import  Projects  from "./components/Projects";
import  Contact  from "./components/Contact";
import Footer  from "./components/Footer";

function App() {
  const [portfolioData] = useState({
    name: "Serigne Moustapha Bassirou Thiamm",
    logo: "SMB Thiamm",
    roles: [
      "Développeur Full Stack",
      "Designer UI/UX",
      "Monteur Vidéo",
      "Infographe Créatif"
    ]
  });

  return (
    <>
<div className="bg-red-500 text-white p-10 text-center">
   SI TU VOIS CE MESSAGE SUR FOND ROUGE, TAILWIND MARCHE
</div>
      <Navbar logo={portfolioData.logo} />
      <Hero 
        name={portfolioData.name} 
        roles={portfolioData.roles}
      />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    
    </>
  );
}
export default App;
