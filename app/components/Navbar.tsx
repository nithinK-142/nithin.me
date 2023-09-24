"use client";

// import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../data/nav";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center gap-2 md:gap-0 md:justify-between">
      <div>
        <Link href="/">
          <h2 className="hidden font-mono text-2xl font-bold md:block">
            nithin<span className="text-orange-400">.</span>me
          </h2>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-4">
        <p
          className={`block md:hidden text-sm sm:text-base ${
            pathname === "/" ? "opacity-100" : "opacity-70"
          }`}
        >
          <Link href="/" className="font-bold" passHref>
            Home
          </Link>
        </p>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <p
              key={item.path}
              className={`font-medium text-sm sm:text-base ${
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
