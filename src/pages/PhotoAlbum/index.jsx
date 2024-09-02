import Breadcrumbs from "./Components/Breadcrumbs";
import First from "./Components/First";
import { Box } from "@mui/material";
import styles from "./styles";

const PhotoAlbum = () => {
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Breadcrumbs />
      <First />
    </Box>
  );
};

export default PhotoAlbum;
