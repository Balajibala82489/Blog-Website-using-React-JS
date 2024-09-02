import { Grid, Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import thumbnail from "../../../../assets/thumb-02.png";
import styles from "./styles";

function First() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={thumbnail}
            title="Discover the path of the S.O.W.E.R."
            alt="Discover the path of the S.O.W.E.R."
            sx={{ ...styles.img }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="section" sx={{ ...styles.section }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h3" sx={{ ...styles.heading }}>
                Discover the path of the S.O.W.E.R.
              </Typography>
              <Typography variant="body1" sx={{ ...styles.description }}>
                I believe that life is a continuous act of sowing and reaping.
                The choices we make, the knowledge we acquire, and the love we
                share all play a vital role in the harvest we reap.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 24, sm: 32, md: 32 }}
              >
                <Button variant="contained" sx={{ ...styles.anchor }}>
                  <Link to="/home/about">Profile</Link>
                </Button>
                <Button variant="contained" sx={{ ...styles.anchor }}>
                  <Link to="/home/photo_album">Photos</Link>
                </Button>
                <Button variant="contained" sx={{ ...styles.anchor }}>
                  <Link to="/home/my_books">Books</Link>
                </Button>
                {/* <Button variant="contained" sx={{ ...styles.anchor }}>
                  <Link to="/home/user/create">Blog</Link>
                </Button> */}
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default First;
