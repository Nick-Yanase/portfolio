"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export interface toastProps{
  children: React.ReactNode
}
export function Toast(props: toastProps) {
  const {children} = props;
  return (
    <Button
      className=" bg-transparent hover:bg-transparent"
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
    </Button>
  )
}
