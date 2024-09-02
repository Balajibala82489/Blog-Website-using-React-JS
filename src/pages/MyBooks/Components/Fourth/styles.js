const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
  },
  container: {
    backgroundColor: (theme) => theme.palette.common.black,
    color: (theme) => theme.palette.common.white,
    py: (theme) => ({
      xs: theme.spacing(48),
      sm: theme.spacing(56),
      md: theme.spacing(96),
    }),
    px: (theme) => ({
      xs: theme.spacing(24),
      md: theme.spacing(32),
    }),
  },
  section: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: (theme) => theme.palette.common.black,
    color: (theme) => theme.palette.common.white,
    p: (theme) => ({
      xs: theme.spacing("8%"),
      sm: theme.spacing("8%"),
      md: theme.spacing("8%"),
    }),
  },
  img: {
    maxWidth: "100%",
    display: "flex",
    flex: "1 0 0%",
    height: "auto%",
    objectFit: "contain",
    boxSizing: "border-box",
    verticalAlign: "bottom",
  },
  center: {
    m: (theme) => theme.spacing("auto"),
    // maxWidth: 1200,
    textAlign: "left",
    margin: "auto",
    padding: "30px",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "center",
  },
  tag: {
    display: "flex",
    justifyContent: "start",
    fontStyle: "italic",
    mt: (theme) => ({
      xs: theme.spacing(24),
      md: theme.spacing(32),
    }),
  },
};

export default styles;
