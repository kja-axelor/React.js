import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  table: {
    "& thead": {
      "& tr": { backgroundColor: "#616161" },
      "& th": { textAlign: "center", color: "white", fontWeight: "bold" },
    },
    "& td": { textAlign: "center" },
  },
});

function View() {
  let { id } = useParams();
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`http://localhost:3434/students/${id}`)
      .then((response) => setStudent(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <Box textAlign="center" p={2} bgcolor="orange" color="white" mb={2}>
        <Typography variant="h4">Student Details</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.stuname}</TableCell>
              <TableCell>{student.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
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

export default View;
