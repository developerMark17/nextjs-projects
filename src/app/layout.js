import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/navbar";
import { Footer } from "./footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airaz's Portfolio",
 description: "Explore Airaz's professional portfolio showcasing expertise in full-stack development, React, Next.js, and creative UI/UX design. Discover projects, skills, and achievements.",
 icons:[{
  url:"/images/angular.png",
 }]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
