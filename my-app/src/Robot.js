import React, { Component } from 'react'

class Robot extends Component{
    // state without constructor
    state = {
        name:'krjani',
        id:1
    };

    // Event handler
    // e will be event handler (by defalut react wii give)
    handleClick = (id,e)=>{
        console.log("Delete Clicked",id,e);
    };

    // Arrow function to pass data(Dummy Object)
    handleClicking = (e) =>{
        this.handleClick(this.state.id,e);
    }
    render(){
        return(
            <div>
                <h1>Hello,{this.state.name}</h1>
                {/* data passing to the handler */}
                {/* this.handleClicking = (e) =>{
                        this.handleClick(this.state.id,e);
                        } 
                Bind method will bind argument to handler function
    */}
                <button onClick={this.handleClick.bind(this,this.state.id)}
                >Delete</button>
            </div>
        )
    }
}

export default Robot;