import Link from "next/link";
import Logotipo from "./logotipo";
import Btn from "../button";
import ListaNav from "./listaNav";

export default function Header() {
  return(
    <header className="w-full flex justify-center">
    <nav className="flex items-center max-w-screen-2xl w-full p-5 gap-10">
      <Logotipo />
      <ListaNav/>
      <span className="h-full w-[2px] rounded-lg bg-zinc-500 transiti"></span>
      <Btn variant="secondary" size="default">
        Fale comigo
      </Btn>
    </nav>
  </header>
  )
  
}
