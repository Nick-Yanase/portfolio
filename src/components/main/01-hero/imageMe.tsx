import Btn from "@/components/button";
import { IconDownload } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ImageMe() {
  return (
    <motion.article
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="px-2 w-full md:w-2/5 flex items-center md:items-start md:justify-center lg:justify-end flex-col gap-4"
    >
      <div className="relative w-[310px] h-[400px] lg:w-[400px]  lg:h-[470px] xl:w-[490px] xl:h-[560px] transition-transform transform hover:scale-105 duration-300 ">
        <Image src={"/images/ImageNicky.svg"} alt="Image de nicky" fill />
      </div>

      <Btn variant="terciary">
        <a
          href="/Curriculo-Nicolas-Yanase.pdf" // Caminho do arquivo no diretório public
          download="Curriculo-Nicolas-Yanase.pdf" // Nome sugerido para o arquivo ao fazer download
          className="flex gap-1 items-center"
        >
          <p className="lg:w-32 xl:w-44">Download CV</p>{" "}
          <IconDownload className="font-bold" />
        </a>
      </Btn>

      <div className="mt-2 md:mt-0 flex md:hidden justify-center gap-14 lg:justify-between items-center lg:gap-4 xl:gap-8">
        <Link href="mailto:nicolasyanase18@gmail.com">
          <div
            className="size-12 rounded-full border-[1px] border-purple flex items-center justify-center transition-transform transform hover:scale-110 duration-300
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
            className="size-12 rounded-full border-[1px] border-purple flex items-center justify-center transition-transform transform hover:scale-110 duration-300
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
            className="size-12 rounded-full border-[1px] border-purple flex items-center justify-center transition-transform transform hover:scale-110 duration-300
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
    </motion.article>
  );
}
