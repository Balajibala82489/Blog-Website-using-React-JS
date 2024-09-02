const styles = {
  wrapper: {
    display: "flex",
    "&.MuiPaper-root": {
      boxShadow: "none",
    },
  },
  toolBar: {
    px: (theme) => theme.spacing(60),
    boxShadow: "none",
  },
  container: {
    pt: (theme) => ({
      xs: theme.spacing(26),
      sm: theme.spacing(30),
      md: theme.spacing(34),
    }),
    pb: (theme) => ({
      xs: theme.spacing(54),
      sm: theme.spacing(58),
      md: theme.spacing(68),
    }),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexBasis: "100%",
    m: (theme) => theme.spacing("auto"),
    maxWidth: (theme) => ({
      md: theme.spacing(1200),
    }),
    gap: (theme) => theme.spacing(32),
  },
  navbar: {
    width: {
      xs: 60,
      sm: 60,
      md: 60,
    },
    height: 60,
    display: { xs: "none", md: "flex" },
  },
  display: {
    display: { xs: "none", md: "flex" },
    flexDirection: "row",
    gap: (theme) => theme.spacing(32),
  },
  xsDisplay: {
    display: { xs: "flex", md: "none" },
    gap: (theme) => theme.spacing(32),
  },
  title: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: (theme) => theme.typography.fontWeightBold,
    color: (theme) => theme.palette.default.darkGreen,
    textDecoration: "none",
    letterSpacing: (theme) => theme.spacing(-2),
  },
  xsTitle: {
    mr: 2,
    display: { xs: "flex", md: "none" },
    flexGrow: 1,
    fontFamily: "monospace",
    fontWeight: (theme) => theme.typography.fontWeightBold,
    color: (theme) => theme.palette.default.darkGreen,
    textDecoration: "none",
    letterSpacing: (theme) => theme.spacing(-2),
  },
  tagline: {
    display: { xs: "none", md: "flex" },
    fontWeight: (theme) => theme.typography.fontWeightRegular,
    color: (theme) => theme.palette.default.darkGreen,
  },
  xsTagline: {
    display: { xs: "flex", md: "none" },
    fontWeight: (theme) => theme.typography.fontWeightRegular,
    color: (theme) => theme.palette.default.darkGreen,
  },
  logo: {
    width: {
      xs: 60,
      sm: 60,
    },
    height: 60,
    display: { xs: "flex", md: "none" },
    mr: (theme) => ({
      xs: theme.spacing(0),
      md: theme.spacing(50),
    }),
  },
  heading: {
    mr: 2,
    display: { xs: "flex", md: "none" },
    flexGrow: 1,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
  info: {
    display: "flex",
    flexGrow: 1,
    flexDirection: {
      xs: "colummn",
      sm: "row",
    },
  },
  menuWrapper: {
    gap: (theme) => theme.spacing(32),
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: "end",
    color: (theme) => theme.palette.default.darkgreen,
    "& a": {
      my: 2,
      display: "flex",
      fontWeight: (theme) => theme.typography.fontWeightRegular,
      color: (theme) => theme.palette.default.darkGreen,
      fontSize: 17,
      textTransform: "none",
      textDecoration: "none",
    },
    "& a.active": {
      background: "none",
      textDecoration: "underline",
      textDecorationThickness: ".0625em !important",
      textUnderlineOffset: ".15em",
    },
    "& a:hover": {
      background: "none",
      textDecoration: "underline",
      textDecorationThickness: ".0625em !important",
      textUnderlineOffset: ".15em",
    },
  },
  xsMenuItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "end",
    gap: "32px",
    backgroundColor: (theme) => theme.palette.common.white,
    "&:hover": {
      backgroundColor: "transparent",
    },
    "& a": {
      my: 2,
      display: "flex",
      fontWeight: (theme) => theme.typography.fontWeightRegular,
      color: (theme) => theme.palette.default.darkGreen,
      fontSize: 17,
      textTransform: "none",
      textDecoration: "none",
    },
    "& a.active": {
      background: "none",
      textDecoration: "underline",
      textDecorationThickness: ".0625em !important",
      textUnderlineOffset: ".15em",
    },
    "& a:hover": {
      background: "none",
      textDecoration: "underline",
      textDecorationThickness: ".0625em !important",
      textUnderlineOffset: ".15em",
    },
    "& .MuiMenuItem-root:hover": {
      background: "none",
    },
  },
};

export default styles;
