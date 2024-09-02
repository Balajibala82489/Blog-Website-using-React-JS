const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
  },
  container: {
    backgroundColor: (theme) => theme.palette.default.white,
    color: (theme) => theme.palette.default.darkGreen,
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
  center: {
    m: (theme) => theme.spacing("auto"),
    maxWidth: 1200,
    textAlign: "left",
    alignItems: "center",
    justifyContent: "start",
    display: "flex",
    gap: "32px",
    "& .MuiTypography-root": {
      lineHeight: 1.5,
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
};

export default styles;
