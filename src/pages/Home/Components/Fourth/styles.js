import banner from "../../../../assets/banner-01.jpg";
const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
    backgroundImage: `URL(${banner}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
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
    maxWidth: (theme) => ({
      sm: theme.spacing(576),
      md: theme.spacing(620),
    }),
    textAlign: "center",
  },
  tag: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: (theme) => theme.typography.fontWeightBold,
    mt: (theme) => ({
      xs: theme.spacing(24),
      md: theme.spacing(32),
    }),
  },
};

export default styles;
