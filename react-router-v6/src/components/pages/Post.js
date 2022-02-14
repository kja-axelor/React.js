import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Post() {
  let { category, id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get("price"));
  console.log(searchParams.get("sort"));
  return (
    <>
      <h1>Post page</h1>
      <h2>Category {category}</h2>
      <h3>ID {id}</h3>
    </>
  );
}

export default Post;
