import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function List() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3434/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.log(error));
  }, []);

  const delHandler = (id) => {
    axios
      .delete(`http://localhost:3434/students/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    const newStudent = students.filter((student) => {
      return student.id !== id;
    });
    setStudents(newStudent);
  };

  return (
    <>
      <Box textAlign="center" p={2} bgcolor="orange" color="white" mb={2}>
        <Typography variant="h4">Student List</Typography>
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
                No.
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
              <TableCell
                align="center"
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{student.stuname}</TableCell>
                  <TableCell align="center">{student.email}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton>
                        <Link to={`/view/${student.id}`}>
                          <VisibilityIcon color="warning" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to={`/edit/${student.id}`}>
                          <EditIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => delHandler(student.id)}>
                        <DeleteIcon color="error" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default List;
