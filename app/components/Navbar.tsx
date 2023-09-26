"use client";

// import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../data/nav-items";
import { icons } from "../data/icons";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-2 lg:pr-2 md:gap-0 md:justify-between">
      <div className="nav-text hidden md:block">
        {pathname != "/" && (
          <div className="justify-center gap-2 flex-align bg-slate-700">
            <div className="w-12 h-12 pt-[2px]">{icons.user}</div>

            <Link href="/">
              <h2 className="text-xl font-bold tracking-[.1em]">Nithin</h2>
              <p className="font-mono text-sm font-semibold opacity-80">
                @nithinK-142
              </p>
            </Link>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-4">
        <p
          className={`block md:hidden nav-text ${
            pathname === "/" ? "hidden" : "opacity-70"
          }`}
        >
          <Link href="/" className="font-semibold" passHref>
            Home
          </Link>
        </p>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <p
              key={item.path}
              className={`nav-text ${isActive ? "opacity-100" : "opacity-70"}`}
            >
              <Link href={item.path} className="font-semibold" passHref>
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
