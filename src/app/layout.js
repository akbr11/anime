import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Util/Navbar";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400"] });

export const metadata = {
  title: "Anime",
  description: "Indonesia Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
