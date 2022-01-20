import React from "react";
import { Button, Card } from "react-bootstrap";
export default function Itemcard(props) {
  const { item, onAdd } = props;
  return (
    <div className="col-md-2">
      <Card className="mt-4">
        <div className="row">
          <div className="col-md-12">
            <Card.Img
              variant="top"
              className="my-3"
              src={item.url}
              style={{ maxWidth: "8rem", height: "7rem" }}
              alt={item.title}
            ></Card.Img>
          </div>
          <div className="col-md-12">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="fw-bold">₹ {item.price}</Card.Text>
            <Button
              variant="primary"
              onClick={() => onAdd(item)}
              className="my-2"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
