import "./App.css";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} from "./services/post";
function App() {
  const responseInfo = useGetAllPostQuery();
  const responseInfoId = useGetPostByIdQuery(51);
  const responseInfoLimit = useGetPostByLimitQuery(2);
  const [deletePost, responseInfoDelete] = useDeletePostMutation();
  const [createPost, responseInfoCreate] = useCreatePostMutation();
  const [updatePost, responseInfoUpdate] = useUpdatePostMutation();
  const newPost = {
    title: "My new title",
    body: "My new body",
    userId: 1,
  };
  const updatedPost = {
    title: "My updated title",
    body: "My updated body",
    userId: 1,
    id: 1,
  };
  // console.log("Response information", responseInfo);
  // console.log("Data:", responseInfo.data);
  // console.log("Success:", responseInfo.isSuccess);

  // console.log("Response information", responseInfoId);
  // console.log("Data:", responseInfoId.data);
  // console.log("Success:", responseInfoId.isSuccess);

  // console.log("Response information", responseInfoLimit);
  // console.log("Data:", responseInfoLimit.data);
  // console.log("Success:", responseInfoLimit.isSuccess);

  // console.log("Response information", responseInfoDelete);
  // console.log("Data:", responseInfoDelete.data);
  // console.log("Success:", responseInfoDelete.isSuccess);

  // console.log("Response information", responseInfoCreate);
  // console.log("Data:", responseInfoCreate.data);
  // console.log("Success:", responseInfoCreate.isSuccess);

  console.log("Response information", responseInfoUpdate);
  console.log("Data:", responseInfoUpdate.data);
  console.log("Success:", responseInfoUpdate.isSuccess);

  // if (responseInfo.isLoading) {
  //   return <div>Loading....</div>;
  // }
  // if (responseInfo.isError) {
  //   return <h1>An Error occured {responseInfo.error.error}</h1>;
  // }
  // console.log(deletePost, responseInfoDelete);
  return (
    // Get All data
    // <div className="App">
    //   <h1>Hello react!</h1>
    //   {responseInfo.data.map((post) => {
    //     return (
    //       <div key={post.id}>
    //         <h2>
    //           {post.id} {post.title}
    //           <hr />
    //         </h2>
    //         <p>{post.body}</p>
    //       </div>
    //     );
    //   })}
    // </div>

    // Get single data
    // <div className="App">
    //   <h2>
    //     {responseInfoId.data.id} {responseInfoId.data.title}
    //   </h2>
    //   <hr />
    //   <p>{responseInfoId.body}</p>
    // </div>

    // limited data
    // <div className="App">
    //   <h1>Limited data</h1>
    //   {responseInfoLimit.data.map((post) => {
    //     return (
    //       <div key={post.id}>
    //         <h2>
    //           {post.id} {post.title}
    //         </h2>
    //         <hr />
    //         <p>{post.body}</p>
    //       </div>
    //     );
    //   })}
    // </div>

    // Delete data
    // <div className="App">
    //   <h1>Delete data</h1>
    //   <button onClick={() => deletePost(2)}>DeletePost</button>
    // </div>

    // Create data
    // <div className="App">
    //   <h1>Create & post data</h1>
    //   <button onClick={() => createPost(newPost)}>CreatePost</button>
    // </div>

    //  Update data
    <div className="App">
      <h1>Update post data</h1>
      <button onClick={() => updatePost(updatedPost)}>UpdatePost</button>
    </div>
  );
}

export default App;
