"use client";

import Socials from "./Socials";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="flex items-center justify-center md:justify-between pt-2 pb-1">
      {pathname !== "/contact" && (
        <>
          <Socials />
          <p className="text-sm underline underline-offset-2 hidden md:block hover:opacity-70">
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
