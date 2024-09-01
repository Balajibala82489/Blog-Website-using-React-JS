import { Grid, Box, Typography } from "@mui/material";
import thumbnail from "../../../../assets/thumb-10.jpg";
import styles from "./styles";

function Sixth() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box component="section" sx={{ ...styles.section }}>
            <Box sx={{ ...styles.centerWrap }}>
              <Box sx={{ ...styles.containerWrap }}>
                <Box>
                  <Typography variant="h3" sx={{ ...styles.title }}>
                    Where am I going?
                  </Typography>
                  <Typography variant="h6" sx={{ ...styles.description }}>
                    <strong>S.O.W.E.R.</strong> [<strong>S</strong>ent{" "}
                    <strong>O</strong>ut for <strong>W</strong>ord,{" "}
                    <strong>E</strong>mpathy, and <strong>R</strong>esilience]
                    is the path of my life now. ‘<strong>Word</strong>‘ is ‘Word
                    of God as revealed in the Holy Bible and other Sacred
                    Scriptures, and Words of Humans which we use to communicate,
                    convince, and converse; ‘<strong>Empathy</strong>‘ is ‘the
                    ability to understand and share the feelings, thoughts, and
                    experiences of another person. It involves stepping into
                    someone else’s shoes and seeing the world from their
                    perspective, recognising and acknowledging their emotions,
                    and responding with care and understanding.’ ‘
                    <strong>Resilience</strong>‘ ‘encompasses qualities such as
                    flexibility, optimism, problem-solving skills, social
                    support, and a sense of purpose or meaning in life.’ My{" "}
                    <em>ikigai</em> as Priest, Missionary of Mercy, Content
                    Writer, Translator, Inter-scriptural Scholar, and Soft
                    skills Trainer will have these as my point of
                    departure-course-arrival. ‘Being with him’ is complemented
                    by ‘being sent out.’
                  </Typography>
                </Box>
                <Box
                  component="img"
                  src={thumbnail}
                  title="Where am I going?"
                  alt="Where am I going?"
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

export default Sixth;
