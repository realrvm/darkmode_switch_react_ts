// hooks
import { useState, useCallback } from "react";

export function useToggleColorMode() {
  const [mode, setMode] = useState<"dark" | "light">("light");

  const changeColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  return [mode, changeColorMode] as const;
}
