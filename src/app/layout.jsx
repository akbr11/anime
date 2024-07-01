"use client";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Util/Navbar";
import { usePathname } from "next/navigation";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400"] });

export default function RootLayout({ children }) {
  const params = usePathname();
  return (
    <html lang="en">
      <head>
        <title>Anime</title>
      </head>
      <body
        className={`${lato.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <Navbar params={params} />
        {children}
      </body>
    </html>
  );
}
