import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Key from './Key';

const arr = [10,20,30,40];
ReactDOM.render(<App myarr={arr}/>,document.getElementById("root"));
ReactDOM.render(<Key arr={arr}/>,document.getElementById("root"));
