import Btn from "@/components/button";
import TextGradient from "@/components/textGradient";
import { IconBrowserMaximize, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom"; //faz com que o modal seja renderizado no topo de hieraquia de componentes, sobrepondo tudo
export interface carrerCardProps {
  data: string;
  titulo: string;
  organizacao: string;
  skills: string[];
  iconOrg: string;
  certificationImage?: string;
}
export default function CarrerCard(props: carrerCardProps) {
  const [isCertificationModalOpen, setIsCertificationModalOpen] =
    useState(false);
  const openModal = () => {
    setIsCertificationModalOpen(true);
  };
  const closeModal = () => {
    setIsCertificationModalOpen(false);
  };
  const handleClickInside = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Impede a propagação do clique para o elemento pai
  };
  
  const { data, titulo, organizacao, skills, iconOrg, certificationImage } =
    props;
  return (
    <>
      <div className="flex-1 sm:flex-auto sm:w-[480px] lg:w-[540px] bg-zinc-900/80 backdrop-blur-2xl flex gap-5 justify-between p-6 rounded-xl transition-shadow duration-300 ease-in-out hover:shadow-[0_0_2px_1px] hover:shadow-violet-500 z-20">
        <div className="hidden sm:flex w-16 ">
          <div className="size-16 relative">
            <Image
              src={iconOrg}
              alt={organizacao}
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[5px] ">
          <p className="text-sm md:text-base text-zinc-500">{data}</p>
          <h3 className="text-xl md:text-2xl font-semibold text-white">{titulo}</h3>
          <div className="flex gap-3 items-start">
            <div className="relative size-7 sm:hidden">
              <Image
                src={iconOrg}
                alt={organizacao}
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <p className="text-base md:text-lg text-zinc-400 font-semibold tracking-widest uppercase">
              {organizacao}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
            {skills.map((skill, index) => (
              <TextGradient
                key={index}
                primaryColor="#CAA6FF"
                secondaryColor="#003DFF"
                className="text-xs md:text-sm"
              >
                {skill}
              </TextGradient>
            ))}
          </div>
          {certificationImage && (
            <Btn variant="senary" onClick={openModal}>
              Visualizar <IconBrowserMaximize size={18} />
            </Btn>
          )}
        </div>
      </div>
      {isCertificationModalOpen && 
        ReactDOM.createPortal(
            <AnimatePresence>
              <motion.div
                onClick={closeModal}
                className="fixed inset-0 bg-black/70 flex flex-col justify-center items-center z-[100]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-col gap-2">
                  <motion.div
                    onClick={handleClickInside}
                    className="w-[350px] h-[250px] sm:w-[600px] sm:h-[400px]  md:w-[700px] md:h-[400px] lg:w-[800px] lg:h-[500px] xl:w-[900px] xl:h-[600px] relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  > 
                    <button 
                      onClick={closeModal} 
                      className="-top-8 right-0 absolute text-white hover:text-purple-light transition-colors duration-300">
                      <IconX />
                    </button>
                    {certificationImage && (
                      <Image
                        src={certificationImage}
                        alt={`imagem do certificado em ${titulo}`}
                        className="object-fit rounded-lg"
                        fill
                      />
                    )}
                  </motion.div>
                </div>
                
              </motion.div>
            </AnimatePresence>,
          document.body
        )}
    </>
  );
}
