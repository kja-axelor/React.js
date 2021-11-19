import React, { Component } from 'react'

export default class Price extends Component {
    render() {
        console.log("Price Rendered[child of Company]");
        return (
            <div>
                <h1>Hello from Price!! cost is {this.props.cost}</h1>
            </div>
        )
    }
}
