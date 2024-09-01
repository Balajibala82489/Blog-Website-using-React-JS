import { Grid, Box, Typography } from "@mui/material";
import thumbnail from "../../../../assets/thumb-09.jpeg";
import styles from "./styles";

function Fifth() {
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
                  title="Where have I come from?"
                  alt="Where have I come from?"
                  sx={{ ...styles.img }}
                />
                <Box>
                  <Typography variant="h3" sx={{ ...styles.title }}>
                    Where have I come from?
                  </Typography>
                  <Typography variant="h6">
                    <strong>
                      <em>Academic Journey</em>
                    </strong>
                  </Typography>
                  <Typography
                    variant="subTitle1"
                    sx={{ ...styles.description }}
                  >
                    <Box component="ol">
                      <Box component="li">
                        <strong>Diploma</strong> in Safeguarding Minors,
                        Pontifical Gregorian University [2022-23];
                      </Box>
                      <Box component="li">
                        <strong>Doctorate</strong> in Theology (Ph.D.),
                        Jnana-Deepa, Pune [2015-17];
                      </Box>
                      <Box component="li">
                        <strong>Licentiate</strong> in Sacred Scripture (LSS),
                        Pontifical Biblical Institute, Rome [2012-15];
                      </Box>
                      <Box component="li">
                        <strong>PG Diploma</strong> in Journalism, Bharathidasan
                        University [2019-20];
                      </Box>
                      <Box component="li">
                        <strong>Master</strong> in Business Administration,
                        Madurai Kamaraj University [2009-11].
                      </Box>
                    </Box>
                  </Typography>
                  <Typography variant="h6">
                    <strong>
                      <em>Pastoral Timeline</em>
                    </strong>
                  </Typography>
                  <Typography
                    variant="subTitle1"
                    sx={{ ...styles.description }}
                  >
                    <Box component="ol">
                      <Box component="li">
                        <strong>Secretary</strong>, CCBI Commission for Bible
                        [2021-till date];
                      </Box>
                      <Box component="li">
                        <strong>Facilitator-cum-Professor</strong>, Saint Paul’s
                        Seminary [2018-21];
                      </Box>
                      <Box component="li">
                        <strong>Secretary to the Archbishop</strong>,
                        Archdiocese of Madurai [2017-18];
                      </Box>
                      <Box component="li">
                        <strong>Archivist &amp; Librarian</strong>, Archdiocese
                        of Madurai [2016-17];
                      </Box>
                      <Box component="li">
                        <strong>Associate Pastor</strong>, Parrocchia di San
                        Giuda Taddeo, Rome [2012-16];
                      </Box>
                      <Box component="li">
                        <strong>Associate Pastor</strong>, Theni [2011-12];
                      </Box>
                      <Box component="li">
                        <strong>Associate Pastor</strong>, Gnanaolivupuram
                        [2010-11];
                      </Box>
                      <Box component="li">
                        <strong>Parochial Administrator</strong>, New Ellis
                        Nagar [2009-10].
                      </Box>
                    </Box>
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

export default Fifth;
