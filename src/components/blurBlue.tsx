import Image from "next/image";

export interface blurPurpleProps {
  className: string
  width: number
  height: number
}
export default function BlurBlue(props: blurPurpleProps) {
  return (
    <Image
      src={"/images/blur-blue.svg"}
      alt="blur-purple"
      width={props.width}
      height={props.height}
      className={props.className}
    />
  );
}
