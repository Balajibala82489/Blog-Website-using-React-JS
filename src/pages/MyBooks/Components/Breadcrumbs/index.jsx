import { Breadcrumbs as MyBreadCrumbs } from "@mui/material";
import { Grid, Box, Typography, Link } from "@mui/material";
import styles from "./styles";

function Breadcrumbs() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box component="section" sx={{ ...styles.section }}>
            <Box sx={{ ...styles.container }}>
              <MyBreadCrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Typography color="text.primary">Books</Typography>
              </MyBreadCrumbs>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Breadcrumbs;
