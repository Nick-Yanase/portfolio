export interface TextGradientProps {
  children: React.ReactNode;
  primaryColor?: string; // Nome da cor definida no Tailwind.config
  secondaryColor?: string; // Nome da cor definida no Tailwind.config
  className?: string;
}

export default function TextGradient(props: TextGradientProps) {
  return (
    <div
      className={`dark:bg-gradient-to-r dark:from-[#CAA6FF] dark:to-[#003DFF] bg-[length:170%_100%]
       bg-clip-text text-transparent w-fit bg-gradient-to-r from-[#B486FF] to-[#6128FF] 
      
        `}
    >
      <p className={props.className}>
        {props.children}
      </p>
    </div>
  );
}