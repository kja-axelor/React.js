import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
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
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      cnfpassword: data.get("cnfpassword"),
      tc: data.get("tc"),
    };
    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.cnfpassword) {
        console.log(actualData);
        document.getElementById("registration-form").reset();
        setErrors({
          status: true,
          msg: "Registration successfull",
          type: "success",
        });
        navigate("/");
      } else {
        setErrors({
          status: true,
          msg: "Password & Confirm Password does not match.",
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
    <Box
      component="form"
      noValidate
      id="registration-form"
      onSubmit={handleSubmit}
    >
      <TextField
        required
        fullWidth
        id="name"
        name="name"
        label="Name"
        margin="normal"
      />
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
      <TextField
        required
        fullWidth
        id="cnfpassword"
        name="cnfpassword"
        label="Confirm Password"
        type="password"
        margin="normal"
      />
      <FormControlLabel
        control={<Checkbox value="agree" color="primary" name="tc" id="tc" />}
        label="I agree to term and condition."
      />
      <Box textAlign="center">
        <Button variant="contained" type="submit" sx={{ mt: 3, mb: 2, px: 5 }}>
          Join
        </Button>
      </Box>
      {errors.status ? <Alert severity={errors.type}>{errors.msg}</Alert> : ""}
    </Box>
  );
};

export default Registration;
