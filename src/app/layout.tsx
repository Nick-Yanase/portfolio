import type { Metadata } from "next";
import "./globals.css";
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
    <html lang="pt-br">
      <link rel="icon" type="image/png" sizes="32x32" href="../../fav.ico"></link>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
