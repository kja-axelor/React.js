import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
export default function Header() {
  return (
    <Container className="my-3">
      <Row>
        <Col className="bg-light">
          <h1 className="text-center">Shopping cart</h1>
        </Col>
      </Row>
    </Container>
  );
}
