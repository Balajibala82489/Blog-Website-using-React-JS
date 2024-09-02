import { Grid, Box, Typography } from "@mui/material";
import styles from "./styles";

function First() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box component="section" sx={{ ...styles.section }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h3" sx={{ ...styles.heading }}>
                Books I’ve written…
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default First;
