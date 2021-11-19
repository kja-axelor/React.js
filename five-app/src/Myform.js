import React, { Component } from 'react'

export default class Myform extends Component {
    state = {
        name:"",
        password:""
    };
     handlename = e => {
            this.setState({name:e.target.value});
    }
    handlepass = e => {
            this.setState({password:e.target.value});
    }
    handlechange = (e)=>{
        // console.log(e.target.name);
        // console.log([e.target.name]);
        // console.log(e.target.value);
        // here we have to give state as array
        this.setState({ [e.target.name] : e.target.value});
        
        // password should be uppercase.
        // const value = e.target.name === "password" ? e.target.value.toUpperCase() : e.target.value;
        // this.setState({ [e.target.name] : value});
    }
    handleSubmit = (e) =>{
        console.log(e);
        console.log(e.target); // all forms
        console.log(e.target[0]); // 1st field 
        console.log(e.target[1]); // 2nd field 
        console.log(e.target[0].value); // 1st field value
        console.log(e.target[1].value); // 2nd field value
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <label >
                        <br />
                        Name: <input type="text" value={this.state.name} onChange={this.handlechange} name="name"/>
                    </label>
                    <br /><br />
                    <label >
                        password: <input type="text" value={this.state.password} onChange={this.handlechange} name="password"/>
                    </label>
                    <br /><br />
                         <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
