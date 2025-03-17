import Link from "next/link";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: " px-5  text-white text-sm md:text-base font-semibold  transition-all duration-500 flex items-center justify-center gap-2",
  variants: {
    variant: {
      primary:
        "lg:px-10 py-3 md:py-4 relative bg-gradient-to-r from-[#3B6AFF] to-[#6620FF] bg-[length:100%_450%] bg-[position:0%_0%] hover:bg-[length:300%_10%] rounded-2xl",
      secondary:
        "w-full border-violet-500 border-[2px] dark:border-[3px] py-4 text-violet-500 dark:text-violet-400 hover:text-white hover:border-violet-500 hover:bg-violet-500 font-semibold rounded-2xl bg-transparent hidden md:flex gap-2",
      terciary:
        "border-violet-500 border-[3px] px-16 py-4 text-violet-400 hover:text-white hover:border-violet-500 hover:bg-violet-500 text-xl font-semibold rounded-2xl bg-transparent flex md:hidden",
      quaternary:
        "bg-zinc-800 p-2 w-full rounded-2xl font-semibold transition-all border hover:border-violet-500 border-zinc-700 hover:text-violet-400 hover:bg-transparent",
      quinary: 
      "bg-zinc-800 p-2 w-full rounded-2xl font-semibold transition-all border-violet-500 hover:border hover:text-violet-400 hover:bg-transparent",
      senary:
      "w-full sm:w-44 px-0 h-12 font-semibold transition-all border bg-transparent hover:bg-zinc-700 border border-zinc-700 mt-3 text-zinc-400 hover:text-white rounded-xl "
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
