import certifications from "@/constants/certifications";
import experiencias from "@/constants/experiencias";
import formacoes from "@/constants/formacoes";
import CarrerCard from "./carrerCard";
import { motion } from "framer-motion";
import { RefObject } from "react";
import Image from "next/image";

export interface carrerColumnsProps {
  activeIndex: number;
  sectionRef: RefObject<null>;
}

// Variantes para animação sequencial
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Tempo entre a aparição de cada item
    },
  },
};

const itemVariants = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

export default function CarrerColumns(props: carrerColumnsProps) {
  const { activeIndex, sectionRef } = props;

  return (
    <div>
      {activeIndex === 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ root: sectionRef, once: true }}
          className="flex flex-col gap-10 w-full z-30"
        >
          {experiencias.map((experiencia) => (
            <motion.div
              key={experiencia.id}
              variants={itemVariants}
              className="w-full flex gap-20 items-center px-1"
            >
              <CarrerCard {...experiencia} />
              <motion.div
                initial={{ x: 100, opacity: 0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2.0 }}
                viewport={{ root: sectionRef, once: true }}
                className="hidden lg:flex"
              >
                <Image
                  src="images/icon-triangle.svg"
                  alt="icone de triangulo"
                  width={24}
                  height={24}
                  className="z-10"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
      {activeIndex === 1 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ root: sectionRef, once: true }}
          className="flex flex-col gap-10 w-full z-30"
        >
          {formacoes.map((formacao) => (
            <motion.div
              key={formacao.id}
              variants={itemVariants}
              className="w-full flex gap-20 items-center px-1"
            >
              <CarrerCard {...formacao} />
              <motion.div
                initial={{ x: 100, opacity: 0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2.0 }}
                viewport={{ root: sectionRef, once: true }}
                className="hidden lg:flex"
              >
                <Image
                  src="images/icon-triangle.svg"
                  alt="icone de triangulo"
                  width={24}
                  height={24}
                  className="z-10"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
      {activeIndex === 2 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ root: sectionRef, once: true }}
          className="flex flex-col gap-10 w-full z-30"
        >
          {certifications.map((certification) => (
            <motion.div
              key={certification.id}
              variants={itemVariants}
              className="w-full flex gap-20 items-center px-1"
            >
              <CarrerCard {...certification} />
              <motion.div
                initial={{ x: 100, opacity: 0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2.0 }}
                viewport={{ root: sectionRef, once: true }}
                className="hidden lg:flex"
              >
                <Image
                  src="images/icon-triangle.svg"
                  alt="icone de triangulo"
                  width={24}
                  height={24}
                  className="z-10"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
