const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
  },
  section: {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    backgroundColor: (theme) => theme.palette.default.white,
    px: (theme) => theme.spacing(40),
    gap: {
      xs: 24,
      md: 32,
    },
  },
  img: {
    maxWidth: "100%",
    display: "flex",
    flex: "1 0 0%",
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  center: {
    m: (theme) => ({
      xs: theme.spacing(0),
      md: theme.spacing("auto"),
    }),
    width: "100%",
    my: (theme) => theme.spacing(0),
    maxWidth: 1200,
    pt: (theme) => theme.spacing(60),
    pb: (theme) => theme.spacing(20),
    "& img": {
      // maxWidth: "100%",
      // objectFit: "cover",
      // height: "100%",
      // maxWidth: "100%",
      // height: "auto",
      // verticalAlign: "middle",
      // display: "inline-block",
    },
  },
  centerWrap: {
    m: (theme) => theme.spacing("auto"),
    my: (theme) => theme.spacing(0),
    maxWidth: 1200,
    mb: (theme) => theme.spacing(64),
  },
  containerWrap: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: {
      xs: "row",
      md: "row",
    },
    padding: "0 4px",
    gap: {
      xs: 32,
      md: 64,
    },
    alignItems: "center",
  },
  heading: {
    fontWeight: (theme) => theme.typography.fontWeightSemiBold,
    color: (theme) => theme.palette.default.darkGreen,
    textAlign: "center",
  },
  description: {
    fontWeight: (theme) => theme.typography.fontWeightRegular,
    color: (theme) => theme.palette.default.darkGreen,
    lineHeight: (theme) => theme.spacing(27.2),
  },
};

export default styles;
