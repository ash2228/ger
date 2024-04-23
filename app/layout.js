import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./components/SessionWrapper";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a Daru",
  description: "Paterion To Support Me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body className={inter.className}>
      <Navbar/>
        {children}</body>
      
      </SessionWrapper>
    </html>
  );
}