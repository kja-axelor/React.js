import React, { Component } from 'react'

export default class form extends Component {
    state = {
        value:"your name",
        text:"write something about you!"
    };
    handletxt = (event) => {
        // console.log('target is',event.target);
        // console.log('target name is ',event.target.name);
        // console.log('target value is ',event.target.value);
        this.setState({value:event.target.value.toUpperCase().substr(0,10)});
    }
    handlearea = (event) =>{
        this.setState({text:event.target.value})
    }
    render() {
        return (
            <div>
                <form action="">
                    <h1>Controlled by React</h1>
                    <input type="text" value={this.state.value} onChange={this.handletxt}  name="name"/><br /><br />
                    <textarea value={this.state.text} onChange={this.handlearea} cols="50" rows="10"></textarea>
                </form>
            </div>
        )
    }
}
