import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Admin from "./Admin";
import Amazon from "./Amazon";

ReactDOM.render(<App />,document.getElementById("root"));
ReactDOM.render(<Admin status={true} />,document.getElementById("root"));
ReactDOM.render(<Amazon primeMember={false} />,document.getElementById("root"));
ReactDOM.render(<Admin />,document.getElementById("root"));
