import "@/styles/globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeContextProvider } from "@/context/ThemeContextProvider";
import { FramerProvider } from "@/context/FramerProvider";
import { Analytics } from "@vercel/analytics/react";
import { AnimationToggleProvider } from "@/context/AnimationToggleProvider";
import { AnimationSwitch } from "@/components/AnimationSwitch";

const quick = Quicksand({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | nithin.me",
    default: "nithin.me",
  },
  description: "Portfolio using Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock"></meta>
        <link rel="icon" type="image/x-icon" href="favicon.svg" />
      </head>
      <body
        className={`${quick.className} bg-[#ba97a95e] dark:bg-[#1f1f1f] dark:text-white font-medium`}
      >
        <ThemeContextProvider>
          <div className="flex justify-center w-full relative">
            <div className="h-screen w-[90%] sm:w-[70%] flex flex-col justify-between py-1 sm:py-2 px-1 sm:px-2">
              <Navbar />
              <main className="sm:floating-scrollbar">
                <AnimationToggleProvider>
                  <AnimationSwitch />
                  <FramerProvider>{children}</FramerProvider>
                </AnimationToggleProvider>
              </main>
              <Footer />
            </div>
          </div>
        </ThemeContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
