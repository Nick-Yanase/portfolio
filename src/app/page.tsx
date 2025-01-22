'use client'
import Btn from "@/components/button";
import Template from "@/components/layout/template";
import TextGradient from "@/components/textGradient";
import { IconDownload, IconRocket } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
export default function Home() {
  return (
    <Template>
      <section className="w-full bg-purple/10 flex justify-center pt-32 lg:pt-[96px] p-5 relative">
        <div className="max-w-screen-xl w-full flex flex-col md:flex-row items-center md:gap-4 justify-between lg:py-10 z-20">
          {/* <motion.div initial={{ x:-100, opacity:0 }} animate={{x:0, opacity:1 }} transition={{duration:1}}> */}
            <motion.article 
            initial={{ x:-100, opacity:0 }} 
            animate={{x:0, opacity:1 }} 
            transition={{duration:1.5}}
            className="px-2 w-full md:w-3/5 flex flex-col gap-3 items-center md:items-start">
              <h2 className="text-zinc-300 text-xl lg:text-2xl xl:text-4xl font-bold text-center md:text-start">Olá, me chamo Nicolas Yanase</h2>
              <div className="w-full flex flex-col items-center md:items-start">
                <TextGradient
                  primaryColor="#CAA6FF"
                  secondaryColor="#003DFF"
                  className="text-4xl md:text-5xl xl:text-6xl font-bold py-1 lg:py-2 text-center md:text-start"> Desenvolvedor Web +
                </TextGradient>
                <TextGradient
                  primaryColor="#CAA6FF"
                  secondaryColor="#003DFF"
                  className="text-4xl md:text-5xl xl:text-6xl font-bold py-1  lg:py-2"> UI Designer
                </TextGradient>
              </div>
            
                <div className="txt-animated text-base lg:text-xl text-center md:text-start">
                  <span></span>
                </div>
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 justify-between mt-6">
            
              <div className="hidden md:flex justify-center gap-14 lg:justify-between items-center lg:gap-4 xl:gap-8">
                  <Link href="mailto:nicolasyanase18@gmail.com">
                    <div
                      className="size-12 rounded-full border-[1px] border-purple flex items-center justify-center transition-transform transform hover:scale-110 duration-300
                "
                    >
                      <Image
                        src={"../../../images/icon-gmail.svg"}
                        alt="icon gmail"
                        width={30}
                        height={30}
                      />
                    </div>
                  </Link>
                  <Link href="https://github.com/Nick-Yanase">
                    <div
                      className="size-12 rounded-full border-[1px] border-purple flex items-center justify-center transition-transform transform hover:scale-110 duration-300
                "
                    >
                      <Image
                        src={"../../../images/icon-github.svg"}
                        alt="icon github"
                        width={30}
                        height={30}
                      />
                    </div>
                  </Link>
                  <Link href="https://www.linkedin.com/in/nicolas-yanase/">
                    <div
                      className="size-12 rounded-full border-[1px] border-purple flex items-center justify-center transition-transform transform hover:scale-110 duration-300
                "
                    >
                      <Image
                        src={"../../../images/icon-linkedin.svg"}
                        alt="icon gmail"
                        width={29}
                        height={29}
                      />
                    </div>
                  </Link>
                </div>
                <span className="hidden lg:flex lg:w-14 xl:w-20 h-[2px] rounded-lg bg-zinc-500"/>
                <Btn variant="secondary">
                  <a
                  href="/Curriculo-Nicolas-Yanase.pdf" // Caminho do arquivo no diretório public
                  download="Curriculo-Nicolas-Yanase.pdf" // Nome sugerido para o arquivo ao fazer download
                  className="flex gap-1 items-center"
                  >
                    <p className="lg:w-32 xl:w-44">Download CV</p> <IconDownload className="font-bold"/>
                  </a>
                </Btn>
            
              </div>
            </motion.article>
          {/* </motion.div> */}

          <motion.article  
            initial={{ x:200, opacity:0 }} 
            animate={{x:0, opacity:1 }} 
            transition={{duration:1.5}} 
            className="px-2 w-full md:w-2/5 flex items-center md:items-start md:justify-center lg:justify-end flex-col gap-4">
            <div className="relative w-[310px] h-[380px] lg:w-[400px]  lg:h-[470px] xl:w-[490px] xl:h-[560px] transition-transform transform hover:scale-105 duration-300 ">
              <Image  src={"/images/ImageNicky.svg"} alt="Image de nicky" fill/>
            </div>
            
            
            <Btn variant="terciary">
              <a
              href="/Curriculo-Nicolas-Yanase.pdf" // Caminho do arquivo no diretório public
              download="Curriculo-Nicolas-Yanase.pdf" // Nome sugerido para o arquivo ao fazer download
              className="flex gap-1 items-center"
              >
                <p className="lg:w-32 xl:w-44">Download CV</p> <IconDownload className="font-bold"/> 
              </a> 
            </Btn>

            <div className="mt-2 md:mt-0 flex md:hidden justify-center gap-14 lg:justify-between items-center lg:gap-4 xl:gap-8">
                <Link href="mailto:nicolasyanase18@gmail.com">
                  <div
                    className="size-12 rounded-full border-[1px] border-purple flex items-center justify-center transition-transform transform hover:scale-110 duration-300
              "
                  >
                    <Image
                      src={"../../../images/icon-gmail.svg"}
                      alt="icon gmail"
                      width={30}
                      height={30}
                    />
                  </div>
                </Link>
                <Link href="https://github.com/Nick-Yanase">
                  <div
                    className="size-12 rounded-full border-[1px] border-purple flex items-center justify-center transition-transform transform hover:scale-110 duration-300
              "
                  >
                    <Image
                      src={"../../../images/icon-github.svg"}
                      alt="icon github"
                      width={30}
                      height={30}
                    />
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/in/nicolas-yanase/">
                  <div
                    className="size-12 rounded-full border-[1px] border-purple flex items-center justify-center transition-transform transform hover:scale-110 duration-300
              "
                  >
                    <Image
                      src={"../../../images/icon-linkedin.svg"}
                      alt="icon gmail"
                      width={29}
                      height={29}
                    />
                  </div>
                </Link>
              </div>
          </motion.article>
        </div>

          <Image src={"/images/blur-purple.svg"} alt="blur-purple" width={900} height={100} className="absolute -top-56 -right-96 z-10"/>

          <Image src={"/images/blur-purple.svg"} alt="blur-purple" width={700} height={100} className="absolute -bottom-56 -left-[400px] z-10"/>
      </section>
    </Template>
  );
}
