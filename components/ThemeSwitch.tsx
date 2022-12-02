import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { classNames } from "./utils";

export function ThemeSwitch({
  className = "",
  buttonClass = "",
}: {
  className?: string;
  buttonClass?: string;
}) {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  const iconSize = 20;

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) return null;

  if (theme === "dark") {
    return (
      <button className={className} onClick={() => setTheme("light")}>
        <SunIcon className={classNames(buttonClass)} height={iconSize} />
      </button>
    );
  } else {
    return (
      <button className={className} onClick={() => setTheme("dark")}>
        <MoonIcon className={classNames(buttonClass)} height={iconSize} />
      </button>
    );
  }
}
