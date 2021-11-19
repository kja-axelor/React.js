import React, { Component } from 'react'
import Price from './Price';

export default class Company extends Component {
    render() {
        console.log("Company Rendered[child of Product]");
        return (
            <div>
                <h1>Hello Company {this.props.name}</h1>
                {/* child component */}
                <Price cost="150$"/>
            </div>
        );
    }
}
