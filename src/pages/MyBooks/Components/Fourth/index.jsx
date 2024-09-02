import { Grid, Box, Typography } from "@mui/material";
import thumbnail from "../../../../assets/banner-03.jpg";
import styles from "./styles";

function Fourth() {
  return (
    <Box style={{ ...styles.wrapper }}>
      <Grid container spacing={2} sx={{ ...styles.section }}>
        <Grid item xs={12} md={8}>
          <Box component="section">
            {/* <Box sx={{ ...styles.container }}> */}
            <Box sx={{ ...styles.center }}>
              <Typography variant="h5" fontWeight="regular">
                “My past no longer concerns me. It belongs to Divine mercy. My
                future does not yet concern me. It belongs to Divine providence.
                What concerns me and what challenges me is today, which belongs
                to God’s grace and to the devotion of my heart and my good
                will..”
              </Typography>
              <Typography variant="h5" component="code" sx={{ ...styles.tag }}>
                — Saint Francis de Sales
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} align="center" gap={20}>
          <Box
            component="img"
            src={thumbnail}
            title="Discover the path of the S.O.W.E.R."
            alt="Discover the path of the S.O.W.E.R."
            sx={{ ...styles.img }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Fourth;
