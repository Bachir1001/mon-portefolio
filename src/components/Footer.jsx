import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-400">
            Créé avec <Heart className="w-4 h-4 text-red-500 fill-red-500" /> par Serigne Moustapha Bassirou Thiamm
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2026 Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
