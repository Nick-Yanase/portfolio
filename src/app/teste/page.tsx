"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const triangleRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!triangleRef.current || !timelineRef.current) return;

      gsap.to(triangleRef.current, {
        y: "80vh", // Movimento na vertical
        rotation: 360,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert(); // Limpeza ao desmontar o componente
  }, []);

  return (
    <div className="relative w-full h-[200vh] flex items-center justify-center bg-gray-200">
      {/* Timeline vertical */}
      <div
        ref={timelineRef}
        className="timeline h-[80vh] w-[5px] bg-black absolute top-1/2 left-1/2 -translate-x-1/2"
      >
        {/* Triângulo animado */}
        <div
          ref={triangleRef}
          className="absolute left-[-15px] top-0"
          style={{
            width: 0,
            height: 0,
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderTop: "35px solid red", // Ajuste para um triângulo apontando para cima
          }}
        ></div>
      </div>
    </div>
  );
};

export default Timeline;
