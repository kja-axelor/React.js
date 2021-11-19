import React, { Component } from 'react'
import User from './User';

export default class Key extends Component {
    render() {
        const arr = this.props.arr;
        const newArr = arr.map((val)=>{
            return <User key={val} value={val}/>
        })
        return (
            <React.Fragment>
                <ul>{newArr}</ul>
            </React.Fragment>
        )
    }
}
