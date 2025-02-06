"use client";
import Template from "@/components/layout/template";
import Hero from "@/components/main/01-hero/hero";
import Projetos from "@/components/main/02-projetos/projetos";
import AboutMe from "@/components/main/03-sobreMim/aboutMe";
import TextGradient from "@/components/textGradient";
import { IconMedal, IconSchool } from "@tabler/icons-react";

import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
export default function Home() {
  const timelineRef = useRef(null);

  // Captura o scroll global
  const { scrollYProgress } = useScroll();

  // Define os checkpoints de 0% a 100%
  const ballY = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8],
    ["0%", "33%", "66%", "100%"]
  );
  const rotateBall = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);

  return (
    <Template>
      <Hero />
      <Projetos />
      <AboutMe />

      <section className="w-full flex justify-center px-5 pt-12 pb-20 z-10 overflow-hidden">
        <div className="w-full max-w-screen-xl gap-4 grid grid-cols-2 justify-center items-center">
          <article className="flex flex-col gap-4 items-center">
            <div className="titulo flex gap-2 items-center justify-center ">
              <IconSchool
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
                    <stop offset="50%" stopColor="#5C6DFF" />
                  </linearGradient>
                </defs>
              </IconSchool>
              <TextGradient
                primaryColor="#CAA6FF"
                secondaryColor="#003DFF"
                className="text-4xl font-bold flex gap-4"
              >
                Experiência
              </TextGradient>
            </div>

              <div className="w-[550px] bg-zinc-900 backdrop-blur-2xl flex gap-5 justify-between p-6 rounded-xl mt-8">
                <div className="w-16 ">
                  <div className="size-16 relative rounded-2xl">
                    <Image
                      src={"/images/exp_edu/HSF.png"}
                      alt="HSF"
                      fill
                    />
                  </div>
                </div>
                <div className="w-11/12 flex flex-col gap-1">
                  <p className="text-lg text-zinc-500">08/2024 - Atualmente</p>
                  <h3 className="text-2xl font-semibold text-white">Estágio TI</h3>
                  <p className="text-xl text-zinc-400 font-semibold tracking-widest uppercase">hospital sagrada família</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
                    <TextGradient
                      primaryColor="#CAA6FF"
                      secondaryColor="#003DFF"
                      className="text-sm  "
                    >
                      Desenvolvimento de softwares
                    </TextGradient>
                    <TextGradient
                      primaryColor="#CAA6FF"
                      secondaryColor="#003DFF"
                      className="text-sm "
                    >
                      Automação de Recursos
                    </TextGradient>
                    <TextGradient
                      primaryColor="#CAA6FF"
                      secondaryColor="#003DFF"
                      className="text-sm "
                    >
                      Gestão de Servidores
                    </TextGradient>
                    <TextGradient
                      primaryColor="#CAA6FF"
                      secondaryColor="#003DFF"
                      className="text-sm "
                    >
                      Soluções técnicas
                    </TextGradient>
                  </div>
                </div>
              </div>

          </article>

          <article>
            <div className="titulo flex gap-2 items-center justify-center">
              <IconMedal
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
                    <stop offset="50%" stopColor="#5C6DFF" />
                  </linearGradient>
                </defs>
              </IconMedal>
              <TextGradient
                primaryColor="#CAA6FF"
                secondaryColor="#003DFF"
                className="text-4xl font-bold flex gap-4"
              >
                Experiência
              </TextGradient>
            </div>


          </article>
        </div>
      </section>

      {/* <div className="flex flex-col items-center w-full min-h-[200vh] py-32 bg-gray-900">
       Timeline 
      <div ref={timelineRef} className="relative w-2 h-[150vh] bg-gradient-to-b from-red-500 to-violet-500 rounded-full">
        
    
        <motion.div
          style={{ y: ballY, rotate: rotateBall }}
          className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 border-4 border-white shadow-2xl "
        />

         Checkpoints 
        <div className="absolute top-[33%] left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-md" />
        <div className="absolute top-[66%] left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-purple-500 rounded-full shadow-md" />
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-pink-500 rounded-full shadow-md" />
      </div>
    </div> */}
    </Template>
  );
}
