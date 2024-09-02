import { Grid, Box, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
import thumbnail from "../../../../assets/thumb-04.png";
import styles from "./styles";

function First() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box component="section" sx={{ ...styles.section }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h3" sx={{ ...styles.heading }}>
                Missionary of Mercy
              </Typography>
            </Box>
            <Box sx={{ ...styles.centerWrap }}>
              <Box sx={{ ...styles.containerWrap }}>
                <Box
                  component="img"
                  src={thumbnail}
                  title="Discover the path of the S.O.W.E.R."
                  alt="Discover the path of the S.O.W.E.R."
                  sx={{ ...styles.img }}
                />
                <Typography variant="h6" sx={{ ...styles.description }}>
                  Rev. Prof. Dr. Yesu Karunanidhi, a priest of the Archdiocese
                  of Madurai, was designated as a Missionary of Mercy on 10
                  February 2016 by Holy Father Pope Francis in the Extraordinary
                  Jubilee Year of Mercy. The Holy Father invites every
                  Missionary of Mercy “to be{" "}
                  <em>welcoming to all, witnesses</em> of fatherly tenderness
                  whatever the gravity of the sin involved, attentive in helping
                  penitents to reflect on the wrong they have done, clear in
                  presenting moral principles, <em>willing</em> to walk
                  patiently beside the faithful on their penitential journey,
                  far-sighted in discerning individual cases and generous in
                  dispensing God’s forgiveness (cf.{" "}
                  <em>Misericordia et Misera</em>, n. 10).
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default First;
