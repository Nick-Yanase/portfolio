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
        x: "80vw",
        rotation: 360,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert(); // Limpeza ao desmontar o componente
  }, []);

  return (
    <div className="relative w-full h-[200vh] flex items-center justify-center bg-gray-200">
      {/* Timeline */}
      <div
        ref={timelineRef}
        className="timeline w-[80vw] h-[5px] bg-black absolute top-1/2 left-1/2 -translate-x-1/2"
      >
        {/* Triângulo */}
        <div
          ref={triangleRef}
          className="absolute top-[-25px] left-0"
          style={{
            width: 0,
            height: 0,
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderBottom: "35px solid red",
          }}
        ></div>
      </div>
    </div>
  );
};

// sad IconMedal, iconSchool, iconBriefcase
export default Timeline;
