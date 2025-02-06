"use client";

import { IconMedal, IconMedal2, IconSchool } from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Timeline() {
  const containerRef = useRef(null);

  // Captura a rolagem da página em relação ao container da timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // A animação ocorre durante toda a página
  });

  // Movimento da bola: percorre toda a timeline
  const ballY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Rotação da bola: Gira completamente enquanto percorre a timeline
  const rotateBall = useTransform(scrollYProgress, [0, 1], ["0deg", "1080deg"]); // 3 voltas completas

  return (
    <div ref={containerRef} className="relative flex flex-col items-center w-full min-h-[200vh] py-32 bg-gray-900">
      
      {/* Timeline */}
      <div className="relative w-2 h-[100vh] bg-gradient-to-b from-blue-500 to-purple-500 rounded-full">
        
        {/* Bola animada */}
        <motion.div
          style={{ y: ballY, rotate: rotateBall }}
          className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 border-4 border-white shadow-2xl rounded-full"
        />

        {/* Checkpoints */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-md" />
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-purple-500 rounded-full shadow-md" />
        <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-pink-500 rounded-full shadow-md" />
      </div>

      <IconSchool />
      <IconMedal />
      <IconMedal2 />

    </div>
  );
}
