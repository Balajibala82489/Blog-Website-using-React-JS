import { Box, TextField, Button, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./styles";

const validationSchema = yup.object({
  name: yup.string("Enter your firstName").required("firstName is required"),
  phone: yup
    .string("Enter your phone")
    .min(10, "phone number should be of minimum 10 characters length")
    .required("phone is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup.string("Enter your message").required("message is required"),
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "Name *",
      phone: "Phone *",
      email: "Email *",
      message: "Prayer Intention *",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Box sx={{ ...styles.wrapper }}>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ ...styles.form }}
          autoComplete="off"
        >
          <Stack direction="row" spacing={32}>
            <TextField
              fullWidth
              hiddenLabel
              id="name"
              name="name"
              value={formik.values.name}
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Stack>

          <TextField
            fullWidth
            hiddenLabel
            id="phone"
            name="phone"
            value={formik.values.phone}
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            fullWidth
            hiddenLabel
            id="email"
            name="email"
            value={formik.values.email}
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            hiddenLabel
            id="message"
            name="message"
            value={formik.values.message}
            variant="outlined"
            multiline
            rows={5}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            color="success"
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Form;
