import Link from "next/link";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "px-5 lg:px-10 py-4 text-white font-semibold rounded-2xl transition-all flex items-center justify-center gap-2 ",
  variants: {
    variant: {
        primary: "relative bg-gradient-to-r from-[#3B6AFF] to-[#6620FF] bg-[length:100%_450%] bg-[position:0%_0%] hover:bg-[length:300%_10%] ",
        secondary:
          "bg-gradient-secondary text-white",
    },
    // size: {
    //   default: "py-4",
    //   full: "w-full h-11",
    // },
  },
  defaultVariants: {
    variant: "primary",
    //size: "default",
  },
});

interface propsBtn
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  link?: string;
  children: React.ReactNode;
}

export default function Btn({ variant, children, ...props }: propsBtn) {
  return (
    // Adicione `...props` no botão para garantir que todas as propriedades sejam aplicadas
    <Link href={`${props.link}`} >
      <button className={buttonVariants({ variant})} {...props}>
        {children}
      </button>
    </Link>
  );
}
