import { Grid, Box, Typography } from "@mui/material";
import Gallery from "./Components/Gallery";
import { data } from "./data";
import styles from "./styles";

function First() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box component="section" sx={{ ...styles.section }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h3" sx={{ ...styles.heading }}>
                Photo Album
              </Typography>
            </Box>
            <Box sx={{ ...styles.center }}>
              <Gallery data={data} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default First;
