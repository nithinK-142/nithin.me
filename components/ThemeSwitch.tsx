"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { icons } from "@/app/assets/icons";
import Tooltip from "./Tooltip";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div onClick={() => setTheme("light")} className="themeswitch-btn">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
          width={24}
          height={24}
          sizes="24x24"
          alt="Loading Light/Dark Toggle"
          priority={false}
          title="Loading Light/Dark Toggle"
        />
      </div>
    );

  if (resolvedTheme === "dark") {
    return (
      <Tooltip content="DarkMode is enabled" tooltip="reverse">
        <button
          onClick={() => setTheme("light")}
          className="themeswitch-btn md:hover:bg-black/70"
        >
          <span className="sr-only">Toggle theme</span>
          {icons.sun}
        </button>
      </Tooltip>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Tooltip content="LightMode is enabled" tooltip="reverse">
        <button
          onClick={() => setTheme("dark")}
          className="themeswitch-btn md:hover:bg-black/10"
        >
          <span className="sr-only">Toggle theme</span>
          {icons.moon}
        </button>
      </Tooltip>
    );
  }
};

export default ThemeSwitch;
