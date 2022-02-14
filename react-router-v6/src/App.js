import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Layout from "./components/Layout";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Post from "./components/pages/Post";
import PostLayout from "./components/PostLayout";
import PostDetails from "./components/pages/PostDetails";

function App() {
  let isLogged = true;
  const data = {
    status: "user not loggedIn",
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<h1>hello react router</h1>} /> */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:category" element={<Post />} />
          <Route path="/post/:category/:id" element={<Post />} />
          <Route path="/logout" element={<Logout />} />

          {/* nested Routes */}

          {/* <Route path="/" element={<Layout />}> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="post" element={<PostLayout />}> */}
          {/* <Route index element={<Post />} /> */}
          {/* <Route path=":category" element={<PostDetails />} /> */}
          {/* </Route> */}
          {/* </Route> */}

          <Route
            path="/dashboard"
            element={
              isLogged ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" replace state={data} />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
