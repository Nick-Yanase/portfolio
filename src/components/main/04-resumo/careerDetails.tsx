"use client";

import TextGradient from "@/components/textGradient";
import { IconBriefcase2, IconMedal, IconSchool, IconTargetArrow } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import CarrerColumns from "./carrerColumns";

export default function CareerDetails() {
  const [activeIndex, setActiveIndex] = useState(0);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = menuRef.current?.querySelectorAll(".menu-item2");
    if (items) {
      const activeItem = items[activeIndex] as HTMLElement;
      const height = activeItem.offsetHeight;
      const top = activeItem.offsetTop;

      if (backgroundRef.current) {
        backgroundRef.current.style.height = `${height}px`;
        backgroundRef.current.style.transform = `translateY(${top}px)`;
      }
    }
  }, [activeIndex]);


  return (
    <section ref={sectionRef} className="w-full flex justify-center px-5 pt-12 pb-20 z-10 overflow-hidden">
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

        <div className="w-full flex justify-between items-start gap-20 mt-8">
          <article ref={menuRef} className="menu2  lg:w-[230px] border-zinc-800 border">
            <div ref={backgroundRef} className="background2"></div>
            <div className={`menu-item2 text-lg ${activeIndex === 0 ? "active" : ""}`} onClick={() => setActiveIndex(0)}>
              <IconBriefcase2 /> <p className="">Experiência</p>
            </div>
            <div className={`menu-item2 text-lg ${activeIndex === 1 ? "active" : ""}`} onClick={() => setActiveIndex(1)}>
              <IconSchool /> <p className="">Formação</p>
            </div>
            <div className={`menu-item2 text-lg ${activeIndex === 2 ? "active" : ""}`} onClick={() => setActiveIndex(2)}>
              <IconMedal /> <p className="">Certificados</p>
            </div>
          </article>

          <article className="flex flex-col gap-12 items-center">
            <CarrerColumns sectionRef={sectionRef} activeIndex={activeIndex} />
          </article>

          <span className="relative w-[200px] h-full bg-zinc-800 flex justify-center">
            
          </span>
        </div>
      </div>
    </section>
  );
}
