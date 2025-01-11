import Link from "next/link";
import Logotipo from "./logotipo";
import Btn from "../button";
import ListaNav from "./listaNav";
import TextGradient from "../textGradient";

export default function Header() {
  return(
    <header className="w-full flex justify-center">
    <nav className="flex items-center justify-between max-w-screen-2xl w-full p-5 gap-10">
      <Logotipo />
      <div className="flex justify-end items-center size-full gap-10">
        <ListaNav/>
        <span className="h-full w-[2px] rounded-lg bg-zinc-400 transiti"></span>
        <Btn variant="primary" link="https://wa.me/5511955206286?text=Olá!%20Gostaria%20de%20conversar%20com%20você.">
          Fale Comigo
        </Btn>
      </div>
    </nav>
  </header>
  )
  
}
