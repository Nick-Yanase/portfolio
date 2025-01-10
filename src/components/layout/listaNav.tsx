import Link from "next/link";

export default function ListaNav() {
  return(
    <ul className="flex gap-10 text-zinc-400">
      <li className="transition-all duration-300 hover:text-white">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="transition all durantion-500 hover:text-white">
        <Link href={"/"}>Projetos</Link>
      </li>
      <li className="transition all durantion-500 hover:text-white">
        <Link href={"/"}>Sobre mim</Link>
      </li>
      <li className="transition all durantion-500 hover:text-white">
        <Link href={"/"}>Skills</Link>
      </li>
      <li className="transition all durantion-500 hover:text-white">
        <Link href={"/"}>Resumo</Link>
      </li>
    </ul>
  )
}