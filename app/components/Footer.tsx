"use client";

import React from "react";
import Socials from "./Socials";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="flex items-center justify-center pt-2 pb-1 md:justify-between">
      {pathname !== "/contact" && (
        <>
          <Socials height={"h-5"} />
          <p className="hidden text-sm underline underline-offset-2 md:block hover:opacity-70">
            <a href="mailto:nithin.sagar.359@gmail.com">
              nithin.sagar.359@gmail.com
            </a>
          </p>
        </>
      )}
    </footer>
  );
};

export default Footer;
