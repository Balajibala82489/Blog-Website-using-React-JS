const styles = {
  imageContainer: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
    },
    gridTemplateRows: "auto",
    gridAutoFlow: "dense",
    gridGap: "1rem",
  },

  item1: {
    gridColumn: {
      xs: "1/2",
      md: "1/3",
    },
  },
  item2: {
    gridColumn: {
      md: "3/4",
    },
  },
  item3: {
    gridColumn: { md: "1/2" },
  },
  item4: {
    gridColumn: { md: "2/4" },
  },
  item5: {
    gridColumn: { md: "1/2" },
  },
  item6: {
    gridColumn: { md: "2/3" },
  },
  item7: {
    gridColumn: { md: "3/4" },
  },
  item8: {
    gridColumn: { md: "1/3" },
  },
  item9: {
    gridColumn: { md: "3/4" },
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    pointerEvents: "none",
  },
  wide: {
    gridColumn: "span 2",
  },
  tall: {
    gridRow: "span 2",
  },
  big: {
    gridColumn: "span 2",
    gridRow: "span 2",
  },
};

export default styles;
