import React, { Component } from 'react'
import Son from './Son';

export default class Father extends Component {
    constructor(){
        super();
        this.state = {
            salary:100
        };
    }
    clickHandle = ()=>{
        console.log('button clicked');
        this.setState({salary:this.state.salary + 1000});
    }
    render() {
        console.log("Father renderd");
        return (
            <div>
                {/* child component */}
                <Son salary={this.state.salary}/>
                <button onClick={this.clickHandle}>Change</button>
            </div>
        )
    }
}
