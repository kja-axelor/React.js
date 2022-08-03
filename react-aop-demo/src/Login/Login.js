import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { login } from "../services";
import styles from "./Login.module.css";

const Login = (props) => {
  const { setAuth } = props;
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    login(username, password).then((res) => {
      if (res) {
        setAuth(true);
      }
    });
  };
  return (
    <Container>
      <Row>
        <Col sm={6} className="m-auto">
          <h1 className={styles.loginHeading}>Login Page</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2 mx-5 mb-2">
              <Button variant="primary" onClick={submitHandler} size="lg">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
