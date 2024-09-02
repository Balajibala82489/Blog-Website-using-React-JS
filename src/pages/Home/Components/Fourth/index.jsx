import { Grid, Box, Typography } from "@mui/material";
import styles from "./styles";

function Fourth() {
  return (
    <Box style={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h3" fontWeight="bold">
                “The Sower is more than just a parable; it’s a mirror of our
                life and growth.”
              </Typography>
              <Typography variant="h6" sx={{ ...styles.tag }}>
                Yesu Karunanidhi
              </Typography>
              <Typography variant="subtitle1">
                Priest. Missionary of Mercy. Content Writer. Translator.
              </Typography>
              <Typography variant="subtitle1">
                Inter-scriptural Scholar. Soft skills Trainer.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Fourth;
