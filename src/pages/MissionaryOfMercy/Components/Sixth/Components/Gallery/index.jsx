import PropTypes from "prop-types";
import { Box } from "@mui/material";
import styles from "./styles";

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};

const Gallery = (props) => {
  const { data, onClick } = props;
  const handleClickImage = (index) => {
    onClick(index);
  };
  return (
    <Box sx={{ ...styles.imageContainer }}>
      {data.map((slide, index) => (
        <Box
          sx={{ ...styles.image }}
          key={index}
          onClick={() => handleClickImage(index)}
          data={data}
        >
          <Box
            component="img"
            src={slide.src}
            alt={slide.description}
            sx={{ ...styles.img }}
          />
        </Box>
      ))}
    </Box>
  );
};
Gallery.propTypes = propTypes;
export default Gallery;
