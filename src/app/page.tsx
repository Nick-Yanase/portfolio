"use client";
import Btn from "@/components/button";
import Template from "@/components/layout/template";
import TextGradient from "@/components/textGradient";
import {
  IconBrandFigma,
  IconBrandGithub,
  IconCubeSpark,
  IconDownload,
  IconTriangleFilled,
  IconWebhook,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import projetos from "./constants/projetos";
export default function Home() {
  
  /*Função para o hover dos projetos acontecer */
  const [isHover, setIsHover] = useState(false);
  const addHover = () => {
    setIsHover(true);
  };

  /*funções para o menu de projetos funcionar*/
  const [activeIndex, setActiveIndex] = useState(0);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = menuRef.current?.querySelectorAll(".menu-item");
    if (items) {
      const activeItem = items[activeIndex] as HTMLElement; // Type assertion
      const width = activeItem.offsetWidth;
      const left = activeItem.offsetLeft;

      if (backgroundRef.current) {
        backgroundRef.current.style.width = `${width}px`;
        backgroundRef.current.style.transform = `translateX(${left}px)`;
      }
    }
  }, [activeIndex]);

  /*funções para ao iniciar a aplicação os projetos animarem*/
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Anima cada filho com atraso
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Template>
      <section className="w-full bg-purple/10 flex justify-center pt-28 2xl:pt-[150px] p-5 relative z-10">
        <div className="max-w-screen-xl w-full flex flex-col md:flex-row items-center md:gap-4 justify-between lg:py-10 z-20">
          <motion.article
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="px-2 w-full md:w-3/5 flex flex-col gap-3 items-center md:items-start"
          >
            <h2 className="text-zinc-300 text-xl lg:text-2xl xl:text-4xl font-bold text-center md:text-start">
              Olá, me chamo Nicolas Yanase
            </h2>
            <div className="w-full flex flex-col items-center md:items-start">
              <TextGradient
                primaryColor="#CAA6FF"
                secondaryColor="#003DFF"
                className="text-4xl md:text-5xl xl:text-6xl font-bold py-1 lg:py-2 text-center md:text-start"
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
                UI Designer
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
              <span className="hidden lg:flex lg:w-14 xl:w-20 h-[2px] rounded-lg bg-zinc-500" />
              <Btn variant="secondary">
                <a
                  href="/Curriculo-Nicolas-Yanase.pdf" // Caminho do arquivo no diretório public
                  download="Curriculo-Nicolas-Yanase.pdf" // Nome sugerido para o arquivo ao fazer download
                  className="flex gap-1 items-center"
                >
                  <p className="lg:w-32 xl:w-44">Download CV</p>{" "}
                  <IconDownload className="font-bold" />
                </a>
              </Btn>
            </div>
          </motion.article>

          <motion.article
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="px-2 w-full md:w-2/5 flex items-center md:items-start md:justify-center lg:justify-end flex-col gap-4"
          >
            <div className="relative w-[310px] h-[380px] lg:w-[400px]  lg:h-[470px] xl:w-[490px] xl:h-[560px] transition-transform transform hover:scale-105 duration-300 ">
              <Image src={"/images/ImageNicky.svg"} alt="Image de nicky" fill />
            </div>

            <Btn variant="terciary">
              <a
                href="/Curriculo-Nicolas-Yanase.pdf" // Caminho do arquivo no diretório public
                download="Curriculo-Nicolas-Yanase.pdf" // Nome sugerido para o arquivo ao fazer download
                className="flex gap-1 items-center"
              >
                <p className="lg:w-32 xl:w-44">Download CV</p>{" "}
                <IconDownload className="font-bold" />
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

        <Image
          src={"/images/blur-purple.svg"}
          alt="blur-purple"
          width={900}
          height={100}
          className="absolute -top-56 -right-96 z-10"
        />

        <Image
          src={"/images/blur-purple.svg"}
          alt="blur-purple"
          width={850}
          height={100}
          className="absolute -bottom-1/2 -left-[400px] z-10"
        />
      </section>

      <section className="w-full flex justify-center items-center py-12 relative overflow-hidden">
        <article className="w-full max-w-screen-2xl justify-center flex flex-col gap-8 z-20 items-center">
          <div className="titulo flex gap-2 items-center">
            <IconCubeSpark
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
                  <stop offset="200%" stopColor="#003DFF" />
                </linearGradient>
              </defs>
            </IconCubeSpark>
            <TextGradient
              primaryColor="#CAA6FF"
              secondaryColor="#003DFF"
              className="text-4xl font-bold flex gap-4"
            >
              Projetos
            </TextGradient>
          </div>

          <div ref={menuRef} className="menu">
            <div ref={backgroundRef} className="background"></div>
            <div
              className={`menu-item ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => setActiveIndex(0)}
            >
              Todos
            </div>
            <div
              className={`menu-item ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => setActiveIndex(1)}
            >
              Softwares
            </div>
            <div
              className={`menu-item ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => setActiveIndex(2)}
            >
              UI & UX
            </div>
          </div>

          <div className="flex gap-3 text-zinc-500">
            {activeIndex === 0 && (
              <motion.div
                key={activeIndex}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-gap-6"
              >
                {projetos.map((projeto) => (
                  <motion.div
                    key={projeto.id}
                    variants={itemVariants}
                    transition={{ duration: 0.5 }}
                
                    className="bg-zinc-900 rounded-xl flex flex-col w-[380px] p-6 items-center justify-center gap-4 group relative shadow-lg"
                  >
                    {/* Imagem do projeto */}
                    <div className="w-[340px] h-52 rounded-lg relative overflow-hidden">
                      <Image src={projeto.image} alt="imagem projeto" fill />
                    </div>
                    
                    {/* Conteúdo do projeto */}
                    <div className="flex flex-col gap-1">
                      <h3 className="text-white  font-semibold text-lg">
                        {projeto.name}
                      </h3>
                      <p className="text-400">{projeto.desc}</p>
                    </div>

                    <div className="w-full gap-2 flex items-end">
                      <div className="flex-wrap flex w-[80%] gap-2">
                        {projeto.stacks.map((stack) => (
                          <>
                          <div key={projeto.id} className="px-3 py-1 text-sm text-[#B67DFC] border-[#B67DFC] border rounded-lg">
                            <p>{stack}</p>
                          </div>
                          </>
                        ))}
                      </div>
                      {/* Ícone padrão */}
                      <div className="w-[20%] flex gap-3 justify-end">
                        {projeto.software && (
                          <Image
                            src={"images/software.svg"}
                            alt="software icon"
                            width={24}
                            height={24}
                          />
                        )}
                        {projeto.design && (
                          <Image
                            src={"images/design.svg"}
                            alt="design icon"
                            width={24}
                            height={24}
                          />
                        )}
                      </div>
                    </div>

                    {/* Efeito de hover e botões adicionais */}
                    <div className="absolute inset-0 bg-zinc-950 bg-opacity-85  rounded-xl flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm border border-violet-500">
                      <div className="flex flex-col justify-center items-center gap-4">
                        <div className="w-full flex justify-center text-lg text-zinc-300">
                          <p>Visualizar o projeto:</p>
                        </div>
                        {projeto.linkProjects[0] && (
                          <Btn link={projeto.linkProjects[0]} variant="quaternary">
                            <span className="flex gap-1 items-center">
                              <p className="space-x-2">Figma</p>
                              <IconBrandFigma />
                            </span>
                          </Btn>
                        )}
                        {/* Botão para GitHub */}
                        {projeto.linkProjects[1] && (
                          <Btn link={projeto.linkProjects[1]} variant="quaternary">
                            <span className="flex gap-1 items-center">
                              <p className="space-x-2">Github</p>
                              <IconBrandGithub />
                            </span>
                          </Btn>
                        )}
                        {projeto.linkProjects[2] && (
                          <Btn link={projeto.linkProjects[2]} variant="quaternary">
                            <span className="flex gap-1 items-center">
                              <p className="space-x-2">Executar</p>
                              <IconWebhook />
                            </span>
                          </Btn>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* mostra a categoria software */}
            {activeIndex === 1 && (
              <motion.div
                key={activeIndex}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-gap-6"
              >
                {projetos
                  .filter((projeto) => projeto.software === "yes") // Filtra apenas projetos com software === "yes"
                  .map(
                    (
                      projeto // Mapeia os projetos filtrados para o JSX
                    ) => (
                      <motion.div
                        key={projeto.id}
                        variants={itemVariants}
                        transition={{ duration: 0.5 }}
                        className="bg-zinc-900 rounded-xl flex flex-col w-[380px] p-6 items-center justify-center gap-4 group relative shadow-lg"
                      >
                      {/* Imagem do projeto */}
                    <div className="w-[340px] h-52 rounded-lg relative overflow-hidden">
                      <Image src={projeto.image} alt="imagem projeto" fill />
                    </div>
                    
                    {/* Conteúdo do projeto */}
                    <div className="flex flex-col gap-1">
                      <h3 className="text-white  font-semibold text-lg">
                        {projeto.name}
                      </h3>
                      <p className="text-400">{projeto.desc}</p>
                    </div>

                    <div className="w-full gap-2 flex items-end">
                      <div className="flex-wrap flex w-[80%] gap-2">
                        {projeto.stacks.map((stack) => (
                          <>
                          <div key={projeto.id} className="px-3 py-1 text-sm text-[#B67DFC] border-[#B67DFC] border rounded-lg">
                            <p>{stack}</p>
                          </div>
                          </>
                        ))}
                      </div>
                      {/* Ícone padrão */}
                      <div className="w-[20%] flex gap-3 justify-end">
                        {projeto.software && (
                          <Image
                            src={"images/software.svg"}
                            alt="software icon"
                            width={24}
                            height={24}
                          />
                        )}
                        {projeto.design && (
                          <Image
                            src={"images/design.svg"}
                            alt="design icon"
                            width={24}
                            height={24}
                          />
                        )}
                      </div>
                    </div>

                        {/* Efeito de hover e botões adicionais */}
                        <div className="absolute inset-0 bg-zinc-950 bg-opacity-85 rounded-xl flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm border border-violet-500">
                          <div className="flex flex-col justify-center items-center gap-4">
                            <div className="w-full flex justify-center text-lg text-zinc-300">
                              <p>Visualizar o projeto:</p>
                            </div>
                            {projeto.linkProjects[0] && (
                              <Btn link={projeto.linkProjects[0]} variant="quaternary">
                                <span className="flex gap-1 items-center">
                                  <p className="space-x-2">Figma</p>
                                  <IconBrandFigma />
                                </span>
                              </Btn>
                            )}
                            {/* Botão para GitHub */}
                            {projeto.linkProjects[1] && (
                              <Btn link={projeto.linkProjects[1]} variant="quaternary">
                                <span className="flex gap-1 items-center">
                                  <p className="space-x-2">Github</p>
                                  <IconBrandGithub />
                                </span>
                              </Btn>
                            )}
                            {projeto.linkProjects[2] && (
                              <Btn link={projeto.linkProjects[2]} variant="quaternary">
                                <span className="flex gap-1 items-center">
                                  <p className="space-x-2">Executar</p>
                                  <IconWebhook />
                                </span>
                              </Btn>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )
                  )}
              </motion.div>
            )}

              {/* mostra a categoria design */}
              {activeIndex === 2 && (
              <motion.div
                key={activeIndex}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-gap-6"
              >
                {projetos
                  .filter((projeto) => projeto.design === "yes") // Filtra apenas projetos com software === "yes"
                  .map(
                    (
                      projeto // Mapeia os projetos filtrados para o JSX
                    ) => (
                      <motion.div
                        key={projeto.id}
                        variants={itemVariants}
                        transition={{ duration: 0.5 }}
                        className="bg-zinc-900 rounded-xl flex flex-col w-[380px] p-6 items-center justify-center gap-4 group relative shadow-lg"
                      >
                        {/* Imagem do projeto */}
                    <div className="w-[340px] h-52 rounded-lg relative overflow-hidden">
                      <Image src={projeto.image} alt="imagem projeto" fill />
                    </div>
                    
                    {/* Conteúdo do projeto */}
                    <div className="flex flex-col gap-1">
                      <h3 className="text-white  font-semibold text-lg">
                        {projeto.name}
                      </h3>
                      <p className="text-400">{projeto.desc}</p>
                    </div>

                    <div className="w-full gap-2 flex items-end">
                      <div className="flex-wrap flex w-[80%] gap-2">
                        {projeto.stacks.map((stack) => (
                          <>
                          <div key={projeto.id} className="px-3 py-1 text-sm text-[#B67DFC] border-[#B67DFC] border rounded-lg">
                            <p>{stack}</p>
                          </div>
                          </>
                        ))}
                      </div>
                      {/* Ícone padrão */}
                      <div className="w-[20%] flex gap-3 justify-end">
                        {projeto.software && (
                          <Image
                            src={"images/software.svg"}
                            alt="software icon"
                            width={24}
                            height={24}
                          />
                        )}
                        {projeto.design && (
                          <Image
                            src={"images/design.svg"}
                            alt="design icon"
                            width={24}
                            height={24}
                          />
                        )}
                        </div>
                      </div>
                        {/* Efeito de hover e botões adicionais */}
                        <div className="absolute inset-0 bg-zinc-950 bg-opacity-85 rounded-xl flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm border border-violet-500">
                          <div className="flex flex-col justify-center items-center gap-4">
                            <div className="w-full flex justify-center text-lg text-zinc-300">
                              <p>Visualizar o projeto:</p>
                            </div>
                            {projeto.linkProjects[0] && (
                              <Btn link={projeto.linkProjects[0]} variant="quaternary">
                                <span className="flex gap-1 items-center">
                                  <p className="space-x-2">Figma</p>
                                  <IconBrandFigma />
                                </span>
                              </Btn>
                            )}
                            {/* Botão para GitHub */}
                            {projeto.linkProjects[1] && (
                              <Btn link={projeto.linkProjects[1]} variant="quaternary">
                                <span className="flex gap-1 items-center">
                                  <p className="space-x-2">Github</p>
                                  <IconBrandGithub />
                                </span>
                              </Btn>
                            )}
                            {projeto.linkProjects[2] && (
                              <Btn link={projeto.linkProjects[2]} variant="quaternary">
                                <span className="flex gap-1 items-center">
                                  <p className="space-x-2">Executar</p>
                                  <IconWebhook />
                                </span>
                              </Btn>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )
                  )}
              </motion.div>
            )}
            
          </div>
        </article>
        <Image
          src={"/images/blur-purple.svg"}
          alt="blur-purple"
          width={800}
          height={100}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        <Image
          src={"/images/LogoNY-gradient02.svg"}
          alt="quadrado rosa"
          width={900}
          height={800}
          className="absolute -right-44 top-1/2 opacity-15 transform -translate-y-1/2"
        />

        <Image
          src={"/images/blur-blue.svg"}
          alt="quadrado rosa"
          width={1000}
          height={800}
          className="absolute -right-1/2 -bottom-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />  
      </section>
    </Template>
  );
}
