"use client";

// import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../data/nav";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between">
      <div>
        <Link href="/">
          <h2 className="font-mono text-xl font-bold sm:text-2xl">
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
