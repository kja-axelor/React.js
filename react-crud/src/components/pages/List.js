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
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  table: {
    "& thead": {
      "& tr": { backgroundColor: "#616161" },
      "& th": { textAlign: "center", color: "white", fontWeight: "bold" },
    },
    "& td": { textAlign: "center" },
  },
});

function List() {
  const [students, setStudents] = useState([]);
  const classes = useStyles();

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
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{student.stuname}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>
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
