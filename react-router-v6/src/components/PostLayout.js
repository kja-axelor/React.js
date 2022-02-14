import React from "react";
import { Outlet } from "react-router-dom";

function PostLayout() {
  return (
    <>
      <h1>Hello PostLayout</h1>
      <Outlet />
    </>
  );
}

export default PostLayout;
