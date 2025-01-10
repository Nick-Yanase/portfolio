import Image from "next/image";
import Link from "next/link";

export default function Logotipo(){
  return(
    <Link href={"/"} className="flex-1">
      <Image src={"../../images/Logo.svg"} alt="logotipo" width={200} height={60}/>
    </Link>
  )
}