import { Grid, Box, Stack, Typography } from "@mui/material";
/// import { Link } from "react-router-dom";
import thumbnail from "../../../../assets/thumb-03.png";
import icon1 from "../../../../assets/icon-01.png";
import icon2 from "../../../../assets/icon-02.png";
import icon3 from "../../../../assets/icon-03.png";
import icon4 from "../../../../assets/icon-04.png";
import styles from "./styles";

function Third() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 6 }}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Stack direction="row" sx={{ ...styles.stack }}>
              <Box
                component="img"
                src={thumbnail}
                title="Discover the path of the S.O.W.E.R."
                alt="Discover the path of the S.O.W.E.R."
                sx={{ ...styles.img }}
              />
              <Box sx={{ ...styles.grid }}>
                <Grid
                  container
                  spacing={{ xs: 24, md: 32 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid item xs={6} gap={100}>
                    <Box sx={{ ...styles.gridItem }}>
                      <Stack direction="row" spacing={8} alignItems="center">
                        <Box
                          component="img"
                          src={icon1}
                          title="Empathy"
                          alt="Empathy"
                          sx={{ ...styles.icon }}
                        />
                        <Typography variant="h5" sx={{ ...styles.heading }}>
                          Empathy
                        </Typography>
                      </Stack>
                      <Typography
                        variant="body2"
                        sx={{ ...styles.description }}
                      >
                        Extend a hand to those in need, create connections, and
                        foster positive change in Catholic communities and
                        beyond.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ ...styles.gridItem }}>
                      <Stack direction="row" spacing={8} alignItems="center">
                        <Box
                          component="img"
                          src={icon2}
                          title="Word Proclaimed"
                          alt="Word Proclaimed"
                          sx={{ ...styles.icon }}
                        />
                        <Typography variant="h5" sx={{ ...styles.heading }}>
                          Word Proclaimed
                        </Typography>
                      </Stack>
                      <Typography
                        variant="body2"
                        sx={{ ...styles.description }}
                      >
                        Enrich others with reflections on the Biblical texts,
                        lectionary readings, Catholic faith, and spirituality.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ ...styles.gridItem }}>
                      <Stack direction="row" spacing={8} alignItems="center">
                        <Box
                          component="img"
                          src={icon3}
                          title="Words Written"
                          alt="Words Written"
                          sx={{ ...styles.icon }}
                        />
                        <Typography variant="h5" sx={{ ...styles.heading }}>
                          Words Written
                        </Typography>
                      </Stack>
                      <Typography
                        variant="body2"
                        sx={{ ...styles.description }}
                      >
                        Embark on a journey of discovery, understanding, and
                        growth on the Teachings of the Catholic Church, Sacred
                        Scriptures, and Pious Literature.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ ...styles.gridItem }}>
                      <Stack direction="row" spacing={8} alignItems="center">
                        <Box
                          component="img"
                          src={icon4}
                          title="Resilience"
                          alt="Resilience"
                          sx={{ ...styles.icon }}
                        />
                        <Typography variant="h5" sx={{ ...styles.heading }}>
                          Resilience
                        </Typography>
                      </Stack>
                      <Typography
                        variant="body2"
                        sx={{ ...styles.description }}
                      >
                        Evolve a renewed, inclusive, and unitive understanding
                        of self, world, Nature, and God, with a deep faith
                        vision.
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

export default Third;
