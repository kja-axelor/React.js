import React from "react";

// Functional components are used when we don't have need of state or lifecycle hook
// function Student(){
//     return <h1> Hello from Krjani </h1>;
// }

const Student = (props)=>{
    return <h1> Hello from Functional Component by {props.name}</h1>
}

export default Student;