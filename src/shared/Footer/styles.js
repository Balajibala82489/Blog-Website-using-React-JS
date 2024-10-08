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
  center: {
    px: (theme) => ({
      xs: theme.spacing(16),
      md: theme.spacing(32),
    }),
    py: (theme) => theme.spacing(32),
    m: (theme) => theme.spacing("auto"),
    my: (theme) => theme.spacing(0),
    maxWidth: 1200,
  },
  copyRight: {
    mt: {
      xs: 54,
      md: 68,
    },
  },
  whatsapp: {
    display: "flex",
    marginInlineEnd: (theme) => theme.spacing(5),
    "& .MuiTypography-root": {
      background: "#25d366",
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath fill='%23fff' d='M24 11.69c0 6.458-5.274 11.692-11.782 11.692-2.066 0-4.007-.528-5.695-1.455L0 24l2.127-6.273a11.57 11.57 0 0 1-1.691-6.036C.436 5.234 5.711 0 12.218 0 18.726 0 24 5.234 24 11.69M12.218 1.863c-5.462 0-9.905 4.41-9.905 9.829 0 2.15.7 4.142 1.886 5.763l-1.237 3.65 3.807-1.21a9.9 9.9 0 0 0 5.45 1.626c5.461 0 9.905-4.409 9.905-9.829s-4.444-9.83-9.906-9.83m5.95 12.521c-.073-.119-.265-.19-.554-.334-.289-.143-1.71-.837-1.973-.932-.265-.095-.458-.143-.65.143-.193.287-.746.932-.915 1.123-.169.192-.337.216-.626.073-.288-.143-1.219-.446-2.322-1.422-.858-.76-1.438-1.697-1.607-1.985-.168-.286-.017-.441.127-.584.13-.128.29-.335.433-.502.145-.167.193-.286.289-.478.097-.191.048-.358-.024-.502-.072-.143-.65-1.553-.89-2.127-.241-.574-.482-.478-.65-.478s-.361-.024-.554-.024-.506.072-.77.358c-.265.287-1.01.98-1.01 2.39s1.034 2.773 1.178 2.964c.145.19 1.998 3.179 4.934 4.326s2.936.764 3.466.716c.529-.047 1.708-.693 1.95-1.362.24-.67.24-1.243.168-1.363'/%3E%3C/svg%3E\")",
      backgroundPosition: "16px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "32px 32px",
      border: "none",
      borderRadius: (theme) => theme.spacing(8),
      boxSizing: "border-box",
      color: "#fff",
      display: "block",
      fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
      fontSize: "20px",
      fontWeight: "500",
      lineHeight: "36px",
      minHeight: "50px",
      padding: "8px 16px 8px 56px",
      textDecoration: "none",
      whiteSpace: "nowrap",
      textDecorationThickness: ".0625em !important",
      textUnderlineOffset: ".15em",
    },
  },
};

export default styles;
