import Link from "next/link";
import Logotipo from "./logotipo";
import Btn from "../button";
import ListaNav from "./listaNav";
import TextGradient from "../textGradient";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenuDeep } from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="w-full flex justify-center">
      <nav className="flex items-center justify-between max-w-screen-2xl w-full p-5 gap-4 lg:gap-10">
        <Logotipo />
        <div className="flex justify-end items-center size-full gap-4 md:gap-6 lg:gap-10">
          <ListaNav className={"hidden md:flex text-sm md:text-base"}/>
          <span className="hidden md:flex h-full w-[2px] rounded-lg bg-zinc-400 transiti"></span>
          <Btn
            variant="primary"
            link="https://wa.me/5511955206286?text=Olá!%20Gostaria%20de%20conversar%20com%20você."
          >
            Fale comigo
          </Btn>

          <div className="md:hidden">
            <Sheet >
              <SheetTrigger> <IconMenuDeep size={40} className=""/></SheetTrigger>
              <SheetContent className="bg-zinc-900 text-white border-none">
                <SheetHeader>
                <div className="bg-gradient-to-r from-[#CAA6FF] to-[#003DFF] bg-[length:160%_100%] bg-clip-text text-transparent w-fit">
                  <p className="text-4xl font-bold">
                    Menu
                  </p>
                </div>
                
                <ListaNav className={"flex-col pt-4"}/>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
