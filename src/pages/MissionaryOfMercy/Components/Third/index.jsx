import { Grid, Box, Stack, Typography } from "@mui/material";
import thumbnail from "../../../../assets/thumb-05.png";
import styles from "./styles";

function Third() {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 6 }}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Stack direction="row" sx={{ ...styles.stack }}>
              <Box sx={{ ...styles.gridLeft }}>
                <Grid
                  container
                  spacing={{ xs: 24, md: 32 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid item xs={12}>
                    <Box sx={{ ...styles.gridItem }}>
                      <Typography
                        variant="subTitle1"
                        sx={{ ...styles.description }}
                      >
                        Fr. Yesu Karunanidhi narrates{" "}
                        <strong>six dimensions</strong> of his experience as a
                        Missionary of Mercy:{" "}
                        <strong>
                          (i) Liturgical / Cultic / Sacramental experience
                        </strong>{" "}
                        [Divine Mercy Sunday celebrations; Administering
                        sacrament of reconciliation in the parishes,
                        substations, and convents, and at retreats].{" "}
                        <strong>
                          (ii) Para-liturgical, pastoral-creative experience
                        </strong>{" "}
                        [preaching on mercy; praying for people’s needs;
                        door-to-door confessions and distribution of communion;
                        livestreaming of Eucharistic adoration; call-your-God
                        with prayer texts and invocations through social
                        media].&nbsp;
                        <strong>(iii) Community-building experience</strong> [A
                        couple who were not in talking terms for 46 years
                        reconciled with each other when Fr. Yesu Karunanidhi
                        talked to them personally on the importance of mercy;
                        Mercy-Works; Corporal works of mercy to the migrants,
                        the elderly, the sick, the children, and the frontline
                        healthcare workers].{" "}
                        <strong>
                          (iv) Intellectual / self-growth experience
                        </strong>{" "}
                        [Translation of Saint Augustine’s <em>Confessions</em>,
                        Story of God’s mercy, in Tamil; Reaching out to all the
                        clergy].{" "}
                        <strong>
                          (v) Media and other ministerial experience
                        </strong>{" "}
                        [Bible study, and other formative programs through
                        YouTube, and podcast]. And{" "}
                        <strong>
                          (vi) Mission and new evangelization experience
                        </strong>{" "}
                        [The wounded-healer experience; being an icon of hope
                        and God’s mercy to the people suffering from fear, loss
                        of faith, anxiety, irritability, nervousness, and
                        annoyance; Being present to the people who have
                        near-death experience].
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ ...styles.gridRight }}>
                <Box
                  component="img"
                  src={thumbnail}
                  title="Discover the path of the S.O.W.E.R."
                  alt="Discover the path of the S.O.W.E.R."
                  sx={{ ...styles.img }}
                />
                <Box>
                  <em>
                    Figure 1 Decree of Appointment as Missionary of Mercy [n.
                    IM/MM/0126] dated 10 February 2016.
                  </em>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Third;
