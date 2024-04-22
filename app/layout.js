import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy me a Daru",
  description: "Paterion For Daru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="https://icons.iconarchive.com/icons/icons8/windows-8/256/Food-Beer-icon.png" />
      <body className={inter.className}>
      <Navbar/>
      {children}
      </body>
    </html>
  );
}
