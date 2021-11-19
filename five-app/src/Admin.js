import React, { Component } from 'react'
import Guest from './Guest'
import User from './User'

export default class Admin extends Component {
    state = {
        name:"krjani is the best",
        value:7
    }
    render() {
        return <div>
            <Guest value={this.state.value}/>
            <User squre={this.state.value} />
            </div>
    }
}