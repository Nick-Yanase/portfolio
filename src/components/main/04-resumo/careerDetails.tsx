"use client";
import TextGradient from "@/components/textGradient";
import { IconBriefcase2, IconMedal, IconSchool, IconTargetArrow } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import CarrerColumns from "./carrerColumns";
import BlurPurple from "@/components/blurPurple";
import BlurBlue from "@/components/blurBlue";

export default function CareerDetails() {
  const [activeIndex, setActiveIndex] = useState(0);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const backgroundRef2 = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuRef2 = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);

  useEffect(() => {

    const items = menuRef.current?.querySelectorAll(".menu-item");
    if (items) {
      const activeItem = items[activeIndex] as HTMLElement;
      const width = activeItem.offsetWidth;
      const left = activeItem.offsetLeft;

      if (backgroundRef.current) {
          backgroundRef.current.style.width = `${width}px`;
          backgroundRef.current.style.transform = `translateX(${left}px)`;
      }
    }

    const items2 = menuRef2.current?.querySelectorAll(".menu-item2");
    if (items2) {
      const activeItem = items2[activeIndex] as HTMLElement;
      const height = activeItem.offsetHeight;
      const top = activeItem.offsetTop;

      if (backgroundRef2.current) {
          backgroundRef2.current.style.height = `${height}px`;
          backgroundRef2.current.style.transform = `translateY(${top}px)`;
      }
    }
  }, [activeIndex]);

  return (
    <section id="carreira" ref={sectionRef} className="relative w-full flex justify-center px-5 pt-12 pb-20 z-10 overflow-hidden">
      <div className="w-full max-w-screen-xl flex flex-col items-center">
        <div className="titulo flex gap-2 items-center justify-center">
          <IconTargetArrow
            style={{ stroke: "url(#iconGradient)" }}
            className="size-9"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="iconGradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="20%" stopColor="#CAA6FF" />
                <stop offset="50%" stopColor="#5C6DFF" />
              </linearGradient>
            </defs>
          </IconTargetArrow>
          <TextGradient primaryColor="#CAA6FF" secondaryColor="#003DFF" className="text-4xl font-bold flex gap-4">
            Carreira
          </TextGradient>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:gap-20 mt-10">
         
            <article className="z-30">
              {/* menu mobile */}
              <nav ref={menuRef} className="menu lg:hidden text-sm md:text-base">
                <div ref={backgroundRef} className="background lg:hidden"></div>
                <div
                  className={`menu-item ${activeIndex === 0 ? "active" : ""}`}
                  onClick={() => setActiveIndex(0)}
                >
                  <IconBriefcase2 /> <p className="hidden lg:flex">Experiência</p>
                </div>
                <div
                  className={`menu-item ${activeIndex === 1 ? "active" : ""}`}
                  onClick={() => setActiveIndex(1)}
                >
                   <IconSchool /> <p className="hidden lg:flex">Formação</p>
                </div>
                <div
                  className={`menu-item ${activeIndex === 2 ? "active" : ""}`}
                  onClick={() => setActiveIndex(2)}
                >
                  <IconMedal /> <p className="hidden lg:flex">Certificados</p>
                </div>
              </nav>

              {/* menu desktop */}
              <nav ref={menuRef2} className="hidden lg:flex overflow-hidden relative bg-[#18181b] rounded-2xl p-4 items-start border-zinc-800 border z-20 lg:flex-col gap-8 w-full lg:w-[230px]">
                <div ref={backgroundRef2} className="background2"></div>
                <div className={`menu-item2 text-lg ${activeIndex === 0 ? "active" : ""}`} onClick={() => setActiveIndex(0)}>
                  <IconBriefcase2 /> <p className="hidden lg:flex">Experiência</p>
                </div>
                <div className={`menu-item2 text-lg ${activeIndex === 1 ? "active" : ""}`} onClick={() => setActiveIndex(1)}>
                  <IconSchool /> <p className="hidden lg:flex">Formação</p>
                </div>
                <div className={`menu-item2 text-lg ${activeIndex === 2 ? "active" : ""}`} onClick={() => setActiveIndex(2)}>
                  <IconMedal /> <p className="hidden lg:flex">Certificados</p>
                </div>
              </nav>

            </article>

          <article className="flex flex-col gap-12 items-start flex-1 lg:flex-none lg:w-[700px] relative z-20">
            <CarrerColumns sectionRef={sectionRef} activeIndex={activeIndex} />
            <span className="w-[4px] h-full bg-zinc-800 rounded-lg absolute right-[60px] top-0 -z-10 hidden lg:flex" />
          </article>
        </div>
      </div>

      <BlurPurple className="absolute top-0 md:-top-[450px] md:-left-[450px] z-0" width={1200} height={100} />
      <BlurBlue className="absolute bottom-0 md:-bottom-[450px] md:-right-[450px] z-0" width={1000} height={100} />
    </section>
  );
}
