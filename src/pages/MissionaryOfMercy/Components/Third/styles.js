const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
  },
  container: {
    px: (theme) => ({
      xs: theme.spacing(24),
      md: theme.spacing(32),
    }),
    py: (theme) => ({
      xs: theme.spacing(32),
      sm: theme.spacing(36),
      md: theme.spacing(64),
    }),
  },
  stack: {
    maxWidth: (theme) => theme.spacing(1200),
    m: (theme) => theme.spacing("auto"),
    columnGap: (theme) => ({
      xs: theme.spacing(32),
      sm: theme.spacing(36),
      md: theme.spacing(96),
    }),
    rowGap: (theme) => ({
      xs: theme.spacing(32),
      sm: theme.spacing(36),
      md: theme.spacing(96),
    }),
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
    },
    alignItems: "center",
    display: "flex",
  },
  icon: {
    width: 20,
    height: 20,
  },
  section: {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    backgroundColor: (theme) => theme.palette.primary.dark,
    p: (theme) => ({
      xs: theme.spacing("8%"),
      sm: theme.spacing("8%"),
      md: theme.spacing("8%"),
    }),
  },
  imgWrap: {
    px: (theme) => ({
      xs: theme.spacing("8%"),
      sm: theme.spacing("8%"),
      md: theme.spacing("8%"),
    }),
    py: (theme) => ({
      xs: theme.spacing("8%"),
      sm: theme.spacing("8%"),
      md: theme.spacing("8%"),
    }),
  },
  img: {
    maxWidth: "100%",
    width: "100%",
    display: "flex",
    flex: "1 0 0%",
    height: "100%",
    objectFit: "cover",
    mb: (theme) => theme.spacing(16),
  },
  center: {
    px: (theme) => ({
      xs: theme.spacing(16),
      md: theme.spacing(32),
    }),
    py: (theme) => theme.spacing(32),
    m: (theme) => theme.spacing("auto"),
    my: (theme) => theme.spacing(0),
    maxWidth: 768,
  },
  heading: {
    fontWeight: (theme) => theme.typography.fontWeightSemiBold,
    color: (theme) => theme.palette.default.darkGreen,
  },
  description: {
    fontWeight: (theme) => theme.typography.fontWeightRegular,
    color: (theme) => theme.palette.default.darkGreen,
    lineHeight: (theme) => theme.spacing(27.2),
  },
  anchor: {
    background: (theme) => theme.palette.primary.main,
    "& a": {
      textDecoration: "none",
      color: (theme) => theme.palette.common.white,
    },
  },
  gridLeft: {
    flex: 1,
    textAlign: {
      xs: "center",
      md: "left",
    },
  },
  gridRight: {
    flex: 1,
    textAlign: {
      xs: "center",
      md: "center",
    },
  },
  gridItem: {
    alignItems: "start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: "12px",
    flexGrow: "0",
    flexShrink: "1",
  },
};

export default styles;
