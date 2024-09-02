import { Grid, Box, Typography } from "@mui/material";
import Form from "./Components/Form";
import styles from "./styles";

function Third() {
  return (
    <Box style={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h3" sx={{ ...styles.heading }}>
                Pray with the Sower
              </Typography>
              <Box sx={{ ...styles.description }}>
                <Typography variant="subTitle1">
                  Post your prayer intentions. I shall intercede for you at my
                  personal prayer,
                  <Box component="br" />
                  Eucharistic adoration, and Holy Rosary.
                </Typography>
              </Box>
              <Form />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Third;
