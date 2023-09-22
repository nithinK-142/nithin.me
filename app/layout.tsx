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
      <body className={inter.className}>
        <div className="w-full flex justify-center ">
          <div className="h-screen w-[90%] sm:w-[70%] flex flex-col justify-between py-1 sm:py-2 bg-slate-700 px-1 sm:px-2">
            <Navbar />
            <main className="bg-green-700">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
