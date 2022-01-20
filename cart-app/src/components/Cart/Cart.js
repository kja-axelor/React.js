import React from "react";
import {
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Col,
  ListGroup,
} from "react-bootstrap";

export default function Cart(props) {
  const { onAdd, cartItems, onRemove } = props;
  const total = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <Col md={4} className="mt-4 pt-0 p-4">
        {cartItems.length === 0 && (
          <Alert variant="warning">Cart is Empty</Alert>
        )}

        <ListGroup as="ol" numbered>
          {cartItems.map((item) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-center"
              key={item.id}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  {item.title} / ₹ {item.price}
                </div>
                <ButtonGroup size="sm">
                  <Button variant="success" onClick={() => onAdd(item)}>
                    +
                  </Button>
                  <Button
                    variant="light"
                    disabled={true}
                    onClick={() => onAdd(item)}
                  >
                    {item.qty}
                  </Button>
                  <Button variant="danger" onClick={() => onRemove(item)}>
                    -
                  </Button>
                </ButtonGroup>
              </div>
              <Badge variant="primary" pill>
                {(item.qty * item.price).toFixed(2)}
              </Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {cartItems.length !== 0 && (
          <div className="d-flex justify-content-between align-items-start list-group-item">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Net Total</div>
            </div>
            <Badge bg="primary" pill>
              ₹ {total.toFixed(2)}
            </Badge>
          </div>    
        )}
    </Col>
  );
}
