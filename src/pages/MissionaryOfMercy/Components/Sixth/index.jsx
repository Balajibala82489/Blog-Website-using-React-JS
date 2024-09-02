import { Grid, Box } from "@mui/material";
import { useState } from "react";
import Gallery from "./Components/Gallery";
import { data } from "./data";
import LightBox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import styles from "./styles";

function Sixth() {
  const [index, setIndex] = useState(-1);
  return (
    <Box style={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Box sx={{ ...styles.center }}>
              <Gallery
                data={data}
                onClick={(currentIndex) => setIndex(currentIndex)}
              />
              <LightBox
                plugins={[Captions, Download, Fullscreen, Counter]}
                captions={{
                  showToggle: true,
                  descriptionTextAlign: "center",
                }}
                counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                index={index}
                open={index >= 0}
                slides={data}
                close={() => setIndex(-1)}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Sixth;
