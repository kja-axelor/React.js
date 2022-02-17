import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassLink() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      cnfpassword: data.get("cnfpassword"),
    };
    if (actualData.password && actualData.cnfpassword) {
      if (actualData.password === actualData.cnfpassword) {
        console.log(actualData);
        document.getElementById("passreset-link-form").reset();
        setErrors({
          status: true,
          msg: "Password Reset Successfully redirecting to login !!",
          type: "success",
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setErrors({
          status: true,
          msg: "Password and Confirm Password does not match.",
          type: "error",
        });
      }
    } else {
      setErrors({
        status: true,
        msg: "All fields are required",
        type: "error",
      });
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <h1>Reset Password</h1>
          <Box
            component="form"
            noValidate
            id="passreset-link-form"
            onSubmit={handleSubmit}
          >
            <TextField
              required
              fullWidth
              id="password"
              name="password"
              label="New Password"
              type="password"
              margin="normal"
            />
            <TextField
              required
              fullWidth
              id="cnfpassword"
              name="cnfpassword"
              label="New Confirm Password"
              type="password"
              margin="normal"
            />
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Save
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
}

export default ResetPassLink;
