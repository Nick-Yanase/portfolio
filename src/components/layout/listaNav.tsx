import { IconCode, IconCube, IconHome, IconMeat, IconMedal, IconMedal2, IconProgress, IconStretching, IconTools, IconToolsOff, IconTooltip, IconUser} from "@tabler/icons-react";
import Link from "next/link";

export interface listaNavProps{
  className?: String;
}
export default function ListaNav(props: listaNavProps) {
  return(
    <ul className={`flex gap-8 md:gap-5 text-zinc-400 ${props.className}`}>
      <li className="transition-all duration-300 hover:text-white">
        <Link href={"/"} className="flex gap-2"><IconHome className="md:hidden"/> Home</Link>
      </li>
      <li className="transition all durantion-500 hover:text-white">
        <Link href={"/"} className="flex gap-2 "><IconCube className="md:hidden"/>Projetos</Link>
      </li>
      <li className="transition all durantion-500 hover:text-white">
        <Link href={"/"} className="flex gap-2 "><IconUser className="md:hidden"/>Sobre</Link>
      </li>
      <li className="transition all durantion-500 hover:text-white">
        <Link href={"/"}className="flex gap-2 "><IconCode className="md:hidden"/>Skills</Link>
      </li>
      <li className="transition all durantion-500 hover:text-white">
        <Link href={"/"}className="flex gap-2 "><IconMedal className="md:hidden"/>Resumo</Link>
      </li>
    </ul>
  )
}