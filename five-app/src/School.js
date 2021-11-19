import React, { Component } from 'react'
import College from './College';
import './School.css';
import './College.css'
import Style from './College.module.css';
import Styles from './School.module.css';
export default class School extends Component {
    render() {
        let style = false;
        return (
            <React.Fragment>
                <h1 className="txtgreen txtsize">we can pass css class as a props</h1>
                <h3 className={Styles.txt}>Krjani is here!</h3>
                <h3 className={Style.txt}>Apple is here!</h3>
                <College color={style ? "txtgreen" : "txtred"}/>
            </React.Fragment>
        )
    }
}
