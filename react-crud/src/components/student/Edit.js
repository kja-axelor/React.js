import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Edit() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3434/students/${id}`)
      .then((response) => setStudent(response.data))
      .catch((error) => console.log(error));
  }, []);

  const changeHandler = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3434/students/${id}`, student)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Box p={2} textAlign="center">
        <Typography variant="h2" bgcolor="purple" color="white">
          React CRUD with API Call
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} bgcolor="green" color="white" mb={2}>
            <Typography variant="h4">Edit Student</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  fullWidth
                  label="ID"
                  disabled
                  value={id}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  value={student.stuname}
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  value={student.email}
                  onChange={changeHandler}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="warning"
                fullWidth
                onClick={submitHandler}
              >
                Update
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
      <Box m={3} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Box>
    </>
  );
}

export default Edit;
