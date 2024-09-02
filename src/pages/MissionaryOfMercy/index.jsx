import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import Fifth from "./Components/Fifth";
import Sixth from "./Components/Sixth";
import { Box } from "@mui/material";
import styles from "./styles";

const MissionaryOfMercy = () => {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
    </Box>
  );
};

export default MissionaryOfMercy;
