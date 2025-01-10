import Image from "next/image";
import Logotipo from "./logotipo";
import Link from "next/link";
import ListaNav from "./listaNav";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-800 flex justify-center">
      <div className="w-full p-5 max-w-screen-2xl">
        <div className="w-1/2 flex flex-col gap-8">
          <Logotipo />
          <p>
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

        <div className="w-1/2 flex justify-between items-start">
          <div className="flex flex-col">
            <p className="text-gradient-primary font-semibold text-xl">
              Navegação
            </p>
            <ListaNav />
          </div>

          <div className="flex flex-col">
            <p className="text-gradient-primary font-bold text-4xl text-transparent bg-clip-text">
              Contato
            </p>
            <ul className="flex gap-10 text-zinc-400">
              <li className="transition all durantion-500 hover:text-white">
                <Link href="https://wa.me/5511955206286?text=Olá!%20Gostaria%20de%20conversar%20com%20você.">
                  +55 (11) 95520-6286
                </Link>
              </li>
              <li className="transition all durantion-500 hover:text-white">
                <Link href="mailto:nicolasyanase18@gmail.com">
                  nicolasyanase18@gmail.com
                </Link>
              </li>
              <li className="transition all durantion-500 hover:text-white">
                <Link href="https://www.instagram.com/nick_yanase">
                  @nick_yanase
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
