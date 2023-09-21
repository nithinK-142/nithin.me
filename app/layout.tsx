import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
      <div className="w-full flex justify-center ">
          <div className="h-screen w-[96%] sm:w-[70%] flex flex-col justify-between py-4 bg-slate-700 px-2 sm:px-4">
          <Navbar />
          <main className="bg-green-700">{children}</main>
          <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
