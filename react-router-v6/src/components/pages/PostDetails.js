import React from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  let { category } = useParams();
  return (
    <>
      <h1>Hello PostDetails of {category}</h1>
    </>
  );
}

export default PostDetails;
