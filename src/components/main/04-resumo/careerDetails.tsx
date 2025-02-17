import TextGradient from "@/components/textGradient";
import { IconMedal, IconSchool } from "@tabler/icons-react";
import CarrerCard from "./experienceCard";

export default function CareerDetails() {
  return (
    <section className="w-full flex justify-center px-5 pt-12 pb-20 z-10 overflow-hidden">
      <div className="w-full max-w-screen-xl gap-4 grid grid-cols-2 justify-center items-center">
        <article className="flex flex-col gap-4 items-center">
          <div className="titulo flex gap-2 items-center justify-center ">
            <IconSchool
              style={{ stroke: "url(#iconGradient)" }}
              className="size-9"
              fill="none"
              strokeWidth="2" // Controla a espessura da linha
              strokeLinecap="round" // Para arestas arredondadas
              strokeLinejoin="round" // Para cantos mais suaves
            >
              <defs>
                <linearGradient id="iconGradient" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="20%" stopColor="#CAA6FF" />
                  <stop offset="50%" stopColor="#5C6DFF" />
                </linearGradient>
              </defs>
            </IconSchool>
            <TextGradient
              primaryColor="#CAA6FF"
              secondaryColor="#003DFF"
              className="text-4xl font-bold flex gap-4"
            >
              Experiência
            </TextGradient>
          </div>

          <CarrerCard />
          <CarrerCard />
          <CarrerCard />
          <CarrerCard />
        </article>

        <article>
          <div className="titulo flex gap-2 items-center justify-center">
            <IconMedal
              style={{ stroke: "url(#iconGradient)" }}
              className="size-9"
              fill="none"
              strokeWidth="2" // Controla a espessura da linha
              strokeLinecap="round" // Para arestas arredondadas
              strokeLinejoin="round" // Para cantos mais suaves
            >
              <defs>
                <linearGradient id="iconGradient" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="20%" stopColor="#CAA6FF" />
                  <stop offset="50%" stopColor="#5C6DFF" />
                </linearGradient>
              </defs>
            </IconMedal>
            <TextGradient
              primaryColor="#CAA6FF"
              secondaryColor="#003DFF"
              className="text-4xl font-bold flex gap-4"
            >
              Experiência
            </TextGradient>
          </div>
        </article>
      </div>
    </section>
  );
}
