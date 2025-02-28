import certifications from "@/app/constants/certifications";
import experiencias from "@/app/constants/experiencias";
import formacoes from "@/app/constants/formacoes";
import CarrerCard from "./carrerCard";
import { motion } from "framer-motion";
import { RefObject } from "react";

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
    <>
      {activeIndex === 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ root: sectionRef, once: true }}
          className="flex flex-col gap-10"
        >
          {experiencias.map((experiencia) => (
            <motion.div key={experiencia.id} variants={itemVariants}>
              <CarrerCard {...experiencia} />
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
          className="flex flex-col gap-10"
        >
          {formacoes.map((formacao) => (
            <motion.div key={formacao.id} variants={itemVariants}>
              <CarrerCard {...formacao} />
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
          className="flex flex-col gap-10"
        >
          {certifications.map((certification) => (
            <motion.div key={certification.id} variants={itemVariants}>
              <CarrerCard {...certification} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
