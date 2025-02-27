import certifications from "@/app/constants/certifications";
import experiencias from "@/app/constants/experiencias";
import formacoes from "@/app/constants/formacoes";
import CarrerCard from "./carrerCard";

export interface carrerColumnsProps{
  activeIndex: number;
}
export default function CarrerColumns(props: carrerColumnsProps){
  const {activeIndex} = props
  return(
    <>
      {
        activeIndex == 0 && (
          experiencias.map((experiencia) => (
            <CarrerCard key={experiencia.id} {...experiencia}  />
          ))
        )
      }    
      {
        activeIndex == 1 && (
          formacoes.map((formacao) => (
            <CarrerCard key={formacao.id} {...formacao}  />
          ))
        )
      }    
      {
        activeIndex == 2 && (
          certifications.map((certification) => (
            <CarrerCard key={certification.id} {...certification}  />
          ))
        )
      }    
    </>
  )
}