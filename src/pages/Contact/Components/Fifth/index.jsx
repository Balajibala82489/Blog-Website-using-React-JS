import { Grid, Box, Typography, Stack } from "@mui/material";
import styles from "./styles";

function Fifth() {
  return (
    <Box style={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h3" sx={{ ...styles.heading }}>
                Upcoming Programs
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ ...styles.Stack }}
              >
                <Box sx={{ ...styles.item }}>
                  <Typography variant="subTitle1" component="p">
                    Jubilee 2025, ToT,
                  </Typography>
                  <Typography variant="subTitle1" component="p">
                    South Zone, 16-17
                  </Typography>
                  <Typography variant="subTitle1" component="p">
                    August 2024,
                  </Typography>
                  <Typography variant="subTitle1" component="p">
                    Bengaluru.
                  </Typography>
                </Box>
                <Box sx={{ ...styles.item }}>
                  <Typography variant="subTitle1" component="p">
                    Jubilee 2025, ToT,
                  </Typography>
                  <Typography variant="subTitle1" component="p">
                    North Zone, 19-20
                  </Typography>
                  <Typography variant="subTitle1" component="p">
                    August 2024,
                  </Typography>
                  <Typography variant="subTitle1" component="p">
                    Jalandhar.
                  </Typography>
                </Box>
                <Box sx={{ ...styles.item }}>
                  <Typography variant="subTitle1" component="p">
                    Jubilee 2025, ToT,
                  </Typography>
                  <Typography variant="subTitle1" component="p">
                    Northeast Zone, 22-23
                  </Typography>
                  <Typography variant="subTitle1" component="p">
                    August 2024, Kolkata.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Fifth;
