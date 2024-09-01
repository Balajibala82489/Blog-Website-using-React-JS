import { Grid, Box, Typography } from "@mui/material";
import styles from "./styles";

function Fourth() {
  return (
    <Box style={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h4" sx={{ ...styles.tag }}>
                My Core Values
              </Typography>
              <Typography variant="h4" sx={{ ...styles.title }}>
                Serenity. Simplicity. Sincerity. Stewardship. Smartness. Smile.
                Success.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Fourth;
