// context
import ContextWrapper from "./context/context";
// mui
import { SwitchTheme } from "./components";
// mui styles
import { CssBaseline } from "@mui/material";
import Theme from "./theme/theme";

export default function App() {
  return (
    <ContextWrapper>
      <Theme>
        <CssBaseline />
        <SwitchTheme />
      </Theme>
    </ContextWrapper>
  );
}
