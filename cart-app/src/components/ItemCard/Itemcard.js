import React from "react";
import { Button, Card } from "react-bootstrap";
export default function Itemcard(props) {
  const { item, onAdd } = props;
  return (
    <>
      <Card style={{ width: "12rem" }}>
        <Card.Img
          variant="top"
          className="my-3"
          src={item.image}
          style={{ maxWidth: "8rem", height: "7rem" }}
          alt={item.name}
        ></Card.Img>
        <Card.Body>
          <div>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text className="fw-bold">₹ {item.price}</Card.Text>
          </div>
          <Button
            variant="primary"
            onClick={() => onAdd(item)}
            className="my-2"
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
