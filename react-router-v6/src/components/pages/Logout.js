import React from "react";
import { useLocation } from "react-router-dom";

function Logout() {
  const location = useLocation();
  return (
    <>
      <h1>Logged out!!</h1>
      <h2>{location.state.msg}</h2>
    </>
  );
}

export default Logout;
