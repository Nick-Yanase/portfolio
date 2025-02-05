"use client";
import Template from "@/components/layout/template";
import Hero from "@/components/main/01-hero/hero";
import Projetos from "@/components/main/02-projetos/projetos";
import AboutMe from "@/components/main/03-sobreMim/aboutMe";
export default function Home() {
  return (
    <Template>
      
      <Hero />
      <Projetos />
      <AboutMe />
      
    </Template>
  );
}
