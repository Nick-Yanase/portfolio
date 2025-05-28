import { useTheme } from "@/hooks/useTheme";
import {
  IconCode,
  IconCube,
  IconHome,
  IconMedal,
  IconMoon,
  IconSun,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";

export interface listaNavProps {
  className?: string;
}
export default function ListaNav(props: listaNavProps) {
  const { toggleTheme } = useTheme();
  return (
    <ul className={`flex gap-8 md:gap-5  ${props.className}`}>
      <li className="transition-all duration-300 dark:hover:text-white p-1">
        <Link href={"#home"} className="flex gap-2">
          <IconHome className="md:hidden" /> Home
        </Link>
      </li>
      <li className="transition all durantion-500 dark:hover:text-white p-1">
        <Link href={"#projetos"} className="flex gap-2 ">
          <IconCube className="md:hidden" />
          Projetos
        </Link>
      </li>
      <li className="transition all durantion-500 dark:hover:text-white p-1">
        <Link href={"#sobre"} className="flex gap-2 ">
          <IconUser className="md:hidden" />
          Sobre
        </Link>
      </li>
      <li className="transition all durantion-500 dark:hover:text-white p-1">
        <Link href={"#sobre"} className="flex gap-2 ">
          <IconCode className="md:hidden" />
          Skills
        </Link>
      </li>
      <li className="transition all durantion-500 dark:hover:text-white p-1">
        <Link href={"#carreira"} className="flex gap-2 ">
          <IconMedal className="md:hidden" />
          Carreira
        </Link>
      </li>
      <li className=" flex justify-start ml-3 items-center w-full md:opacity-0 md:hidden ">
        <button
          onClick={toggleTheme}
          className="flex relative items-center justify-center w-2/5 py-5 bg-violet-500 rounded-lg "
        >
          <IconSun
            className="absolute transition-transform duration-500 ease-out text-white  hover:rotate-90 dark:scale-0 scale-100 "
            size={24}
          />
          <IconMoon
            className="absolute transition-transform duration-500 ease-out dark:text-white dark:hover:text-purple-light hover:rotate-180 dark:scale-100 scale-0 "
            size={24}
          />
        </button>
      </li>
    </ul>
  );
}
