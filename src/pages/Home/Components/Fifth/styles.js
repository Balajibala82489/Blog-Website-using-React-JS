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
    maxWidth: 1200,
  },
  blogPost: {
    mb: (theme) => theme.spacing(48),
  },
  blogTitle: {
    fontWeight: (theme) => theme.typography.fontWeightBold,
    mb: (theme) => theme.spacing(16),
  },
  blogDate: {
    mb: (theme) => theme.spacing(16),
    textTransform: "uppercase",
  },
  blogDescription: {
    mb: (theme) => theme.spacing(48),
  },
  textFieldWrap: {
    "& .MuiTextField-root": {
      width: {
        xs: "100%",
        md: "50ch",
      },
      background: "#fff",
      ml: 0,
      mb: 24,
    },
    mt: 48,
  },
  textField: {
    borderColor: "#767676",
    ml: {
      xs: 0,
      sm: 48,
    },
  },
  subscribe: {
    backgroundColor: (theme) => theme.palette.default.darkGreen,
    color: (theme) => theme.palette.common.white,
    textTransform: "none",
    borderRadius: (theme) => theme.spacing(0),
    boxShadow: "none",
    "&.MuiButton-root:hover": {
      backgroundColor: (theme) => theme.palette.default.olive,
      boxShadow: "none",
      transistion: "none",
    },
    ml: {
      xs: 0,
      md: 10,
    },
    py: 15,
    px: 30,
    width: {
      xs: "100%",
      md: "inherit",
    },
  },
};

export default styles;
