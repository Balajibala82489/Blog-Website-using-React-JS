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
    backgroundColor: (theme) => theme.palette.default.green,
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
    height: "100%",
    objectFit: "cover",
    width: "100%",
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
    mb: (theme) => theme.spacing(32),
  },
  description: {
    fontWeight: (theme) => theme.typography.fontWeightRegular,
    color: (theme) => theme.palette.default.darkGreen,
    mb: (theme) => theme.spacing(32),
  },
  anchor: {
    background: (theme) => theme.palette.default.olive,
    borderRadius: (theme) => theme.spacing(5),
    "& a": {
      textDecoration: "none",
      color: (theme) => theme.palette.common.white,
      px: (theme) => theme.spacing(24),
      py: (theme) => theme.spacing(14),
      textTransform: "none",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: (theme) => theme.palette.default.olive,
      boxShadow: "none",
      transistion: "none",
    },
  },
};

export default styles;
