import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return(
            <React.Fragment>
                <li>{this.props.value}</li>
                {/* <li>{this.props.key}</li> this will get error */}
            </React.Fragment>
        )
    }
}
