import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Table,
} from "react-bootstrap";
import { SortDown, SortUp } from "react-bootstrap-icons";
import {
  createData,
  editData,
  fetchCountries,
  removeAll,
  searchQueries,
} from "../services";
import Editor from "./Editor";
import styles from "./List.module.css";

const List = () => {
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [sort, setSort] = useState({ name: "", order: "" });
  const [selectedOb, setSelectedOb] = useState({
    id: "",
    version: "",
    code: "",
    name: "",
  });
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchCountries().then((res) => setData(res.data));
  }, []);

  const searchHandler = () => {
    searchQueries(query).then((res) =>
      res.data ? setData(res.data) : setQuery("")
    );
  };

  const clearSearchHandler = () => {
    searchQueries("").then((res) => {
      setQuery("");
      setData(res.data);
    });
  };

  const clickSortHandler = (e) => {
    let active = sort && sort.name === e.target.id;
    setSort({
      name: e.target.id,
      order: active && sort.order === "desc" ? "asc" : "desc",
    });
  };

  const sortData = (sort, $data) => {
    const { name, order } = sort;
    return $data.sort((a, b) => {
      if (a[name] > b[name]) return order === "asc" ? 1 : -1;
      if (a[name] < b[name]) return order === "asc" ? -1 : 1;
      return 0;
    });
  };

  let $data = data;
  if (sort) {
    $data = sortData(sort, data);
  }

  const updateHandler = (e) => {
    e.preventDefault();
    editData(selectedOb).then((res) => {
      if (res.status === 0) {
        let i = data.findIndex((d) => d.id === res.data[0].id);
        data[i] = res.data[0];
        setData([...data]);
        setIsEdit(false);
        setSelectedOb({ id: "", version: "", code: "", name: "" });
      }
    });
  };

  const editHandler = (id, version, code, name) => {
    setIsEdit(true);
    setSelectedOb({ id, version, code, name });
  };

  const delHandler = (id, version) => {
    removeAll(id, version).then((res) => {
      console.log(res.status);
      if (res.status === 0) {
        setData(data.filter((d) => d.id !== id));
      }
    });
  };

  const createHandler = (e) => {
    e.preventDefault();
    createData(selectedOb.name, selectedOb.code).then((res) => {
      setData([...data, res.data[0]]);
      console.log(selectedOb);
      setSelectedOb({ id: "", version: "", code: "", name: "" });
      console.log(selectedOb);
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={6}>
          {!isEdit ? (
            <h2 className={`${styles.heading} ${styles.createHeading}`}>
              Create Record
            </h2>
          ) : (
            <h2 className={`${styles.heading} ${styles.updateHeading}`}>
              Update Record
            </h2>
          )}
          <Editor
            selectedOb={selectedOb}
            setSelectedOb={setSelectedOb}
            isEdit={isEdit}
            updateHandler={updateHandler}
            createHandler={createHandler}
          />
        </Col>
        <Col sm={6}>
          <Row>
            <Col sm={6}>
              <h2 className={`${styles.listHeading} ${styles.heading}`}>
                CountryList
              </h2>
            </Col>
            <Col sm={6}>
              <Form className={`${styles.heading} d-flex`}>
                <FormControl
                  value={query}
                  placeholder="Search"
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button
                  variant="outline-success"
                  onClick={(e) => searchHandler(e)}
                  size="sm"
                  className="mx-1"
                >
                  Search
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={(e) => clearSearchHandler(e)}
                  className="mx-1"
                >
                  Clear
                </Button>
              </Form>
            </Col>
          </Row>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th onClick={(e) => clickSortHandler(e)} id="name">
                  CountryName{" "}
                  {sort.name === "name" &&
                    (sort.order === "asc" ? <SortUp /> : <SortDown />)}
                </th>
                <th onClick={(e) => clickSortHandler(e)} id="code">
                  Code{" "}
                  {sort.name === "code" &&
                    (sort.order === "asc" ? <SortUp /> : <SortDown />)}
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {$data.map((d, i) => {
                return (
                  <tr key={d.id}>
                    <td>{i + 1}</td>
                    <td>{d.name} </td>
                    <td>{d.code} </td>
                    <td>
                      <Button
                        variant="warning"
                        className="mx-3 px-5"
                        onClick={() =>
                          editHandler(d.id, d.version, d.code, d.name)
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        className="mx-3 px-5"
                        onClick={() => delHandler(d.id, d.version)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default List;
