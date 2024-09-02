import { Grid, Box, Stack, Typography } from "@mui/material";
import thumbnail from "../../../../assets/thumb-06.png";
import styles from "./styles";

function Fourth() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 6 }}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Stack direction="row" sx={{ ...styles.stack }}>
              <Box sx={{ ...styles.gridLeft }}>
                <Box
                  component="img"
                  src={thumbnail}
                  title="Discover the path of the S.O.W.E.R."
                  alt="Discover the path of the S.O.W.E.R."
                  sx={{ ...styles.img }}
                />
                <Box>
                  <em>
                    Figure 2 Decree of Confirmation as Missionary of Mercy (n.
                    MM/0126/C) dated 21 November 2016
                  </em>
                </Box>
              </Box>
              <Box sx={{ ...styles.gridRight }}>
                <Grid
                  container
                  spacing={{ xs: 24, md: 32 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid item xs={12}>
                    <Box sx={{ ...styles.gridItem }}>
                      <Typography
                        variant="subTitle1"
                        sx={{ ...styles.description }}
                      >
                        The <strong>best practices</strong> of Fr. Yesu
                        Karunanidhi as a Missionary of Mercy include: (i) Being
                        a model or icon of God’s mercy at the confessional by
                        removing scrupulosity from the hearts of the penitents.
                        (ii) Engaging a theological reflection with lay faithful
                        that it offers catharsis for our mission and new
                        evangelization. (iii) Initiating corporal works of
                        mercy. (iv) Creating mercy cells in the Dioceses and the
                        Shrines. (v) Visiting the families, hospitals, and homes
                        for the aged and the dying. (vi) Establishing vertical
                        networking with the bishops, and the horizontal
                        networking with our fellow-priests. (vii) Developing
                        resource materials, books, articles, videos, and
                        podcasts on mercy. (viii) Collaborating with other
                        churches and other faiths in recognizing God’s mercy.
                        And (ix) Assisting other missionary works of our Church
                        through Pontifical Mission Societies.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Fourth;
