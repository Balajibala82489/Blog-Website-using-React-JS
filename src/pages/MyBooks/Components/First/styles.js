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
  textWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    rowGap: "2rem",
  },
  img: {
    maxWidth: "100%",
    display: "flex",
    flex: "1 0 0%",
    height: "100%",
    objectFit: "cover",
    width: 615,
  },
  center: {
    m: (theme) => ({
      xs: theme.spacing(0),
      md: theme.spacing("auto"),
    }),
    my: (theme) => theme.spacing(0),
    maxWidth: 620,
    pt: (theme) => theme.spacing(60),
    pb: (theme) => theme.spacing(100),
  },
  centerWrap: {
    m: (theme) => theme.spacing("auto"),
    my: (theme) => theme.spacing(0),
    maxWidth: 1200,
    mb: (theme) => theme.spacing(64),
  },
  containerWrap: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    gap: {
      xs: 32,
      md: 64,
    },
    alignItems: "center",
  },
  heading: {
    fontWeight: (theme) => theme.typography.fontWeightSemiBold,
    color: (theme) => theme.palette.default.darkGreen,
  },
  description: {
    fontWeight: (theme) => theme.typography.fontWeightRegular,
    color: (theme) => theme.palette.common.white,
    lineHeight: (theme) => theme.spacing(27.2),
  },
};

export default styles;
