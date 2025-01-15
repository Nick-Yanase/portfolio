import Image from "next/image";
import Link from "next/link";

export default function Logotipo(){
  return(
    <Link href={"/"} >
      <div className="hidden md:flex w-[160px] h-12 relative">
        <Image src={"../../images/Logo.svg"} alt="logotipo" fill/>
      </div>
      <div className="size-12 md:hidden relative">
      <Image src={"../../images/NY-LOGOTIPO.svg"} alt="logotipo" fill/>
      </div>
    </Link>
  )
}