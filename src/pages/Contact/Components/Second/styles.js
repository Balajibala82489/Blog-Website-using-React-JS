const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
  },
  container: {
    backgroundColor: (theme) => theme.palette.default.navy,
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
  center: {
    m: (theme) => theme.spacing("auto"),
    maxWidth: 768,
    textAlign: "center",
  },
  tag: {
    display: "flex",
    justifyContent: "center",
    fontStyle: "italic",
    mt: (theme) => ({
      xs: theme.spacing(24),
      md: theme.spacing(32),
    }),
  },
};

export default styles;
