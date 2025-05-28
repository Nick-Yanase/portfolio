"use client";
import Image from "next/image";
import { IconCubeSpark } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import TextGradient from "@/components/textGradient";
import projetos from "@/constants/projetos";
import ProjectsColumns from "./projectsColumns";
import BlurPurple from "@/components/blurPurple";
import BlurBlue from "@/components/blurBlue";
export default function Projetos() {
  /*funções para o menu de projetos funcionar*/
  const [activeIndex, setActiveIndex] = useState(0);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const sectionRef = useRef(null);

  useEffect(() => {
    const items = menuRef.current?.querySelectorAll(".menu-item");
    if (items) {
      const activeItem = items[activeIndex] as HTMLElement; // Type assertion
      const width = activeItem.offsetWidth;
      const left = activeItem.offsetLeft;

      if (backgroundRef.current) {
        backgroundRef.current.style.width = `${width}px`;
        backgroundRef.current.style.transform = `translateX(${left}px)`;
      }
    }
  }, [activeIndex]);

  /*funções para ao iniciar a aplicação os projetos animarem*/
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Anima cada filho com atraso
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.section
      id="projetos"
      ref={sectionRef}
      className="w-full flex justify-center items-center py-12 relative overflow-hidden bg-violet-50 dark:bg-zinc-950"
    >
      <article className="w-full max-w-screen-2xl justify-center flex flex-col gap-8 z-20 items-center">
        <div className="titulo flex gap-2 items-center ">
          <IconCubeSpark
            style={{ stroke: "url(#iconGradient)" }}
            className="size-9"
            fill="none"
            strokeWidth="2" // Controla a espessura da linha
            strokeLinecap="round" // Para arestas arredondadas
            strokeLinejoin="round" // Para cantos mais suaves
          >
            <defs>
              <linearGradient id="iconGradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="20%" stopColor="#CAA6FF" />
                <stop offset="100%" stopColor="#5C6DFF" />
              </linearGradient>
            </defs>
          </IconCubeSpark>
          <TextGradient
            primaryColor="#CAA6FF"
            secondaryColor="#003DFF"
            className="text-4xl font-bold flex gap-4"
          >
            Projetos
          </TextGradient>
        </div>

        <div
          ref={menuRef}
          className="menu text-sm md:text-base bg-violet-200 dark:bg-zinc-900 "
        >
          <div ref={backgroundRef} className="background"></div>
          <div
            className={`menu-item  ${
              activeIndex === 0
                ? "active"
                : "dark:text-zinc-300 dark:hover:text-white"
            }`}
            onClick={() => setActiveIndex(0)}
          >
            Todos
          </div>
          <div
            className={`menu-item  ${
              activeIndex === 1
                ? "active"
                : "dark:text-zinc-300 dark:hover:text-white"
            }`}
            onClick={() => setActiveIndex(1)}
          >
            Softwares
          </div>
          <div
            className={`menu-item  ${
              activeIndex === 2
                ? "active "
                : "dark:text-zinc-300 dark:hover:text-white"
            }`}
            onClick={() => setActiveIndex(2)}
          >
            UI & UX
          </div>
        </div>

        {/* Mostra todos os projetos  */}
        <ProjectsColumns
          ref={sectionRef}
          activeIndex={activeIndex}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          projetos={projetos}
        />
      </article>
      <BlurPurple
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        width={900}
        height={100}
      />
      <BlurPurple
        className="absolute -left-[400px] -top-[425px]"
        width={900}
        height={100}
      />
      <BlurBlue
        className="absolute -right-[400px] -bottom-[400px]"
        width={900}
        height={100}
      />
      <Image
        src={"/images/LogoNY-gradient02.svg"}
        alt="quadrado rosa"
        width={900}
        height={800}
        className="absolute -right-44 top-1/2 opacity-15 transform -translate-y-1/2"
      />
    </motion.section>
  );
}
