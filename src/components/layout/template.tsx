'use client';
import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import PreloaderAnime from "../preloaderAnime";
import { Toaster } from "@/components/ui/sonner"

export interface templateProps {
  children: React.ReactNode;
  className?: string;
}

export default function Template(props: templateProps) {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Oculta o Preloader
      setTimeout(() => setShowContent(true), 900); // Mostra o conteúdo após a transição
    }, 20); // Simula um carregamento de 2 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full h-screen bg-[#120B24] transition-all duration-500`}
    >
      {/* Preloader */}
      {loading && (
        <div
          className={`w-full h-full absolute inset-0 transition-opacity duration-200 ${
            showContent ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <PreloaderAnime />
        </div>
      )}

      {/* Conteúdo principal */}
      {!loading && (
        <div
          className={`flex flex-col transition-opacity duration-500 ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Header />
          <main
            className={`w-full flex-col flex justify-center items-center overflow-hidden ${props.className ?? ''}`}
          >
            {props.children}
          </main>
          <Toaster />
          <Footer />
        </div>
      )}
    </div>
  );
}
