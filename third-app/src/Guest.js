import React, { Component } from 'react'

export default class Guest extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome Guest</h1>
                <button type="button" onClick={this.props.clickdata}>login</button> <button>signup</button>
            </React.Fragment>
        )
    }
}
