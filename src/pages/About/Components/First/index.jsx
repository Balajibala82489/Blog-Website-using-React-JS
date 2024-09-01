import { Grid, Box, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
import thumbnail from "../../../../assets/thumb-07.png";
import styles from "./styles";

function First() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box component="section" sx={{ ...styles.section }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h3" sx={{ ...styles.heading }}>
                About me
              </Typography>
            </Box>
            <Box sx={{ ...styles.centerWrap }}>
              <Box sx={{ ...styles.containerWrap }}>
                <Box>
                  <Typography variant="h3" sx={{ ...styles.title }}>
                    Cum illo
                  </Typography>
                  <Typography variant="h6" sx={{ ...styles.description }}>
                    <em>
                      <strong>Cum illo </strong>
                    </em>
                    (Latin for ‘<strong>with him</strong>‘), an expression
                    inspired from <strong>Mark 3:14</strong>, has been the
                    vision of my life ever since my ordination to priesthood on
                    19 April 2009 and incardination to the{" "}
                    <strong>Archdiocese of Madurai</strong>, Tamil Nadu, India.
                    The <strong>essence of discipleship</strong> according to
                    the Evangelist Mark consists in ‘
                    <strong>being with Jesus</strong>
                    .’ I, as a disciple of Jesus <strong>rejoice</strong> in
                    being with him. Through this I <strong>love God</strong>, am{" "}
                    <strong>rooted</strong> in him, and open myself{" "}
                    <strong>to love fellow human persons</strong> and{" "}
                    <strong>Nature</strong>.
                  </Typography>
                </Box>
                <Box
                  component="img"
                  src={thumbnail}
                  title="Cum illo"
                  alt="Cum illo"
                  sx={{ ...styles.img }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default First;
