import TextGradient from "@/components/textGradient";
import { IconUserSquareRounded } from "@tabler/icons-react";
import { motion } from "framer-motion";
import BlurPurple from "@/components/blurPurple";
import BlurBlue from "@/components/blurBlue";
import { useRef } from "react";
import TechSkills from "./techSkills";
import InfoMe from "./infoMe";

export default function AboutMe() {
  const sectionRef = useRef(null); //referencio a section para que a animação so ocorra quando chegar nessa section
  return (
    <motion.section
      id="sobre"
      viewport={{ once: true }} //não deixa a animação ocorrer novamente
      ref={sectionRef} //section refereciada para ocorrer a animação
      className="w-full bg-purple/[13%] flex gap-8 justify-center items-center relative px-5 pt-12 pb-20 z-10 overflow-hidden"
    >
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

          <InfoMe sectionRef={sectionRef} />
          <TechSkills sectionRef={sectionRef} />

        </div>
      </div>
      <BlurBlue
        className="absolute -left-[200px] md:-left-[300px] top-[10px]"
        width={700}
        height={100}
      />
      <BlurPurple
        className="absolute right-0 transform -translate-y-1/2 top-1/2 "
        width={900}
        height={100}
      />
      <BlurPurple
        className="md:hidden absolute -bottom-[250px] left-1/2 transform -translate-x-1/2 "
        width={900}
        height={100}
      />

    </motion.section>
  );
}
