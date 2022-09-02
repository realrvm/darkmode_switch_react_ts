// react
import { createContext } from "react";
// hooks
import { useToggleColorMode } from "../hooks/use-toggle-color-mode";
// types
import type { ChildrenProp } from "../@types/types";

export const AppContext = createContext<
  readonly ["dark" | "light", () => void] | null
>(null);

export default function ContextWrapper({ children }: ChildrenProp) {
  return (
    <AppContext.Provider value={useToggleColorMode()}>
      {children}
    </AppContext.Provider>
  );
}
