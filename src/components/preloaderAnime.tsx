import Image from "next/image";

export default function PreloaderAnime(){
  return(
    <div className="w-full h-screen inset-0 flex gap-4 flex-col items-center justify-center" >
      {/* <Image src={"/image/NY-LOGOTIPO.SVG"} alt="LOGOTIPO" width={300}height={300}/> */}
      <div className="size-20 relative">
        <Image src={"../../images/NY-LOGOTIPO.svg"} alt="logotipo" fill/>
      </div>
      <Image
        src="/lotties/preloader.gif" // Certifique-se de usar um formato compatível
        width={150} 
        height={150}
        alt="carregando ..."
        unoptimized // Necessário para GIFs animados
      />
    </div>
  )
}