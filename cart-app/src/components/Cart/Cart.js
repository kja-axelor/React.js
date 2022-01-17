import React from "react";
import { Alert, Badge, Button, Col } from "react-bootstrap";

export default function Cart(props) {
  const { onAdd, cartItems, onRemove, countCartItems } = props;
  const total = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <Col xs={4} className="bg-light">
      <h1 className="text-center">Cart Items</h1>

      {countCartItems ? (
        <h1>
          <span className="badge bg-secondary">{countCartItems}</span>
        </h1>
      ) : (
        ""
      )}

      <div>
        {cartItems.length === 0 && (
          <Alert variant="warning">Cart is Empty</Alert>
        )}

        {cartItems.map((item, index) => (
          <Alert variant="secondary" key={item.id}>
            <Alert.Heading>
              {index + 1}. {item.name}
            </Alert.Heading>
            <div>
              <Button
                variant="success"
                className="mx-1"
                onClick={() => onAdd(item)}
              >
                {" "}
                +
              </Button>
              <Button
                variant="danger"
                className="mx-1"
                onClick={() => onRemove(item)}
              >
                {" "}
                -
              </Button>
            </div>
            <div>
              ₹ {item.price.toFixed(2)} X {item.qty} ={" "}
              {(item.qty * item.price).toFixed(2)}
            </div>
          </Alert>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="fw-bold">
              Net Total:{" "}
              <Badge pill bg="primary">
                ₹ {total.toFixed(2)}
              </Badge>
            </div>
          </>
        )}
      </div>
    </Col>
  );
}
