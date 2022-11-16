import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) return null;

  if (theme === "dark") {
    return (
      <button onClick={() => setTheme("light")}>
        <SunIcon width={24} />
      </button>
    );
  } else {
    return (
      <button onClick={() => setTheme("dark")}>
        <MoonIcon width={24} />
      </button>
    );
  }
}
