import { useState } from "react"
import React from "react"
function App() {
  // we have to change state in event or lifecycle method
  // we can also destructure the array
  const [name,setName] = useState("krjani");
  const[roll,setRoll] = useState(101);
  // const stateVariable = useState("krjani");
  // we have to use event for updating state values
  // const handleclk = () => {
  //   stateVariable[1]("jbl");
  // }
  const handleclk = () => {
    setName("jbl");
    setRoll(201);
  }
  return <React.Fragment>
    {/* <h1>hello {stateVariable}</h1>
    <button onClick={handleclk}>change</button> */}
    <h1>hello {name}</h1>
    <h1>Roll {roll}</h1>
    <button onClick={handleclk}>change</button>
  </React.Fragment>;
}
export default App;
