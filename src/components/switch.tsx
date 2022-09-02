// hooks
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
// context
import { AppContext } from "../context/context";
// mui
import { Container, Stack, Switch, Typography } from "@mui/material";

export default function SwitchTheme() {
  const theme = useTheme();
  const [, changeColorMode] = useContext(AppContext);

  const handleDarkmodeSwitch = () => {
    changeColorMode();
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 2 }}>
      <Stack spacing={1} direction="row" alignItems="center">
        <Typography variant="h6" sx={{ color: theme.palette.custom.main }}>
          Darkmode Off
        </Typography>
        <Switch onChange={handleDarkmodeSwitch} />
        <Typography variant="h6" sx={{ color: theme.palette.custom.secondary }}>
          Darkmode On
        </Typography>
      </Stack>
    </Container>
  );
}
