import { Button, Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "./List";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });
  const [status, setStatus] = useState();

  const changeHandler = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3434/students", student)
      .then((response) => {
        console.log(response);
        setStatus(true);
      })
      .catch((error) => console.log(error));
  };

  if (status) {
    return <Home />;
  }
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
            <Typography variant="h4">Add Student</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  onChange={changeHandler}
                  autoFocus
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
                  onChange={changeHandler}
                  label="Email"
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={submitHandler}
                fullWidth
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
