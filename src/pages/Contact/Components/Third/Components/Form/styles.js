const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
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
