import { Grid, Box, Typography } from "@mui/material";
import styles from "./styles";

function Fourth() {
  return (
    <Box style={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h4">
                “நீங்கள் செய்கின்ற அனைத்து வேலைகளையும் மனிதருக்காக அல்ல,
              </Typography>
              <Typography variant="h4">
                ஆண்டவருக்காகவே செய்கிறீர்கள் என உணர்ந்து உளமாரச் செய்யுங்கள்.”
              </Typography>
              <Typography variant="h5" component="code" sx={{ ...styles.tag }}>
                கொலோசையர் 3:23
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Fourth;
