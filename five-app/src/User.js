import React, { Component } from 'react'
import Admin from './Admin'
export default class User extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.squre * this.props.squre}</h1>
            </div>
        )
    }
}
