"use client";
import { IconCode, IconCube, IconDeviceDesktop, IconFileCode, IconFileCode2, IconHomeBitcoin, IconLayersDifference, IconLayout, IconMedal, IconPalette, IconSchool, IconUser, IconVectorTriangle } from "@tabler/icons-react";
import { useEffect } from "react";

export default function Menu() {
  useEffect(() => {
    let currentScroll = window.scrollY; // Posição atual do scroll
    let isScrolling = false;

    const smoothScroll = () => {
      if (!isScrolling) {
        // Emulate inertia: ajusta a posição atual para se aproximar da posição real
        currentScroll += (window.scrollY - currentScroll) * 0.1;

        window.scrollTo(0, currentScroll);

        if (Math.abs(window.scrollY - currentScroll) > 0.5) {
          // Continua o loop enquanto houver diferença significativa
          requestAnimationFrame(smoothScroll);
        } else {
          currentScroll = window.scrollY; // Ajusta caso a diferença seja mínima
        }
      }
    };

    const onWheel = () => {
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
          smoothScroll();
          isScrolling = false;
        });
      }
    };

    window.addEventListener("scroll", onWheel);

    return () => window.removeEventListener("scroll", onWheel);
  }, []);

  return <div style={{ height: "200vh" }}>Rolar para testar a suavidade</div>;
}
