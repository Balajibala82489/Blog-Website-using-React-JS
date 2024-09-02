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
};
const Gallery = (props) => {
  const { data } = props;
  return (
    <>
      {console.log(data)}
      <Box sx={{ ...styles.imageContainer }}>
        {data.map((slide, index) => (
          <Box sx={{ ...(styles.item1 + index) }} key={index} data={data}>
            <Box
              component="img"
              src={slide.src}
              alt={slide.description}
              sx={{ ...styles.img }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};
Gallery.propTypes = propTypes;
export default Gallery;
