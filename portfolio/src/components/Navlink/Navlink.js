import React from 'react'
import "./navlink.css";

export default function Navlink(props){
    return (
        <li>
            <a href="/">{props.link}</a>
        </li>
    )
}