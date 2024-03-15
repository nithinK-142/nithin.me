"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";
import { navItems } from "@/data/nav-items";
import { icons } from "@/app/assets/icons";
import { navsmall } from "@/app/assets/nav-small";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex-justify gap-2 lg:pr-2 md:gap-0 md:justify-between relative">
      {pathname !== "/" ? (
        <div className="hidden md:block">
          <div className="justify-center gap-2 flex-align">
            <div className="w-10 h-10 pt-[2px]">
              <Link href="/">{icons.user}</Link>
            </div>

            <Link href="/">
              <h2 className="text-lg h-6 font-semibold tracking-[.1em]">
                NITHIN
              </h2>
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

      <ul className="hidden md:flex flex-wrap gap-2 sm:gap-4 mb-3">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <li
              key={item.path}
              className={`${
                inter.className
              } text-base tracking-wide font-normal pt-0.5
              ${isActive ? "opacity-100" : "hover:opacity-90 opacity-70"}`}
            >
              {isActive && (
                <div className="flex-justify items-center">
                  <span className="opacity-0 md:opacity-100 arrow-head"></span>
                </div>
              )}
              <div className="py-0.5"></div>
              <Link href={item.path} passHref>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="hidden md:block absolute -right-8 cursor-pointer">
        <ThemeSwitch />
      </div>

      {/* Small Screen Nav */}
      <ul className="md:hidden pt-2 flex flex-justify items-center flex-wrap max-xs:space-x-4 space-x-8">
        {navsmall.map((nav, index) => (
          <li key={index}>
            <Link
              href={nav.path}
              className="fill-black dark:fill-white opacity-80 dark:opacity-90"
            >
              {nav.logo}
            </Link>
          </li>
        ))}
        <li className="cursor-pointer">
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
