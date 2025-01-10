import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "px-7 font-semibold flex items-center justify-center gap-2 rounded-2xl transition-all ",
  variants: {
    variant: {
        primary: "bg-gradient-primary text-white ",
        secondary:
          "bg-gradient-secondary text-white",
    },
    size: {
      default: "py-4",
      full: "w-full h-11",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface propsBtn
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Btn({ variant, children, size, ...props }: propsBtn) {
  return (
    // Adicione `...props` no botão para garantir que todas as propriedades sejam aplicadas
    <button className={buttonVariants({ variant, size })} {...props}>
      {children}
    </button>
  );
}
