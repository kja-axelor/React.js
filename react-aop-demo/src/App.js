import { useEffect, useState } from "react";
import List from "./Country/List";
import Login from "./Login/Login";
import { isAuth } from "./services";

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    isAuth().then((res) => {
      if (res) {
        setAuth(true);
      }
    });
  }, []);

  return <div>{!auth ? <Login setAuth={setAuth} /> : <List />}</div>;
}

export default App;
