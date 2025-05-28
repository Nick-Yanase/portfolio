import skills from "@/constants/skills";
import { IconTriangleInvertedFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { RefObject } from "react";

export interface techSkillsProps {
  sectionRef: RefObject<null>;
}
export default function TechSkills(props: techSkillsProps) {
  const { sectionRef } = props;
  return (
    <article className="w-full md:w-8/12 flex flex-col gap-8 md:gap-4 items-center md:items-end">
      <p className="uppercase font-medium flex gap-2 text-3xl items-center w-full justify-center md:justify-end">
        <div className="bg-gradient-to-r from-[#3B6AFF] to-[#6620FF] bg-[length:160%_100%] bg-clip-text text-transparent w-fit">
          <p className=" font-bold ">tech</p>
        </div>

        <p className="font-semibold text-indigo-700 dark:text-white">skills</p>

        <IconTriangleInvertedFilled
          className="size-7"
          fill="url(#iconGradient02)" // Aplica o degradê no preenchimento
        >
          <defs>
            <linearGradient id="iconGradient02" x1="0" x2="1" y1="0" y2="1">
              <stop offset="20%" stopColor="#3B6AFF" />
              <stop offset="70%" stopColor="#6620FF" />
            </linearGradient>
          </defs>
        </IconTriangleInvertedFilled>
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-16 md:gap-8 justify-end">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ x: 100, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ root: sectionRef, once: true }}
            className="flex flex-col items-center z-20"
          >
            <div className="w-28 h-32 bg-violet-200 dark:bg-purple-dark rounded-lg flex items-center justify-center relative group">
              <div className="size-16 relative">
                <Image src={skill.image} alt={skill.name} fill />
              </div>

              {/*hover: borda*/}
              <span className="absolute inset-0 rounded-lg bg-violet-300 dark:bg-gradient-to-r from-[#CAA6FF] to-[#6620FF] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none before:absolute dark:before:inset-[1.5px] dark:before:bg-purple-dark before:rounded-lg flex items-center justify-center scale-105">
                <div className="size-16 relative">
                  <Image src={skill.image} alt={skill.name} fill />
                </div>
              </span>
            </div>

            <p className="text-[#9030FF] mt-1">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </article>
  );
}
