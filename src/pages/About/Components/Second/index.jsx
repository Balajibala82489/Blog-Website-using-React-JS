import { Grid, Box, Typography } from "@mui/material";
import thumbnail from "../../../../assets/thumb-03.png";
import styles from "./styles";

function Second() {
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
                  title="My ikigai"
                  alt="My ikigai"
                  sx={{ ...styles.img }}
                />
                <Box>
                  <Typography variant="h3" sx={{ ...styles.title }}>
                    My ikigai
                  </Typography>
                  <Typography variant="h6" sx={{ ...styles.description }}>
                    In <strong>Japanese</strong>, <strong>IKI</strong>, means
                    life, and <strong>KAI</strong>, means the realisation of
                    hope and expectations. <strong>IKIGAI</strong> is a concept
                    that combines what you love, what do you do for living, what
                    the world needs, and what you’re good at; it represents the{" "}
                    <strong>intersection</strong> of four elements in a person’s
                    life: vocation, profession, mission, passion. In my coat of
                    arms, ‘<strong>heart</strong>‘ represents{" "}
                    <strong>priest</strong> and{" "}
                    <strong>missionary of mercy</strong>, my{" "}
                    <strong>
                      <em>vocation</em>
                    </strong>
                    ; ‘a writing<strong> hand</strong>‘ symbolises{" "}
                    <strong>content writer </strong>and{" "}
                    <strong>translator</strong>, my{" "}
                    <strong>
                      <em>profession</em>
                    </strong>
                    ; ‘overseeing <strong>eye</strong>‘ stands for{" "}
                    <strong>inter-scriptural scholar</strong>, my{" "}
                    <strong>
                      <em>mission</em>
                    </strong>
                    ; and ‘talking <strong>mouth</strong>‘ depicts{" "}
                    <strong>soft skills trainer</strong>, my{" "}
                    <strong>
                      <em>passion</em>
                    </strong>
                    . The <strong>intersection</strong> is the{" "}
                    <strong>cross</strong> that illustrates{" "}
                    <strong>victory</strong> through pains. The ‘
                    <strong>sowing</strong> hand’ shows the{" "}
                    <strong>path of my life</strong>.
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

export default Second;
