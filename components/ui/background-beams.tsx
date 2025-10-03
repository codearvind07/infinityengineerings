"use client";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Multiple beam elements for a dynamic effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-1 w-1 bg-orange-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            y: ["0vh", "100vh"],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Additional subtle beams for depth */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`secondary-${i}`}
          className="absolute top-0 h-0.5 w-0.5 bg-amber-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
          animate={{
            y: ["0vh", "100vh"],
            x: [0, Math.random() * 50 - 25],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
};