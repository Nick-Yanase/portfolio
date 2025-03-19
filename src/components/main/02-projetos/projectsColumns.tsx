import Image from "next/image";
import { motion } from "framer-motion";
import Projeto from "@/app/models/projeto";
import Btn from "@/components/button";
import { IconBrandFigma, IconBrandGithub, IconWebhook } from "@tabler/icons-react";
import { RefObject } from "react";

export interface projectsColumnsProps{
  projetos: Projeto[]
  activeIndex: number
  containerVariants: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: { staggerChildren: number };
    };
  };
  itemVariants: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number };
  };
  ref: RefObject<null>;
}
export default function ProjectsColumns(props: projectsColumnsProps){
  const {activeIndex, itemVariants, containerVariants, projetos, ref } = props
  return(
    
    <div className="flex gap-3 text-zinc-500">
      { activeIndex === 0 && (
        <motion.div
          key={activeIndex}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          whileInView={{x: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
          viewport={{root: ref}}
          className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-gap-6"
        >
          {projetos.map((projeto) => (
            <motion.div
              key={projeto.id}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-zinc-900 rounded-xl flex flex-col w-[340px] md:w-[400px] p-6 items-center justify-center gap-4 group relative shadow-lg"
            >
              {/* Imagem do projeto */}
              <div className="w-[300px] md:w-[355px] h-44 md:h-52 rounded-lg relative overflow-hidden">
                <Image src={projeto.image} alt="imagem projeto" fill />
              </div>
              {/* Conteúdo do projeto */}
              <div className="flex flex-col gap-1">
                <h3 className="text-purple/80 dark:text-white font-semibold text-lg">
                  {projeto.name}
                </h3>
                <p className="text-400">{projeto.desc}</p>
              </div>
              <div className="w-full gap-2 flex items-end">
                <div className="flex-wrap flex w-[80%] gap-2">
                  {projeto.stacks.map((stack, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 text-sm text-violet-600 border-violet-500 dark:text-[#B67DFC] dark:border-[#B67DFC] border rounded-lg"
                    >
                      <p>{stack}</p>
                    </div>
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
              <div className="absolute inset-0 bg-zinc-400 dark:bg-zinc-950 bg-opacity-40 dark:bg-opacity-85  rounded-xl flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm border border-violet-500">
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="w-full flex justify-center text-lg text-white dark:text-zinc-300">
                    <p>Visualizar o projeto:</p>
                  </div>
                  {projeto.linkProjects[0] && (
                    <Btn
                      link={projeto.linkProjects[0]}
                      variant="quaternary"
                    >
                      <span className="flex gap-1 items-center ">
                        <p className="space-x-2">Figma</p>
                        <IconBrandFigma />
                      </span>
                    </Btn>
                  )}
                  {/* Botão para GitHub */}
                  {projeto.linkProjects[1] && (
                    <Btn
                      link={projeto.linkProjects[1]}
                      variant="quaternary"
                    >
                      <span className="flex gap-1 items-center">
                        <p className="space-x-2">Github</p>
                        <IconBrandGithub />
                      </span>
                    </Btn>
                  )}
                  {projeto.linkProjects[2] && (
                    <Btn
                      link={projeto.linkProjects[2]}
                      variant="quaternary"
                    >
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
                      className="bg-white dark:bg-zinc-900 rounded-xl flex flex-col w-[340px] md:w-[400px] p-6 items-center justify-center gap-4 group relative shadow-lg"
                    >
                      {/* Imagem do projeto */}
                      <div className="w-[300px] md:w-[355px] h-44 md:h-52 rounded-lg relative overflow-hidden">
                        <Image src={projeto.image} alt="imagem projeto" fill />
                      </div>

                      {/* Conteúdo do projeto */}
                      <div className="flex flex-col gap-1">
                        <h3 className="text-purple/80 dark:text-white font-semibold text-lg">
                          {projeto.name}
                        </h3>
                        <p className="text-400">{projeto.desc}</p>
                      </div>

                      <div className="w-full gap-2 flex items-end">
                        <div className="flex-wrap flex w-[80%] gap-2">
                          {projeto.stacks.map((stack, index) => (
                            <div
                              key={index}
                              className="px-3 py-1 text-sm text-violet-600 border-violet-500 dark:text-[#B67DFC] dark:border-[#B67DFC] border rounded-lg"
                            >
                              <p>{stack}</p>
                            </div>
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
                      <div className="absolute inset-0 bg-zinc-400 dark:bg-zinc-950 bg-opacity-40 dark:bg-opacity-85  rounded-xl flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm border border-violet-500">
                        <div className="flex flex-col justify-center items-center gap-4">
                          <div className="w-full flex justify-center text-lg text-zinc-300">
                            <p>Visualizar o projeto:</p>
                          </div>
                          {projeto.linkProjects[0] && (
                            <Btn
                              link={projeto.linkProjects[0]}
                              variant="quaternary"
                            >
                              <span className="flex gap-1 items-center">
                                <p className="space-x-2">Figma</p>
                                <IconBrandFigma />
                              </span>
                            </Btn>
                          )}
                          {/* Botão para GitHub */}
                          {projeto.linkProjects[1] && (
                            <Btn
                              link={projeto.linkProjects[1]}
                              variant="quaternary"
                            >
                              <span className="flex gap-1 items-center">
                                <p className="space-x-2">Github</p>
                                <IconBrandGithub />
                              </span>
                            </Btn>
                          )}
                          {projeto.linkProjects[2] && (
                            <Btn
                              link={projeto.linkProjects[2]}
                              variant="quaternary"
                            >
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
                      className="bg-white dark:bg-zinc-900 rounded-xl flex flex-col w-[340px] md:w-[400px] p-6 items-center justify-center gap-4 group relative shadow-lg"
                    >
                      {/* Imagem do projeto */}
                      <div className="w-[300px] md:w-[355px] h-44 md:h-52 rounded-lg relative overflow-hidden">
                        <Image src={projeto.image} alt="imagem projeto" fill />
                      </div>

                      {/* Conteúdo do projeto */}
                      <div className="flex flex-col gap-1">
                        <h3 className="text-purple/80 dark:text-white font-semibold text-lg">
                          {projeto.name}
                        </h3>
                        <p className="text-400">{projeto.desc}</p>
                      </div>

                      <div className="w-full gap-2 flex items-end">
                        <div className="flex-wrap flex w-[80%] gap-2">
                          {projeto.stacks.map((stack, index) => (
                            <div
                              key={index}
                              className="px-3 py-1 text-sm text-violet-600 border-violet-500 dark:text-[#B67DFC] dark:border-[#B67DFC] border rounded-lg"
                            >
                              <p>{stack}</p>
                            </div>
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
                      <div className="absolute inset-0 bg-zinc-400 dark:bg-zinc-950 bg-opacity-40 dark:bg-opacity-85  rounded-xl flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm border border-violet-500">
                        <div className="flex flex-col justify-center items-center gap-4">
                          <div className="w-full flex justify-center text-lg text-zinc-300">
                            <p>Visualizar o projeto:</p>
                          </div>
                          {projeto.linkProjects[0] && (
                            <Btn
                              link={projeto.linkProjects[0]}
                              variant="quaternary"
                            >
                              <span className="flex gap-1 items-center">
                                <p className="space-x-2">Figma</p>
                                <IconBrandFigma />
                              </span>
                            </Btn>
                          )}
                          {/* Botão para GitHub */}
                          {projeto.linkProjects[1] && (
                            <Btn
                              link={projeto.linkProjects[1]}
                              variant="quaternary"
                            >
                              <span className="flex gap-1 items-center">
                                <p className="space-x-2">Github</p>
                                <IconBrandGithub />
                              </span>
                            </Btn>
                          )}
                          {projeto.linkProjects[2] && (
                            <Btn
                              link={projeto.linkProjects[2]}
                              variant="quaternary"
                            >
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
  )
}