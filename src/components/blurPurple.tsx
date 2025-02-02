import Image from "next/image";

export interface blurPurpleProps {
  className: string
  width: number
  height: number
}
export default function BlurPurple(props: blurPurpleProps) {
  return (
    <Image
      src={"/images/blur-purple.svg"}
      alt="blur-purple"
      width={props.width}
      height={props.height}
      className={props.className}
    />
  );
}
