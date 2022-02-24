import React from "react";

export default function Nextbutton(props) {
  const { buttonHandler, setIsNext } = props;

  const clickHandler = () => {
    setIsNext(true);
    buttonHandler();
  };
  return (
    <i
      className="fas fa-angle-down down"
      onClick={clickHandler}
      style={{ cursor: "pointer" }}
    ></i>
  );
}
