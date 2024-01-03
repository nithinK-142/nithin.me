"use client";

import Socials from "../sub/Socials";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center pt-2 pb-1 md:justify-between">
      {pathname !== "/contact" && (
        <>
          <Socials height={"h-6"} />
          <p className="hidden text-sm underline underline-offset-2 md:block hover:opacity-80">
            &#169; {currentYear}. All Rights Reserved.
          </p>
        </>
      )}
    </footer>
  );
};

export default Footer;
