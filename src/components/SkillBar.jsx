import { motion } from "framer-motion";
import { useState } from "react";

export function SkillBar({ name, level, color, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="transition-all duration-300"
    >
      <div className="flex justify-between mb-2">
        <span className={`font-medium transition-colors duration-300 ${
          isHovered ? "text-purple-600" : "text-gray-900"
        }`}>
          {name}
        </span>
        <span className="text-gray-600">{level}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full relative`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay }}
        >
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-white/30"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}
