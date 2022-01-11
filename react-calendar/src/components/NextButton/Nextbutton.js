import React from 'react'
import "./nextbutton.css";

export default function Nextbutton(props) {
    const nexthandler = () => {
      props.onNext();
    }
    return (
      <>
        <i className="fas fa-angle-down down" onClick={nexthandler}></i>
      </>
    );
}
