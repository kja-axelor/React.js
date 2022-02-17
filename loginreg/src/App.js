import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginreg from "./components/pages/auth/Loginreg";
import Passwordreset from "./components/pages/auth/Passwordreset";
import ResetPassLink from "./components/pages/auth/ResetPassLink";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Loginreg />} />
            <Route path="resetpass" element={<Passwordreset />} />
            <Route path="resetpasslink" element={<ResetPassLink />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error-404 Page not found!!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
