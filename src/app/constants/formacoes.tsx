import Experiencia from "../models/experiencia"
import Formacao from "../models/formacao"

const formacoes: Formacao[] = [
 {
  id:1,
  data: "08/2023 - Atualmente",
  curso: "Desenvolvimento de software multiplataforma",
  local: "fatec zl - Ensino superior",
  iconOrg: "/images/career/formacao/FATEC.png",
  skills:
    [
      "Desenvolvimento de softwares", 
      "Automação de Recursos",
      "Gestão de Servidores",
      "Soluções técnicas"
    ]

 },
 {
  id:2,
  data: "01/2023 - 01/2023",
  curso: "Estágio em TI",
  local: "etec sm - ensino técnico",
  iconOrg: "/images/career/experience/HSF.png",
  skills:
    [
      "Desenvolvimento de softwares", 
      "Automação de Recursos",
      "Gestão de Servidores",
      "Soluções técnicas"
    ]

 },
]

export default formacoes