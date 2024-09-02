import { Grid, Box, Typography } from "@mui/material";
import styles from "./styles";

function Sixth() {
  return (
    <Box style={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h3" fontWeight="bold">
                My Curriculum Vitae
              </Typography>

              <Typography
                variant="subTitle1"
                component="a"
                href="https://yesukarunanidhi.in/wp-content/uploads/2023/10/yesu_karunanidhi_brief_profile.pdf"
                sx={{ ...styles.tag }}
                target="_blank"
              >
                yesu_karunanidhi_<strong>brief_profile</strong>
              </Typography>

              <Typography
                variant="subTitle1"
                component="a"
                href="https://yesukarunanidhi.in/wp-content/uploads/2023/10/yesu_karunanidhi_curriculum_vitae-3.pdf"
                target="_blank"
              >
                yesu_karunanidhi_<strong>curriculum_vitae</strong>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Sixth;
