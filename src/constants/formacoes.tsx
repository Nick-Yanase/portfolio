import Formacao from "../models/formacao"

const formacoes: Formacao[] = [
 {
  id: 1,
  data: "08/2023 - Atualmente",
  titulo: "Desenvolvimento de software multiplataforma",
  organizacao: "Fatec ZL - Ensino superior",
  iconOrg: "/images/career/formation/FATEC.png",
  skills:
    [
      "Desenvolvimento de softwares", 
      "Análise de dados",
      "UX & UI Design",
      "Engenharia de software"
    ]
 },
 {
  id:  2,
  data: "01/2023 - 01/2023",
  titulo: "Informática para internet",
  organizacao: "Etec SM - ensino técnico",
  iconOrg: "/images/career/formation/ETEC.png",
  skills:
    [
      "Front-end", 
      "Back-end",
      "Gestão de banco de dados",
      "Gestão de projetos"
    ]
 },
]

export default formacoes