"use client";

// import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../data/nav-items";
import { icons } from "../data/icons";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={`flex-justify gap-2 lg:pr-2 md:gap-0 md:justify-between`}>
      {pathname !== "/" ? (
        <div className="nav-text hidden md:block">
          <div className="justify-center gap-2 flex-align">
            <div className="w-12 h-12 pt-[2px]">{icons.user}</div>
            <Link href="/">
              <h2 className="text-xl font-bold tracking-[.1em]">Nithin</h2>
              <p className="font-mono text-sm font-semibold opacity-80">
                @nithinK-142
              </p>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <Link href="/">
            <h2 className="hidden font-mono text-2xl font-bold md:block">
              nithin<span className="text-orange-400">.</span>me
            </h2>
          </Link>
        </div>
      )}

      <div className="flex flex-wrap gap-2 sm:gap-4 mb-3">
        <p
          className={`block md:hidden nav-text pt-1 ${
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
              className={`nav-text pt-1 ${isActive ? "opacity-100" : "hover:opacity-90 opacity-70"}`}
            >
              {isActive && (
                <div className="flex-justify items-center">
                  <span className="hidden md:block arrow-head"></span>
                </div>
              )}
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
