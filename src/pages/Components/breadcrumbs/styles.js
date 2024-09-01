const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
    flexDirection: "column",
  },
  section: {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    px: (theme) => theme.spacing(40),
    gap: {
      xs: 24,
      md: 32,
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "start",
    flexBasis: "100%",
    textAlign: "left",
    m: (theme) => theme.spacing("auto"),
    maxWidth: (theme) => ({
      md: theme.spacing(1200),
    }),
    width: 1024,
    gap: (theme) => theme.spacing(32),
  },
};

export default styles;
