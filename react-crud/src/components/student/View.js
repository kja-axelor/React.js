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
import { Box } from "@mui/system";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function View() {
  let { id } = useParams();
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3434/students/${id}`)
      .then((response) => setStudent(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Box textAlign="center" p={2} bgcolor="orange" color="white" mb={2}>
        <Typography variant="h4">Student Details</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell
                align="center"
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                ID
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{student.id}</TableCell>
              <TableCell align="center">{student.stuname}</TableCell>
              <TableCell align="center">{student.email}</TableCell>
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
