import React,{useState,useEffect} from "react";
import useCustomCounter from './custom'
// function App() {
//   const [count,setCount] = useState(0);
//   const [count1,setCount1] = useState(100);
//   var handleclk = ()=>{
//     setCount(count + 1);
//   }
//   var handleclk1 = ()=>{
//     setCount1(count1 - 1);
//   }
//   useEffect(() => {
//     console.log("component re-rendered!");
//   },[count]);
//   //we give element which depend the component
//   return(
//     <React.Fragment>
//       <h1>Count up:{count}</h1>
//       <button type="button" onClick={handleclk}>Increment</button>
//       <h1>Count down:{count1}</h1>
//       <button type="button" onClick={handleclk1}>Decrement</button>
//     </React.Fragment>
//     )
// }

function App(){
  // we can use many times custom hook counter
  const data = useCustomCounter();
  const data1 = useCustomCounter();
  return(
    <React.Fragment>
      <h1>Count up: {data.count}</h1>
      <button type="button" onClick={data.handleclk}>Increment</button>
      <h1>Count up: {data1.count}</h1>
      <button type="button" onClick={data1.handleclk}>Increment</button>
    </React.Fragment>
  )
}
export default App;
