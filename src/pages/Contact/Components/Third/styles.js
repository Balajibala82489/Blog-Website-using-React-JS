const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
  },
  container: {
    backgroundColor: (theme) => theme.palette.default.white,
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
    maxWidth: 620,
    textAlign: "left",
    "& .MuiTypography-root": {
      color: (theme) => theme.palette.default.darkGreen,
      mb: (theme) => theme.spacing(10),
    },
  },
  heading: {
    fontWeight: (theme) => theme.typography.fontWeightBold,
    pb: (theme) => theme.spacing(32),
    textAlign: "left",
  },
  description: {
    fontWeight: (theme) => theme.typography.fontWeightRegular,
    color: (theme) => theme.palette.default.darkGreen,
    mb: (theme) => theme.spacing(32),
  },
  form: {
    "& .MuiTextField-root": {
      my: (theme) => theme.spacing(16),
    },
    "& .MuiButton-root": {
      my: (theme) => theme.spacing(16),
    },
  },
};

export default styles;
