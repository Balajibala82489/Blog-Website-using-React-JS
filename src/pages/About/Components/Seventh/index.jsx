import { Grid, Box, Typography } from "@mui/material";
import thumbnail from "../../../../assets/thumb-11.jpg";
import styles from "./styles";

function Seventh() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box component="section" sx={{ ...styles.section }}>
            <Box sx={{ ...styles.centerWrap }}>
              <Box sx={{ ...styles.containerWrap }}>
                <Box
                  component="img"
                  src={thumbnail}
                  title="Baby steps"
                  alt="Baby steps"
                  sx={{ ...styles.img }}
                />
                <Box>
                  <Typography variant="h3" sx={{ ...styles.title }}>
                    Baby steps
                  </Typography>

                  <Typography
                    variant="subTitle1"
                    sx={{ ...styles.description }}
                  >
                    Born of a <strong>Śaivite Father</strong>, Mr.{" "}
                    <strong>Karunanidhi Thangavel </strong>and a
                    <strong> Catholic Mother</strong>, Mrs.{" "}
                    <strong>Maria Selvam Karunanidhi</strong>, on 6 December
                    1981 (as per Government Records 29 May 1981), at{" "}
                    <strong>South Nathampatty</strong>, a village of the Parish
                    of Our Lady of Mary Help of Christians, Rajapalayam, in the
                    civil district of Virudhunagar, Tamil Nadu, India, I{" "}
                    <strong>speak</strong> and <strong>write</strong> Tamil,
                    English, Italian, Spanish, and have
                    <strong> comprehension skill</strong> in Ecclesiastical
                    Latin, Biblical Hebrew, and New Testament Greek.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Seventh;
