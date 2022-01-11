import React from 'react'

export default function Prevbutton(props) {
    const prevhandler = () => {
        props.onPrev();
    }
    return (
      <>
        <i className="fas fa-angle-up up" onClick={prevhandler}></i>
      </>
    );
}
