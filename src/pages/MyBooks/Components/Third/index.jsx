import { Grid, Box, Typography } from "@mui/material";
import { data } from "./data";
import Gallery from "./Components/Gallery";
import styles from "./styles";

function Third() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box component="section" sx={{ ...styles.section }}>
            <Box sx={{ ...styles.center }}>
              <Typography variant="h3" sx={{ ...styles.heading }}>
                More Books from My Pen
              </Typography>
            </Box>
            <Box sx={{ ...styles.centerWrap }}>
              <Gallery data={data} />
              {/* {data.map((slide, index) => (
                <Box
                  sx={{ ...(styles.containerWrap + index) }}
                  key={index}
                  data={data}
                >
                  <Box
                    component="img"
                    src={slide.src}
                    alt={slide.description}
                    sx={{ ...styles.img }}
                  />
                </Box>
              ))} */}
              {/* <Box sx={{ ...styles.containerWrap }}>
                <Box
                  component="img"
                  src={thumbnail}
                  title="Discover the path of the S.O.W.E.R."
                  alt="Discover the path of the S.O.W.E.R."
                  sx={{ ...styles.img }}
                />
                <Typography variant="h6" sx={{ ...styles.description }}>
                  [2023] Ecclesiastes. Christian Ecumenical Commentary Series in
                  Tamil, 11 (J. Susaimanickam, ed., Tiruchirappalli: Arulvakku
                  Mandram).
                </Typography>
              </Box>
              <Box sx={{ ...styles.containerWrap }}>
                <Box
                  component="img"
                  src={thumbnail}
                  title="Discover the path of the S.O.W.E.R."
                  alt="Discover the path of the S.O.W.E.R."
                  sx={{ ...styles.img }}
                />
                <Typography variant="h6" sx={{ ...styles.description }}>
                  [2023] Ecclesiastes. Christian Ecumenical Commentary Series in
                  Tamil, 11 (J. Susaimanickam, ed., Tiruchirappalli: Arulvakku
                  Mandram).
                </Typography>
              </Box>
              <Box sx={{ ...styles.containerWrap }}>
                <Box
                  component="img"
                  src={thumbnail}
                  title="Discover the path of the S.O.W.E.R."
                  alt="Discover the path of the S.O.W.E.R."
                  sx={{ ...styles.img }}
                />
                <Typography variant="h6" sx={{ ...styles.description }}>
                  [2023] Ecclesiastes. Christian Ecumenical Commentary Series in
                  Tamil, 11 (J. Susaimanickam, ed., Tiruchirappalli: Arulvakku
                  Mandram).
                </Typography>
              </Box>
              <Box sx={{ ...styles.containerWrap }}>
                <Box
                  component="img"
                  src={thumbnail}
                  title="Discover the path of the S.O.W.E.R."
                  alt="Discover the path of the S.O.W.E.R."
                  sx={{ ...styles.img }}
                />
                <Typography variant="h6" sx={{ ...styles.description }}>
                  [2023] Ecclesiastes. Christian Ecumenical Commentary Series in
                  Tamil, 11 (J. Susaimanickam, ed., Tiruchirappalli: Arulvakku
                  Mandram).
                </Typography>
              </Box>
              <Box sx={{ ...styles.containerWrap }}>
                <Box
                  component="img"
                  src={thumbnail}
                  title="Discover the path of the S.O.W.E.R."
                  alt="Discover the path of the S.O.W.E.R."
                  sx={{ ...styles.img }}
                />
                <Typography variant="h6" sx={{ ...styles.description }}>
                  [2023] Ecclesiastes. Christian Ecumenical Commentary Series in
                  Tamil, 11 (J. Susaimanickam, ed., Tiruchirappalli: Arulvakku
                  Mandram).
                </Typography>
              </Box> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Third;
