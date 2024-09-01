import { Grid, Box, Typography } from "@mui/material";
import thumbnail from "../../../../assets/thumb-09.jpeg";
import styles from "./styles";

function Third() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box component="section" sx={{ ...styles.section }}>
            <Box sx={{ ...styles.centerWrap }}>
              <Box sx={{ ...styles.containerWrap }}>
                <Box>
                  <Typography variant="h3" sx={{ ...styles.title }}>
                    Soils of my life
                  </Typography>
                  <Typography variant="h6" sx={{ ...styles.description }}>
                    The <strong>Parable of the Sower </strong>in Luke 7:5-8
                    describes <strong>four types</strong> of soil where the{" "}
                    <strong>generous farmer</strong> sows his seeds: along{" "}
                    <strong>the</strong> <strong>path</strong>, on{" "}
                    <strong>rocky ground</strong>, amidst{" "}
                    <strong>thorns</strong>, and in <strong>good soil</strong>.
                    These soils have been{" "}
                    <strong>different stages of my life</strong>. Often I have
                    allowed seeds <em>to be trampled</em> and{" "}
                    <em>be eaten up by birds</em>; my various contributions have
                    been like seeds growing on rocky path –{" "}
                    <em>came up but had no moisture</em>; too often I let the
                    distractions of my life, lack of focus, and deviations{" "}
                    <em>choked my plants</em>; <strong>NOW</strong> I am
                    resolved to be good soil, to make space for the seeds{" "}
                    <em>to grow hundredfold</em>. After all, the scope of the
                    seeds is to <strong>be back to him</strong>,{" "}
                    <strong>the Sower</strong>.
                  </Typography>
                </Box>
                <Box
                  component="img"
                  src={thumbnail}
                  title="Soils of my life"
                  alt="Soils of my life"
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

export default Third;
