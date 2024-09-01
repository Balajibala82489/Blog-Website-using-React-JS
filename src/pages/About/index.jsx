import Breadcrumbs from "./Components/Breadcrumbs";
import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import Fifth from "./Components/Fifth";
import Sixth from "./Components/Sixth";
import Seventh from "./Components/Seventh";
import { Box } from "@mui/material";
import styles from "./styles";

const About = () => {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Breadcrumbs />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
    </Box>
  );
};

export default About;
