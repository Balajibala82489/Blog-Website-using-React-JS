const styles = {
  imageContainer: {
    maxWidth: "100%",
    margin: "2rem auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(15rem,1fr))",
    gap: "1rem",
  },
  image: {
    width: "100%",
    height: "20rem",
    cursor: "pointer",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: (theme) => theme.spacing(8),
  },
};

export default styles;
