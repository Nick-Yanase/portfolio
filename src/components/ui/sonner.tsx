"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className=""
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg border-violet-500 bg-zinc-900 backdrop-blur-2xl ",
          description: "text-zinc-400",
          actionButton:
            "text-white bg-violet-500",
          cancelButton:
            "text-white bg-violet-500",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
