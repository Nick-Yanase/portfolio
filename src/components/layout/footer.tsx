import Image from "next/image";
import Logotipo from "./logotipo";
import Link from "next/link";
import ListaNav from "./listaNav";
import TextGradient from "../textGradient";
import { IconBrandGmail, IconBrandInstagram,IconDeviceMobile } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className=" w-full bg-zinc-900 flex justify-center">
      <div className="w-full p-5 mt-10 mb-6 max-w-screen-2xl flex flex-col gap-14">
        <div className="w-full flex-col flex md:flex-row gap-12 md:gap-8 items-start justify-between">
          <div className="w-full md:w-2/4 flex flex-col gap-8">
            <Logotipo />
            <p className="text-zinc-300">
              Web developer | ReactJS | NodeJS | Tailwind | Javascript | CSS3 |
              HTML5 | UI & UX Design | Figma | MongoDB
            </p>
            <div className="flex items-center gap-6">
              <Link href="mailto:nicolasyanase18@gmail.com">
                <div
                  className="size-12 rounded-full border-[1px] border-blue flex items-center justify-center transition-transform transform hover:scale-110 duration-300
            "
                >
                  <Image
                    src={"../../../images/icon-gmail.svg"}
                    alt="icon gmail"
                    width={30}
                    height={30}
                  />
                </div>
              </Link>
              <Link href="https://github.com/Nick-Yanase">
                <div
                  className="size-12 rounded-full border-[1px] border-blue flex items-center justify-center transition-transform transform hover:scale-110 duration-300
            "
                >
                  <Image
                    src={"../../../images/icon-github.svg"}
                    alt="icon github"
                    width={30}
                    height={30}
                  />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/nicolas-yanase/">
                <div
                  className="size-12 rounded-full border-[1px] border-blue flex items-center justify-center transition-transform transform hover:scale-110 duration-300
            "
                >
                  <Image
                    src={"../../../images/icon-linkedin.svg"}
                    alt="icon gmail"
                    width={29}
                    height={29}
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-3/4 gap-20 flex flex-col md:flex-row justify-start md:justify-end items-start">
            <div className="flex flex-col gap-5">
             <TextGradient 
                primaryColor="#CAA6FF" 
                secondaryColor="#003DFF"
                className="text-2xl font-bold">Navegação 
              </TextGradient>
              <ListaNav className={"flex-col gap-5 text-zinc-400"} />
            </div>
            <div className="flex flex-col gap-5">
              <TextGradient 
                primaryColor="#CAA6FF" 
                secondaryColor="#003DFF"
                className="text-2xl font-bold">Contato 
              </TextGradient>
              <ul className="flex gap-5 text-zinc-400 flex-col">
                <li className="transition all durantion-500 hover:text-white">
                  <Link href="https://wa.me/5511955206286?text=Olá!%20Gostaria%20de%20conversar%20com%20você."className="flex gap-2"><IconDeviceMobile />
                    +55 (11) 95520-6286
                  </Link>
                </li>
                <li className="transition all durantion-500 hover:text-white">
                  <Link href="mailto:nicolasyanase18@gmail.com"className="flex gap-2"><IconBrandGmail />
                    nicolasyanase18@gmail.com
                  </Link>
                </li>
                <li className="transition all durantion-500 hover:text-white">
                  <Link href="https://www.instagram.com/nick_yanase"className="flex gap-2"><IconBrandInstagram />
                    @nick_yanase
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex-col flex gap-8">
          <div className="w-full h-[3px] rounded-lg bg-zinc-500" />
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-zinc-400 ">
            <p className="text-center">© Copyright {new Date().getFullYear()}. Desenvolvido por Nicolas Yanase</p>
            <p className=" font-semibold flex gap-2 items-center">Feito com 
            <TextGradient 
                primaryColor="#CAA6FF" 
                secondaryColor="#003DFF"
                className="text-base font-bold">❤️ 
              </TextGradient>
               em São Paulo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
