import React, { Component } from 'react'
import Company from "./Company";

export default class Product extends Component {

    constructor(props){
        super(props);
        console.log("App Constructor called");
        console.log(props);
        this.state = {          
            roll:"101"
        };

    }

    static getDerivedStateFromProps(props,state){
        console.log("App Get Derived State Fron Props");
        console.log(props,state);
        // compulsory we have to return something in this method
        return null;
    }

    componentDidMount(){
        //Get data from server and set data to server
        // only called in one time per class
        // this method are only used in class based component
        console.log("App Component DID mount[Product]");
    }

    componentWillUnmount(){
        console.log('component will unmount or removed');
    }
    render() {
        console.log("App Rendered[Product]")
        return (
            <div>
                <h1>Hello from Product</h1>
                {/* child component */}
                <Company name="axelor"/>
            </div>
        )
    }
}
