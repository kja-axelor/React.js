import React, { Component } from 'react'

class People extends Component{
    // without constructor state 
    // is also called a property of class
    // we can put arrays and obejcts in state also
    // here we use this.state instead of this.props
    state={
        name:"krjani",
        // this are called properties
        roll:this.props.roll
    };
    render(){
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>RollNumber {this.state.roll}</h1>
                <h1>ROll {this.props.roll}</h1>
            </div>
        );
    }
}

// inside constructor states 
class GEC extends Component{
    constructor(props){
        super(props);
        // here we define state with this,, this.state
        this.state={
             name:"krjani",
            // this are called properties
            roll:this.props.roll
        };
    }
    render(){
         return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>RollNumber {this.state.roll}</h1>
                <h1>ROll {this.props.roll}</h1>
            </div>
        );
    }
}
export default GEC;