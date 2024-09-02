import { Grid, Box, Typography } from "@mui/material";
import styles from "./styles";

function Second() {
  return (
    <Box style={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h3" fontWeight="bold">
                “In the morning sow your seed, and at evening withhold not your
                hand.”
              </Typography>
              <Typography variant="h5" component="code" sx={{ ...styles.tag }}>
                Ecclesiastes 11:6
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Second;
