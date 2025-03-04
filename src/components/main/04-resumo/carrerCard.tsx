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
      <div className="w-[540px] bg-zinc-900/80 backdrop-blur-2xl flex gap-5 justify-between p-6 rounded-xl transition-shadow duration-300 ease-in-out hover:shadow-[0_0_2px_1px] hover:shadow-violet-500">
        <div className="w-16 ">
          <div className="size-16 relative">
            <Image
              src={iconOrg}
              alt={organizacao}
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1 ">
          <p className="text-base text-zinc-500">{data}</p>
          <h3 className="text-2xl font-semibold text-white">{titulo}</h3>
          <p className="text-lg text-zinc-400 font-semibold tracking-widest uppercase">
            {organizacao}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
            {skills.map((skill, index) => (
              <TextGradient
                key={index}
                primaryColor="#CAA6FF"
                secondaryColor="#003DFF"
                className="text-sm  "
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
                  <button 
                    onClick={closeModal} 
                    className="w-full flex justify-end text-white hover:text-purple-light transition-colors duration-300">
                    <IconX />
                  </button>
                  <motion.div
                    onClick={handleClickInside}
                    className="w-[900px] h-[600px] relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
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
