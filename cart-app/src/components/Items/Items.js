import React from "react";
import { Row } from "react-bootstrap";
import Itemcard from "./ItemCard";

export default function Items(props) {
  return (
    <Row>
      {props.items.map((item) => {
        return <Itemcard key={item.id} item={item} onAdd={props.onAdd} />;
      })}
    </Row>
  );
}
