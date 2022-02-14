import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let navigate = useNavigate();
  const data = {
    msg: "User logged out successfully",
  };
  return (
    <>
      <h1>Dashboard page</h1>
      <button
        onClick={() => {
          navigate("/logout", { state: data });
          //   navigate(1); //forward 1
          //   navigate(-1); //backward 1
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Dashboard;
