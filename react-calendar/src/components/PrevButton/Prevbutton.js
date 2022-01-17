import React from 'react'

export default function Prevbutton(props) {
    const prevhandler = () => {
        props.buttonHandler();
    }
    return (
      <>
        <i className="fas fa-angle-up up" onClick={prevhandler} style={{'cursor':'pointer'}}></i>
      </>
    );
}
