import Image from "next/image";
import Link from "next/link";

export interface socialMediaProps {
  className?: string
}
export default function SocialMedia(props: socialMediaProps){
  return(
    <div className={`${props.className}`}>
    <Link href="mailto:nicolasyanase18@gmail.com">
      <div
        className="size-12 rounded-full border-[1px] border-purple flex items-center justify-center transition-transform transform hover:scale-110 duration-300
        "
      >
        <Image
          src={"../../../images/icon-gmail.svg"}
          alt="icon gmail"
          width={30}
          height={30}
        />
      </div>
    </Link>
    <Link href="https://github.com/Nick-Yanase">
      <div
        className="size-12 rounded-full border-[1px] border-purple flex items-center justify-center transition-transform transform hover:scale-110 duration-300
        "
      >
        <Image
          src={"../../../images/icon-github.svg"}
          alt="icon github"
          width={30}
          height={30}
        />
      </div>
    </Link>
    <Link href="https://www.linkedin.com/in/nicolas-yanase/">
      <div
        className="size-12 rounded-full border-[1px] border-purple flex items-center justify-center transition-transform transform hover:scale-110 duration-300
        "
      >
        <Image
          src={"../../../images/icon-linkedin.svg"}
          alt="icon gmail"
          width={29}
          height={29}
        />
      </div>
    </Link>
  </div>
  )
}