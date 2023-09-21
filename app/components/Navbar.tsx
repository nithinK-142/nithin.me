"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { navItems } from "../data/nav";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center bg-orange-800">
      <div>
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-bold font-jbmono">
            nithin<span className="text-orange-400">.</span>me
          </h1>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <p
              key={item.path}
              className={`font-medium text-xs sm:text-base ${
                isActive ? "opacity-100" : "opacity-70"
              }`}
            >
              <Link href={item.path} passHref>
                {item.label}
              </Link>
            </p>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
