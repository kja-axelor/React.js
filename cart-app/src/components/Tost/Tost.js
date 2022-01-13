import React from "react";
import { Toast } from "react-bootstrap";

export default function Tost(props) {
  const { handleToastClose, tostItems, isAdd } = props;
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
          {isAdd ? (
            <Toast.Body>Added successfully!</Toast.Body>
          ) : (
            <Toast.Body>Removed successfully!</Toast.Body>
          )}
        </Toast>
      ))}
    </>
  );
}
