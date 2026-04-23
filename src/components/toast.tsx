"use client"

import { toast } from "sonner"

export interface toastProps{
  children: React.ReactNode
}
export function Toast(props: toastProps) {
  const {children} = props;
  return (
    <div
      className="bg-transparent"
      onClick={() =>
        toast("Baixado com sucesso!", {
          description: "Currículo de Nicky",
          action: {
            label: "Fechar",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      {children}
    </div>
  )
}
