export interface TextGradientProps {
  children: React.ReactNode;
  primaryColor: string; // Nome da cor definida no Tailwind.config
  secondaryColor: string; // Nome da cor definida no Tailwind.config
  className?: string;
}

export default function TextGradient(props: TextGradientProps) {
  return (
    <div
      className={`bg-gradient-to-r from-[${props.primaryColor}] to-[${props.secondaryColor}] 
      bg-[length:170%_100%] bg-clip-text text-transparent w-fit`}
    >
      <p className={props.className}>
        {props.children}
      </p>
    </div>
  );
}
