import React from "react";
import { Toast } from "react-bootstrap";

export default function Notification(props) {
  const { handleToastClose, tostItems } = props;
  return (
    <>
      {tostItems.map((item) => (
        <Toast
          delay={1000}
          key={item.id}
          autohide
          onClose={() => handleToastClose(item.id)}
        >
          <Toast.Header>
            <strong className="me-auto">{item.name}</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>{item.description}</Toast.Body>
        </Toast>
      ))}
    </>
  );
}
