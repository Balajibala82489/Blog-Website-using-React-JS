import { Grid, Box, Typography, Button } from "@mui/material";
import thumbnail from "../../../../assets/thumb-13.png";
import styles from "./styles";

function Second() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box component="section" sx={{ ...styles.section }}>
            <Box sx={{ ...styles.centerWrap }}>
              <Box sx={{ ...styles.containerWrap }}>
                <Box sx={{ ...styles.textWrap }}>
                  <Typography variant="h2" sx={{ ...styles.heading }}>
                    My Book
                  </Typography>
                  <Typography variant="h6" sx={{ ...styles.description }}>
                    A Christian World Bestseller. This book will take you to a
                    mystical experience of reading Sacred Scriptures
                    intertextually applying the method of comparative analysis.
                  </Typography>
                </Box>
                <Box
                  component="img"
                  src={thumbnail}
                  title="Discover the path of the S.O.W.E.R."
                  alt="Discover the path of the S.O.W.E.R."
                  sx={{ ...styles.img }}
                />
              </Box>
              <Box sx={{ ...styles.newWrap }}>
                <Button
                  href="https://yesukarunanidhi.in/payment/"
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="contained"
                  size="large"
                >
                  To avail my books Click Here!
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Second;
