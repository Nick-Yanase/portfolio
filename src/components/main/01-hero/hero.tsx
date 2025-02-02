import Info from "./info";
import ImageMe from "./imageMe";
import BlurPurple from "@/components/blurPurple";
export default function Hero() {
  return (
    <section className="w-full bg-purple/10 flex justify-center pt-28 2xl:pt-[130px] p-5 relative z-10 overflow-hidden">
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row items-center md:gap-4 justify-between lg:py-10 z-20">
        <Info />
        <ImageMe />
      </div>
      <BlurPurple
        className="absolute top-0 md:-top-56 md:-right-[350px] z-10"
        width={900}
        height={100}
      />
      <BlurPurple
        className="absolute -bottom-32 md:-bottom-1/2 md:-left-[400px] z-10"
        width={900}
        height={100}
      />
    </section>
  );
}
