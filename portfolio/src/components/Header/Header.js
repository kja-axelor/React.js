import React, { Component } from 'react'
import './header.css'
import Navlink from "../Navlink/Navlink";
export default function Header ()
{
    const links = ["Work","About","Blog","Contact"]
    return (
      <div className="header">
        <h2> <a href="/" className="name" > Kishan R. Jani </a> </h2>
        <ul className='links'>
        {
            <Navlink links={links}/>
        }
        </ul>
      </div>
    );
}