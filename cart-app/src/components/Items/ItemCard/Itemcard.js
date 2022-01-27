import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Itemcard(props) {
  const { item, onAdd } = props;
  return (
    <div className="col-md-2">
      <Card className="mt-4">
        <Card.Body>
          <div
            className="card-img"
            style={{
              backgroundImage: `url(${item.url})`,
              backgroundSize: "contain",
              height: "150px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Card.Title className="text-center">{item.title}</Card.Title>
          <Card.Text className="fw-bold text-center">₹ {item.price}</Card.Text>
          <Button variant="primary" onClick={() => onAdd(item)}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
