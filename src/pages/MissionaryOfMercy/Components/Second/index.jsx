import { Grid, Box, Typography } from "@mui/material";
import styles from "./styles";

function Second() {
  return (
    <Box style={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h4">
                “Evangelization takes place especially by the proclamation of
                divine mercy, in a variety of forms and expressions. In a
                particular way, the specific activity of the Missionaries of
                Mercy contributes to this end” (Pope Francis,{" "}
                <em>Praedicate Evangelium</em>. On the Roman Curia and Its
                Service to the Church in the World, Art. 59, § 2).
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Second;
