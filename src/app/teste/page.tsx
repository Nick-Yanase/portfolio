"use client";
import { IconCube } from "@tabler/icons-react";

export default function Menu() {
  
  return (
    <div className="bg-black">
        <IconCube
  style={{ fill: "url(#iconGradient)" }}
  className="w-8 h-8"
>
  <defs>
    <linearGradient id="iconGradient" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stopColor="#CAA6FF" />
      <stop offset="100%" stopColor="#003DFF" />
    </linearGradient>
  </defs>
</IconCube>

<IconCube className="text-white"></IconCube>
<IconCube
  style={{ stroke: "url(#iconGradient)" }} // Aplica o gradiente às linhas (contornos)
  className="w-8 h-8"
  fill="none" // Nenhum preenchimento interno
  strokeWidth="2" // Ajusta a largura das linhas (opcional)
>
  <defs>
    <linearGradient id="iconGradient" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stopColor="#CAA6FF" />
      <stop offset="100%" stopColor="#003DFF" />
    </linearGradient>
  </defs>
</IconCube>

<IconCube
  style={{ stroke: "url(#iconGradient)" }}
  className="w-8 h-8"
  fill="none"
  strokeWidth="2" // Controla a espessura da linha
  strokeLinecap="round" // Para arestas arredondadas
  strokeLinejoin="round" // Para cantos mais suaves
>
  <defs>
    <linearGradient id="iconGradient" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stopColor="#CAA6FF" />
      <stop offset="100%" stopColor="#003DFF" />
    </linearGradient>
  </defs>
</IconCube>

    </div>
  );
}
