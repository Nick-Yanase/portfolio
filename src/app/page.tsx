import Btn from "@/components/button";
import Logotipo from "@/components/layout/logotipo";
import Template from "@/components/layout/template";
import TextGradient from "@/components/textGradient";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Template>
      <section className="w-full bg-purple/10 h-52 flex justify-center pt-[96px] p-5">
        <article className="max-w-screen-2xl w-full ">
          <h2>Olá, me chamo Nicolas Yanase</h2>
            <TextGradient 
              primaryColor="#CAA6FF" 
              secondaryColor="#003DFF"
              className="text-5xl font-bold"> Desenvolvedor Web + UI Designer 
            </TextGradient>
        </article>

        <article>
          <div className="relative w-[490px] h-[560px] ">
            <Image  src={"/images/ImageNicky.png"} alt="Image de nicky" width={100} height={100}/>
          </div>
        </article>
      </section>
    </Template>
  );
}
