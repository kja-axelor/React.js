import React from "react";
import { Col, Row } from "react-bootstrap";
import Itemcard from "../ItemCard/Itemcard";
export default function Items(props) {
  return (
    <Col xs={8} className="bg-light">
      <h1 className="text-center">Items</h1>
      <Row>
        {props.items.items.map((item) => {
          return <Itemcard key={item.id} item={item} onAdd={props.onAdd} />;
        })}
      </Row>
    </Col>
  );
}
