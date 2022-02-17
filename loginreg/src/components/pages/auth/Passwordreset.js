import { Alert, Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const Passwordreset = () => {
  const [errors, setErrors] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    };
    if (actualData.email) {
      console.log(actualData);
      document.getElementById("password-reset-form").reset();
      setErrors({
        status: true,
        msg: "Password Reset link Sent.Check Your Email !!",
        type: "success",
      });
    } else {
      setErrors({
        status: true,
        msg: "Please provide valid email",
        type: "error",
      });
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <h1>Reset password link</h1>
          <Box
            component="form"
            noValidate
            id="password-reset-form"
            onSubmit={handleSubmit}
          >
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              margin="normal"
            />
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Send
              </Button>
            </Box>
            {errors.status ? (
              <Alert severity={errors.type}>{errors.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Passwordreset;
