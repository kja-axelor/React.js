import React from "react";

export default function Prevbutton(props) {
  const { buttonHandler } = props;

  return (
    <i
      className="fas fa-angle-up up"
      onClick={() => buttonHandler()}
      style={{ cursor: "pointer" }}
    ></i>
  );
}
