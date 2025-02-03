"use client";
import Template from "@/components/layout/template";
import Hero from "@/components/main/01-hero/hero";
import Projetos from "@/components/main/02-projetos/projetos";
import TextGradient from "@/components/textGradient";
import {
  IconTriangleInvertedFilled,
  IconUser,
  IconUserBolt,
  IconUserSquareRounded,
} from "@tabler/icons-react";
import Image from "next/image";
import skills from "./constants/skills";
import { div } from "framer-motion/client";
import BlurPurple from "@/components/blurPurple";
import BlurBlue from "@/components/blurBlue";
import SocialMedia from "@/components/socialMedia";
export default function Home() {
  return (
    <Template>
      <Hero />
      <Projetos />

      <section className="w-full bg-purple/10 flex gap-8 justify-center items-center relative px-5 pt-12 pb-20 z-10 overflow-hidden">
        <div className="w-full max-w-screen-xl flex flex-col items-center gap-10">
         
          <div className="titulo flex gap-2 items-center">
            <IconUserSquareRounded
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
            </IconUserSquareRounded>
            <TextGradient
              primaryColor="#CAA6FF"
              secondaryColor="#003DFF"
              className="text-4xl font-bold flex gap-4"
            >
              Sobre mim
            </TextGradient>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-12 items-start">
            <article className="w-full  md:w-4/12 flex flex-col gap-4">
              
              <div className="flex gap-3 items-center justify-start px-10 lg:0">
                <div className="relative rounded-full size-24">
                  <Image
                    src={"/images/Perfil-photo.svg"}
                    alt={"Imagem de nicky"}
                    fill
                  />
                </div>

                <div>
                  <p className="font-semibold text-lg text-white">
                    Nicolas Yanase, 19 anos
                  </p>
                  <p className="font-medium text-zinc-400">(11) 96620 - 6286</p>
                </div>
              </div>

              <div className="text-zinc-300 flex flex-col gap-4 sm:px-10 md:p-0 items-start">
                <p>
                  Desenvolvedor de software e designer com experiência na
                  criação de aplicações usando tecnologias modernas como React,
                  Node.js e MongoDB. 💻
                </p>
                <p>
                  Meu foco é entender a necessidade do negócio e transformá-la
                  em soluções práticas e eficientes, sempre aproveitando as
                  melhores ferramentas e práticas do mercado. 🚀
                </p>
                <SocialMedia className="flex mx-auto md:mx-0 md:text-start justify-center lg:justify-between items-center gap-10 z-20 md:mt-4"/>
              </div>
            </article>

            <article className="w-full md:w-8/12 flex flex-col gap-8 md:gap-4 items-center md:items-end">
              <p className="uppercase font-medium flex gap-2 text-3xl items-center w-full justify-center md:justify-end">
                <div className="bg-gradient-to-r from-[#3B6AFF] to-[#6620FF] bg-[length:160%_100%] bg-clip-text text-transparent w-fit">
                  <p className=" font-bold ">tech</p>
                </div>

                <p className=" text-white">skills</p>

                <IconTriangleInvertedFilled
                  className="size-7"
                  fill="url(#iconGradient02)" // Aplica o degradê no preenchimento
                >
                  <defs>
                    <linearGradient
                      id="iconGradient02"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="1"
                    >
                      <stop offset="20%" stopColor="#3B6AFF" />
                      <stop offset="70%" stopColor="#6620FF" />
                    </linearGradient>
                  </defs>
                </IconTriangleInvertedFilled>
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-16 md:gap-8 justify-end">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex flex-col items-center z-20">
                    <div className="w-28 h-32 bg-purple-dark rounded-lg flex items-center justify-center relative group">
                      <div className="size-16 relative">
                        <Image src={skill.image} alt={skill.name} fill/>
                      </div>
                      
                      {/*hover: borda*/}
                      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#CAA6FF] to-[#6620FF] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none before:absolute before:inset-[1.5px] before:bg-purple-dark before:rounded-lg flex items-center justify-center scale-105">
                        <div className="size-16 relative">
                          <Image src={skill.image} alt={skill.name} fill/>
                        </div>
                      </span>
                    </div>  
                    
                    <p className="text-[#9030FF] mt-1">{skill.name}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
         <BlurBlue 
            className="absolute -left-[300px] top-[10px]"
            width={700} 
            height={100}
          />
           <BlurPurple 
              className="absolute right-0 transform -translate-y-1/2 top-1/2 "
              width={900} 
              height={100}
            />
      </section>
    </Template>
  );
}
