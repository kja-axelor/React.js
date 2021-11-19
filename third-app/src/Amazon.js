import React, { Component } from 'react'
import Prime from './Prime';

export default class Amazon extends Component {
    render() {
        const primeMember = this.props.primeMember;
        return (
            <React.Fragment>
                <h1>Welcome user</h1>
                {primeMember && <Prime />}
            </React.Fragment>
        )
    }
}
