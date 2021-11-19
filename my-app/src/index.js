import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import Student from "./Student"
import "./App.css"
import Employee from "./Employee";
import "./People";
import People from "./People";
import Human from "./Human";
// import Robot from "./Human"; 
import Robot from "./Robot";
import Product from "./Product";
import Father from "./Father";
import King from "./King";

// object
let user = {
    name:'Rameshbhai',
    sirname:'jani'
};

// JavaScript Function
function show(name){
    return name;
}

const name = 'apple lover';
let el = <h1 className="bg white"> Hello Krjani's father {user.name} </h1>;
let el2 = React.createElement("h1",null,"Hello world");     

ReactDOM.render(<App />,document.getElementById("root"));
ReactDOM.render(<Student  name="krjani's lec"/>,document.getElementById("root"));
ReactDOM.render(<App name="jani"/>,document.getElementById("root"));

// JSX JavaScript XML  
// we have to use {} for writing javaScript inside an JSX
ReactDOM.render(el,document.getElementById("root"));

ReactDOM.render(<Employee name="priyanka"/>,document.getElementById("root"));

// props.children
ReactDOM.render(<Employee>I am Employee</Employee>,document.getElementById("root"));

// State
ReactDOM.render(<People roll="102"/>,document.getElementById("root"));

// state with Constructor
ReactDOM.render(<People roll="103" />,document.getElementById("root"));

// event handling with functional componet
ReactDOM.render(<Robot name="Kishan R Jani" />,document.getElementById("root"));

//event handling class component
ReactDOM.render(<Human roll="101"/>,document.getElementById("root"));

// Passing Argument to the events
ReactDOM.render(<Robot />,document.getElementById("root"));

// LifeCycle method
ReactDOM.render(<Father />,document.getElementById("root"));

ReactDOM.render(<Product name="apple"/>,document.getElementById("product"));

// unmounting component product
// ReactDOM.unmountComponentAtNode(document.getElementById('product'));

// hooks
// ReactDOM.render(<King />,document.getElementById("root"));   