import Link from "next/link";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "px-5 lg:px-10 py-4 text-white font-semibold rounded-2xl transition-all duration-500 flex items-center justify-center gap-2",
  variants: {
    variant: {
      primary:
        "relative bg-gradient-to-r from-[#3B6AFF] to-[#6620FF] bg-[length:100%_450%] bg-[position:0%_0%] hover:bg-[length:300%_10%]",
      secondary:
        "border-violet-500 border-[3px] px-16 py-4 text-violet-400 hover:text-white hover:border-violet-500 hover:bg-violet-500 text-xl font-semibold rounded-2xl bg-transparent hidden md:flex",
      terciary:
        "border-violet-500 border-[3px] px-16 py-4 text-violet-400 hover:text-white hover:border-violet-500 hover:bg-violet-500 text-xl font-semibold rounded-2xl bg-transparent flex md:hidden",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface propsBtn
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  link?: string;
  children: React.ReactNode;
}

export default function Btn({ variant, children, link, ...props }: propsBtn) {
  const button = (
    <button className={buttonVariants({ variant })} {...props}>
      {children}
    </button>
  );

  return link ? <Link href={link}>{button}</Link> : button;
}
