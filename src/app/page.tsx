import Btn from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header className="w-full flex justify-center">
      <nav className="flex items-center max-w-screen-2xl w-full py-4 gap-10">
        <div className="flex-1">
          <Image  src={"../../images/Logo.svg"} alt="logotipo" width={200} height={60}/>
        </div>
        <ul className="flex gap-10 ">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/"}>Projeto</Link></li>
          <li><Link href={"/"}>Sobre mim</Link></li>
          <li><Link href={"/"}>Skills</Link></li>
          <li><Link href={"/"}>Resumo</Link></li>
        </ul>
        <span className="h-full w-[2px] rounded-lg bg-zinc-500 transiti"></span>
        <Btn  variant="secondary" size="default">
          Fale comigo
        </Btn>
      </nav>
    </header>
  )
}
 