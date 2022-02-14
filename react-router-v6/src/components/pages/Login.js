import React from "react";
import { useLocation } from "react-router-dom";

function Login() {
  let location = useLocation();
  console.log(location);

  return (
    <>
      <h1>Login page</h1>
      <h2>{location.state.status}</h2>
    </>
  );
}

export default Login;
