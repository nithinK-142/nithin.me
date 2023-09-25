// import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const inter = Quicksand({
  weight: ['500','600','700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "nithin.me",
  description: "Portfolio using Next JS 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock"></meta>
        <link rel="icon" type="image/x-icon" href="favicon.svg" />
      </head>
      <body
        className={`${inter.className} bg-[#1f1f1f] text-white font-medium`}>
        <div className="flex justify-center w-full ">
          <div className="h-screen w-[90%] sm:w-[70%] flex flex-col justify-between py-1 sm:py-2 px-1 sm:px-2">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
