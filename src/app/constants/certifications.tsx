import certification from "../models/certification";

const certifications: certification[] = [
  {
  id: 1,
  data: "Novembro de 2024",
  titulo: "Front-end em React",
  organizacao: "Ada tech",
  skills: [
    "Componentização", "Typescript", "Consumo de APIs", "POO"
  ],
  iconOrg: "/images/career/certification/ADA.png",
  certificationImage:"/images/career/certification/React.png"
  },
  {
  id: 2,
  data: "Julho de 2024",
  titulo: "Back-end em Node.js",
  organizacao: "Ada tech",
  skills: [
    "APIs REST", " Manipulação de BDs", "Pacotes com NPM", "Autenticação"
  ],
  iconOrg: "/images/career/certification/ADA.png",
  certificationImage:"/images/career/certification/Node.js.png"
  },
  {
  id: 3,
  data: "Abril de 2024",
  titulo: "Administrando banco de dados",
  organizacao: "Bradesco",
  skills: [
    "MER e DER", " Consultas SQL", "Views", "PL/SQL"
  ],
  iconOrg: "/images/career/certification/BRADESCO.png",
  certificationImage:"/images/career/certification/Adm-BDs.png"
  },
  {
  id: 4,
  data: "Abril de 2024",
  titulo: "Criação de sites",
  organizacao: "Bradesco",
  skills: [
    "HTML5", "CSS3", "Javascript", "SEO"
  ],
  iconOrg: "/images/career/certification/BRADESCO.png",
  certificationImage:"/images/career/certification/Criacao-sites.png"
  },
  {
  id: 5,
  data: "Abril de 2024",
  titulo: "Informática para internet",
  organizacao: "ETEC São Mateus",
  skills: [
    "Desenvolvimento Web", "UX/UI design", "Banco de dados", "Frameworks"
  ],
  iconOrg: "/images/career/certification/CPS.png",
  certificationImage:"/images/career/certification/informatica-internet.png"
  },

]

export default certifications
 