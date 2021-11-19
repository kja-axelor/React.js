// class with event
import React, { Component } from 'react'

class Human extends Component{
    
    // if you want to use this keyword in normal function use constructor and 
    // bind it through this
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={
            name:"Krjani",
            roll:this.props.roll
        };
        
    }
    handleClick(){
        console.log("Button clicked",this);
        // you cannot change state like
        // this.setState.name="KJ"; no error it change but does not return view
        this.setState({name: "KJ"});
        //  inside class this point to current object
        //  inside function this points to global window object
        //  so always use arrow function it will bind automatically current     object
    }
    // Arrow function automatically bind this keyword
    handleClick = ()=>{
        console.log("Button clicked",this);
        this.setState({name: "KJ",roll:"115"});
        // function as argument of setState
        this.setState(function(state,props){
            console.log(state);
            // you can also modifying state from these using state.property
            state.name="Krjaniiiii"
            console.log(state.name);
            console.log(props);
            console.log(props.roll);
        })
    }
    render(){
        return(
            <div>
                <h1>Hello to events,{this.state.name}</h1>
                <h1>ROll, {this.state.roll}</h1>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

// Function component with events

function Robot(props){
    function  handleClick(e){
        // e.preventDefault();
        console.log("Button clicked",this);
    }
    return(
        <div>
            <h1>Hello Krjani</h1>
            {/* we dont write this here in events on functional componet */}
            <button onClick={handleClick}>Clicked me</button><br />
            <a href="https://www.google.com" onClick={handleClick}>GOOGLE</a>
            <h1>Author {props.name}</h1>
        </div>
    )
}
// export default Robot;

export default Human;