import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"]})
export const metadata: Metadata = {
  title: "Portfolio - Nicky",
  description: "Aqui você encontra um pouco sobre mim, projetos e habilidades, fale comigo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br"> {/* Adiciona a classe da fonte diretamente na tag <html> */}
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/fav.ico" />
      </head>
      <body className={`antialiased ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
