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
            Nicolas Yanase, 21 anos
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
        <p className="font-semibold text-violet-400">
          Full-Stack Developer | Kotlin, Java, Node.js & React ⚡
        </p>
        <p>
          Desenvolvedor focado em performance e escalabilidade. Experiência na criação de sistemas mobile e web, integração de modelos de IA e análise de dados massivos com BigQuery. Transformo requisitos complexos em arquiteturas simples e funcionais.</p>
        <p>
          No dia a dia, foco em transformar necessidades reais em software que funciona, unindo o aprendizado acadêmico na FATEC com a experiência prática em agência, busco sempre as melhores ferramentas para entregar resultados eficientes, mantendo um código organizado e fácil de manter.
        </p>
        <div className="w-full flex flex-wrap gap-4 ">
           <span className="inline-flex items-center gap-2 rounded-lg border border-fuchsia-400/40 bg-fuchsia-400/10 px-3 py-1 text-sm text-fuchsia-700 dark:text-fuchsia-200">
            🏐 Volleyball player
           </span>
           <span className="inline-flex items-center gap-2 rounded-lg border border-fuchsia-400/40 bg-fuchsia-400/10 px-3 py-1 text-sm text-fuchsia-700 dark:text-fuchsia-200">
            🎮 Gaming & Strategy
           </span>
           <span className="inline-flex items-center gap-2 rounded-lg border border-fuchsia-400/40 bg-fuchsia-400/10 px-3 py-1 text-sm text-fuchsia-700 dark:text-fuchsia-200">
            💻 Always Improving
           </span>
        </div>
        <SocialMedia className="flex mx-auto md:mx-0 md:text-start justify-center lg:justify-between items-center gap-10 z-20 md:mt-4" />
      </motion.div>
    </article>
  );
}
