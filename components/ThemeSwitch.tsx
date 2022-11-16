import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  const iconSize = 20;

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) return null;

  if (theme === "dark") {
    return (
      <button onClick={() => setTheme("light")}>
        <SunIcon height={iconSize} />
      </button>
    );
  } else {
    return (
      <button onClick={() => setTheme("dark")}>
        <MoonIcon height={iconSize} />
      </button>
    );
  }
}
