import { Grid, Box, Typography } from "@mui/material";
import styles from "./styles";

function Fifth() {
  return (
    <Box style={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h4">
                Missionaries of Mercy have the authority, granted by the Holy
                Father, to pardon these sins reserved to the Holy See: (i)
                Profaning the Eucharistic species by taking them away or keeping
                them for a sacrilegious purpose; (ii) Use of physical force
                against the Roman Pontiff; (iii) Absolution of an accomplice in
                a sin against the Sixth Commandment of the Decalogue; (iv) A
                direct violation against the sacramental seal by a confessor;
                and (v) The recording by means of a technical device of what the
                priest or the penitent says in a Sacramental Confession (whether
                real or simulated), or the divulgation of such a recording
                through social communication.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Fifth;
