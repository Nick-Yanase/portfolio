import Logotipo from "./logotipo";
import Btn from "../button";
import ListaNav from "./listaNav";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenuDeep, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "@/app/hooks/useTheme";

export default function Header() {
  const { toggleTheme } = useTheme();
  return (
    <header className="w-full flex justify-center fixed backdrop-blur-2xl shadow-[0px_-20px_40px_rgba(191,127,255,0.01)] shadow-purple-light dark:shadow-none dark:bg-black/10 z-30">
      <nav className="flex items-center justify-between max-w-screen-2xl w-full py-2 px-5 md:py-4 gap-4 lg:gap-10">
        <Logotipo />
        <div className="flex justify-end items-center size-full gap-4 md:gap-6 lg:gap-10">
          <ListaNav className={"hidden md:flex text-sm md:text-base lg:gap-10 text-violet-950 dark:text-zinc-400"}/>
          <div className="flex gap-10">
            <span className="hidden md:flex h-12 w-[1.5px] rounded-lg bg-zinc-300 dark:bg-zinc-600 "></span>
            <button
              onClick={toggleTheme} 
              className="hidden md:flex relative items-center justify-center">
              <IconSun className="absolute transition-transform duration-500 ease-out hover:text-purple2 hover:rotate-90 dark:scale-0 scale-100 " size={24}/>
              <IconMoon className="absolute transition-transform duration-500 ease-out dark:text-zinc-400 dark:hover:text-purple-light hover:rotate-180 dark:scale-100 scale-0 " size={24}/>
            </button>
            <span className="hidden md:flex h-12 w-[1.5px] rounded-lg bg-zinc-300 dark:bg-zinc-600 "></span>
          </div>
          <Btn
            variant="primary"
            link="https://wa.me/5511955206286?text=Olá!%20Gostaria%20de%20conversar%20com%20você."
          >
            Fale comigo
          </Btn>

          <div className="md:hidden">
            <Sheet >
              <SheetTrigger> <IconMenuDeep size={36} className="text-violet-900 dark:text-white"/></SheetTrigger>
              <SheetContent className=" dark:bg-zinc-900 text-white dark:border-none">
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
                
                <ListaNav className={"flex-col pt-4 text-violet-950 dark:text-zinc-400"}/>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
