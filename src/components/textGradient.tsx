export interface TextGradientProps {
  children: React.ReactNode;
  primaryColor?: string;
  secondaryColor?: string;
  darkPrimaryColor?: string;
  darkSecondaryColor?: string;
  className?: string;
}

export default function TextGradient(props: TextGradientProps) {
  const {
    children,
    className,
    primaryColor = "#B486FF",
    secondaryColor = "#6128FF",
    darkPrimaryColor = "#CAA6FF",
    darkSecondaryColor = "#003DFF",
  } = props;

  return (
    <span className={`inline-block w-fit ${className ?? ""}`}>
      <span
        className="inline dark:hidden bg-[length:170%_100%] bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
        }}
      >
        {children}
      </span>
      <span
        className="hidden dark:inline bg-[length:170%_100%] bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, ${darkPrimaryColor}, ${darkSecondaryColor})`,
        }}
      >
        {children}
      </span>
    </span>
  );
}
