import React from 'react'

export default function Nextbutton(props) {
    const nexthandler = () => {
      props.setIsNext(true);
      props.buttonHandler();
    }
    return (
      <>
        <i className="fas fa-angle-down down" onClick={nexthandler} style={{'cursor':'pointer'}}></i>
      </>
    );
}
