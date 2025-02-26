import TextGradient from "@/components/textGradient";
import Image from "next/image";
export interface carrerCardProps {
  data: string;
  titulo: string
  organizacao: string
  skills: string[]
  iconOrg: string
  certificationImage?: string
}
export default function CarrerCard(){
  
  return(
    <div className="w-[540px] bg-zinc-900/80 backdrop-blur-2xl flex gap-5 justify-between p-6 rounded-xl transition-shadow duration-300 ease-in-out hover:shadow-[0_0_2px_1px] hover:shadow-violet-500">
    <div className="w-16 ">
      <div className="size-16 relative rounded-2xl">
        <Image
          src={"/images/exp_edu/HSF.png"}
          alt="HSF"
          fill
        />
      </div>
    </div>
    <div className="flex-1 flex flex-col gap-1 ">
      <p className="text-lg text-zinc-500">08/2024 - Atualmente</p>
      <h3 className="text-2xl font-semibold text-white">Estágio TI</h3>
      <p className="text-xl text-zinc-400 font-semibold tracking-widest uppercase">hospital sagrada família</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
        <TextGradient
          primaryColor="#CAA6FF"
          secondaryColor="#003DFF"
          className="text-sm  "
        >
          Desenvolvimento de softwares
        </TextGradient>
        <TextGradient
          primaryColor="#CAA6FF"
          secondaryColor="#003DFF"
          className="text-sm "
        >
          Automação de Recursos
        </TextGradient>
        <TextGradient
          primaryColor="#CAA6FF"
          secondaryColor="#003DFF"
          className="text-sm "
        >
          Gestão de Servidores
        </TextGradient>
        <TextGradient
          primaryColor="#CAA6FF"
          secondaryColor="#003DFF"
          className="text-sm "
        >
          Soluções técnicas
        </TextGradient>
      </div>
    </div>
  </div>

  )
}