import { Alert, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Userlogin = () => {
  const [errors, setErrors] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      console.log(actualData);
      document.getElementById("login-form").reset();
      setErrors({
        status: true,
        msg: "login success",
        type: "success",
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
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
      <Box component="form" noValidate id="login-form" onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          margin="normal"
        />
        <Box textAlign="center">
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Sign In
          </Button>
        </Box>
        <NavLink to="/resetpass">Forgot password</NavLink>
        {errors.status ? (
          <Alert severity={errors.type}>{errors.msg}</Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Userlogin;
