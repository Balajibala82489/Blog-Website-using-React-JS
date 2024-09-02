import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import styles from "./styles";

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
const Gallery = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((slide, index) => (
        <Box key={index} data={data} mb={30}>
          <Box
            component="img"
            src={slide.src}
            title={slide.description}
            alt={slide.description}
            sx={{ ...styles.img }}
          />
          <Typography variant="subtitle1" sx={{ ...styles.description }}>
            {slide.description}
          </Typography>
        </Box>
      ))}
    </>
  );
};
Gallery.propTypes = propTypes;
export default Gallery;
