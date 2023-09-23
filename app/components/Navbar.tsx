"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { navItems } from "../data/nav";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center">
      <div>
        <Link href="/">
          <h2 className="text-xl sm:text-2xl font-bold font-mono">
            nithin<span className="text-orange-400">.</span>me
          </h2>
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
              <Link href={item.path} className="font-bold" passHref>
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
