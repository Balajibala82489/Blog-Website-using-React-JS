import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import Fifth from "./Components/Fifth";
import { Box } from "@mui/material";
import styles from "./styles";

const Home = () => {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
    </Box>
  );
};

export default Home;
