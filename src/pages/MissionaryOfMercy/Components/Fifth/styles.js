const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
  },
  container: {
    backgroundColor: (theme) => theme.palette.default.green,
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
    maxWidth: 768,
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "& .MuiTypography-root": {
      lineHeight: 1.5,
    },
  },
};

export default styles;
