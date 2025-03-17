import Btn from "@/components/button";
import SocialMedia from "@/components/socialMedia";
import TextGradient from "@/components/textGradient";
import { Toast } from "@/components/toast";
import { IconDownload } from "@tabler/icons-react";
import { motion } from "framer-motion";
export default function Info() {
  return (
    <motion.article
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="px-2 w-full md:w-3/5 flex flex-col gap-3 items-center md:items-start"
    >
      <h2 className="text-violet-900 dark:text-zinc-300 text-xl lg:text-2xl xl:text-4xl font-bold text-center md:text-start">
        Olá, me chamo Nicolas Yanase
      </h2>
      <div className="w-full flex flex-col items-center md:items-start">
        <TextGradient
          // primaryColor="#6128FF"
          // secondaryColor="#CAA6FF"
          className="  text-4xl md:text-5xl xl:text-6xl font-bold py-1 lg:py-2 text-center md:text-start"
        >
          {" "}
          Desenvolvedor Web +
        </TextGradient>
        <TextGradient
          primaryColor="#CAA6FF"
          secondaryColor="#003DFF"
          className="text-4xl md:text-5xl xl:text-6xl font-bold py-1  lg:py-2"
        >
          {" "}
          UI & UI Designer
        </TextGradient>
      </div>

      <div className="txt-animated text-base lg:text-xl text-center md:text-start text-violet-900 dark:text-violet-400">
        <span></span>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 justify-between mt-6">
        <SocialMedia className="hidden md:flex justify-center gap-14 lg:justify-between items-center lg:gap-4 xl:gap-8 z-20 "/>
        <span className="hidden lg:flex lg:w-14 xl:w-20 h-[2px] rounded-lg bg-violet-300 dark:bg-zinc-500" />
       
          <Toast >
            <a
              href="/Curriculo-Nicolas-Yanase.pdf" // Caminho do arquivo no diretório public
              download="Curriculo-Nicolas-Yanase.pdf" // Nome sugerido para o arquivo ao fazer download
              className="flex gap-1 items-center w-64"
            >
                <Btn variant="secondary">
                  Download CV
                  <IconDownload size={40} className="font-bold" />
                </Btn>
              </a>
          </Toast>
        
      </div>
    </motion.article>
  );
}
