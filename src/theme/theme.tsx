// react
import { useContext } from "react";
// mui theme
import { createTheme, ThemeProvider } from "@mui/material/styles";
// context
import { AppContext } from "../context/context";
// types
import type { ChildrenProp } from "../@types/types";

export default function Theme({ children }: ChildrenProp) {
  const [mode] = useContext(AppContext);

  const theme = createTheme({
    palette: {
      mode,
      custom: {
        main: "teal",
        secondary: "rebeccapurple",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
