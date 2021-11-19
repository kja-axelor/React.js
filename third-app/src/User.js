import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome {this.props.name}</h1>
                <button type="button" onClick={this.props.clickdata}>logout</button>
            </React.Fragment>
        )
    }
}
