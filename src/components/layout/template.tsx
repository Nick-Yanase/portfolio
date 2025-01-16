import Footer from "./footer";
import Header from "./header";

export interface templateProps {
  children: React.ReactNode;
  className?: string;
}

export default function Template(props: templateProps) {
  return (
    <div className="flex flex-col">
      <Header />
      <main
        className={`w-full flex-col flex justify-center items-center bg-zinc-950 overflow-hidden${
          props.className ?? ``
        }`}
      >
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
