import React from 'react'

export default function Contactlink(props) {
    return (
        <a href={props.link} target="_blank" rel='noreferrer'>
            <i className={props.class}></i>
        </a>
    )
}
