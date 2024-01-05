import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Providers } from "@/providers";

const quicksand = localFont({
  src: [
    {
      path: "../fonts/Quicksand-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Quicksand-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Quicksand-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Quicksand-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock"></meta>
        <link rel="icon" type="image/x-icon" href="favicon.svg" />
      </head>
      <body className= {`${quicksand.className} bg-[#ba97a95e] dark:bg-[#1f1f1f] dark:text-white font-medium`}>
        <Providers>
          <div className="flex justify-center w-full">
            <div className="h-screen w-[90%] sm:w-[70%] flex flex-col justify-between py-1 sm:py-2 px-1 sm:px-2">
              <Navbar />
              <main className="sm:floating-scrollbar">{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
