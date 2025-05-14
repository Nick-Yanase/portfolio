import SocialMedia from "@/components/socialMedia";
import { motion } from "framer-motion";
import Image from "next/image";
import { RefObject } from "react";

export interface infoMeProps {
  sectionRef: RefObject<null>;
}

export default function InfoMe(props: infoMeProps) {
  const { sectionRef } = props;
  return (
    <article className="w-full md:w-4/12 flex flex-col gap-4 z-20">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ root: sectionRef, once: true }} //referencia da section ao animar e "once: true" para animar apenas uma vez
        className="flex gap-3 items-center justify-start  sm:px-10 md:px-0"
      >
        <div className="relative rounded-full size-24">
          <Image
            src={"/images/Perfil-photo.svg"}
            alt={"Imagem de nicky"}
            fill
          />
        </div>

        <div>
          <p className="font-semibold text-lg text-violet-900 dark:text-white">
            Nicolas Yanase, 20 anos
          </p>
          <p className="font-medium text-violet-500 dark:text-zinc-400">(11) 95520 - 6286</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.8 }}
        viewport={{ root: sectionRef, once: true }}
        className="text-zinc-700 dark:text-zinc-300 flex flex-col gap-4 sm:px-10 md:p-0 items-start"
      >
        <p>
          Desenvolvedor de software e designer com experiência na criação de
          aplicações usando tecnologias modernas como React, Node.js e MongoDB.
          💻
        </p>
        <p>
          Meu foco é entender a necessidade do negócio e transformá-la em
          soluções práticas e eficientes, sempre aproveitando as melhores
          ferramentas e práticas do mercado. 🚀
        </p>
        <SocialMedia className="flex mx-auto md:mx-0 md:text-start justify-center lg:justify-between items-center gap-10 z-20 md:mt-4" />
      </motion.div>
    </article>
  );
}
