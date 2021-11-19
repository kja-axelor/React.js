import React, { Component } from 'react'

export default class Callbackref extends Component {
    constructor(){
        super();
        // ref
        this.backRef = null;
        // method which set DOM element into ref.
        this.setBackRef = (element) =>{
            this.backRef = element;
        }
    }
    componentDidMount() {
        // console.log(this.backRef.value);
        this.backRef.focus();
    }
    
    render() {
        return (
            <form action="">
                Name: <input type="text"  ref={this.setBackRef}/>
                <br /><br />
                password: <input type="text" />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
