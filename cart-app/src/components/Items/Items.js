import React from "react";
import { Col, Row } from "react-bootstrap";
import Itemcard from "../ItemCard/Itemcard";
export default function Items(props) {
  return (
    <Col md={8} className="p-4 pt-0">
      <Row>
        {props.items.map((item) => {
          return <Itemcard key={item.id} item={item} onAdd={props.onAdd} />;
        })}
      </Row>
    </Col>
  );
}
