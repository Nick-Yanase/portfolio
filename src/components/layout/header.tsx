import Logotipo from "./logotipo";
import Btn from "../button";
import ListaNav from "./listaNav";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenuDeep } from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="w-full flex justify-center fixed backdrop-blur-2xl bg-black/10  z-50">
      <nav className="flex items-center justify-between max-w-screen-2xl w-full py-2 px-5 md:px-5 md:py-4 gap-4 lg:gap-10">
        <Logotipo />
        <div className="flex justify-end items-center size-full gap-4 md:gap-6 lg:gap-10">
          <ListaNav className={"hidden md:flex text-sm md:text-base lg:gap-10"}/>
          <span className="hidden md:flex h-full w-[1.5px] rounded-lg bg-zinc-400 "></span>
          <Btn
            variant="primary"
            link="https://wa.me/5511955206286?text=Olá!%20Gostaria%20de%20conversar%20com%20você."
          >
            Fale comigo
          </Btn>

          <div className="md:hidden">
            <Sheet >
              <SheetTrigger> <IconMenuDeep size={36} className="text-white"/></SheetTrigger>
              <SheetContent className="bg-zinc-900 text-white border-none">
                <SheetHeader>
                <div className="bg-gradient-to-r from-[#CAA6FF] to-[#003DFF] bg-[length:160%_100%] bg-clip-text text-transparent w-fit">
                  <p className="text-4xl font-bold">
                    Menu
                  </p>
                </div>
                <div className=" hidden bg-gradient-to-r from-[#567EFF] to-[#6620FF] bg-[length:160%_100%] bg-clip-text text-transparent w-fit">
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
