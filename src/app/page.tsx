import Btn from "@/components/button";
import Logotipo from "@/components/layout/logotipo";
import Template from "@/components/layout/template";
import TextGradient from "@/components/textGradient";
import { IconDownload, IconRocket } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Template>
      <section className="w-full bg-purple/10 flex justify-center pt-[96px] p-5 relative">
        <div className="max-w-screen-xl w-full flex flex-col md:flex-row items-center gap-16 lg:gap-20 justify-between lg:py-10 z-20">
          <article className="w-[615px] flex flex-col gap-3">
            <h2 className="text-zinc-300 text-xl lg:text-2xl xl:text-4xl font-bold ">Olá, me chamo Nicolas Yanase</h2>

            <div className="w-full">
              <TextGradient
                primaryColor="#CAA6FF"
                secondaryColor="#003DFF"
                className="text-4xl lg:text-5xl xl:text-6xl font-bold lg:py-2"> Desenvolvedor Web +
              </TextGradient>
              <TextGradient
                primaryColor="#CAA6FF"
                secondaryColor="#003DFF"
                className="text-4xl lg:text-5xl xl:text-6xl font-bold lg:py-2"> UI Designer
              </TextGradient>
            </div>
              
              <p className="text-zinc-400 text-base lg:text-lg xl:text-xl ">Transformando ideias em experiências visuais e funcionais! <IconRocket className="text-violet-500 inline-flex"/></p>

            <div className="flex flex-col lg:flex-row lg:items-center gap-8 justify-between mt-6">
            <Btn variant="secondary">
                <a
                href="/Curriculo-Nicolas-Yanase.pdf" // Caminho do arquivo no diretório public
                download="Curriculo-Nicolas-Yanase.pdf" // Nome sugerido para o arquivo ao fazer download
                className="flex gap-1 items-center"
                >
                  <p className="lg:w-32 xl:w-44">Download CV</p> <IconDownload className="font-bold"/> 
                </a> 
              </Btn>

              <span className="hidden lg:flex lg:w-14 xl:w-20 h-[2px] rounded-lg bg-zinc-500"/>

              <div className="flex justify-center gap-14 lg:justify-between items-center lg:gap-4 xl:gap-8">
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
          </article>

          <article className="w-2/5 flex justify-end">
            <div className="relative w-[490px] h-[560px] transition-transform transform hover:scale-105 duration-300 ">
              <Image  src={"/images/ImageNicky.svg"} alt="Image de nicky" fill/>
            </div>
          </article>
        </div>

          <Image src={"/images/blur-purple.svg"} alt="blur-purple" width={900} height={100} className="absolute top-0 -right-96 z-10"/>

          <Image src={"/images/blur-purple.svg"} alt="blur-purple" width={700} height={100} className="absolute -bottom-52 -left-[300px] z-10"/>
      </section>
    </Template>
  );
}
