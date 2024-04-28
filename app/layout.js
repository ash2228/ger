import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./components/SessionWrapper";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get Ash a Beer",
  description: "Paterion To Support Me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body className={inter.className}>
      <link rel="icon" href="https://clipart-library.com/images/dT45Ep4kc.png" type="image/gif" sizes="16x16"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet"/>
      <Navbar/>
        {children}</body>
      
      </SessionWrapper>
    </html>
  );
}