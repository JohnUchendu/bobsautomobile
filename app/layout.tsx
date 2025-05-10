// import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google"; // Replace with your desired font
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";



const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={garamond.variable}
      >
        <Topbar/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
