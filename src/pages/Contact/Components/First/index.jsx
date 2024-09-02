import { Grid, Box, Typography } from "@mui/material";
import thumbnail from "../../../../assets/thumb-12.png";
import Form from "./Components/Form";
import styles from "./styles";

function First() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box component="section" sx={{ ...styles.section }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h3" sx={{ ...styles.heading }}>
                Contact
              </Typography>
              <Typography variant="subTitlw1" sx={{ ...styles.subTitle }}>
                Connect to me for one-to-one mentoring, group animation,
                seminar, workshop, and retreat.
              </Typography>
            </Box>
            <Box sx={{ ...styles.centerWrap }}>
              <Box sx={{ ...styles.containerWrap }}>
                <Form />
                <Box
                  component="img"
                  src={thumbnail}
                  title="Contact"
                  alt="Contact"
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
