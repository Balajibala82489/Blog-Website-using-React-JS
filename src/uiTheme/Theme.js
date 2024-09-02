import { createTheme } from "@mui/material";
import Breakpoints from "./Theme/Breakpoints";
import Colors from "./Theme/Colors";
import Fonts from "./Theme/Fonts";
import Shape from "./Theme/Shape";
import Shadow from "./Theme/Shadow";
import Transistions from "./Theme/Transistions";
import Typography from "./Theme/Typography";
import ZIndex from "./Theme/ZIndex";

// create a theme instance
const Theme = createTheme({
  breakpoints: Breakpoints,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  direction: "ltr",
  fontSizes: Fonts,
  palette: Colors,
  shape: Shape,
  spacing: 1,
  typography: Typography,
  shadow: Shadow,
  transistions: Transistions,
  zIndex: ZIndex,
});

export default Theme;
