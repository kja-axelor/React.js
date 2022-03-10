import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const NewCakeContainer = (props) => {
  const [qty, setQty] = useState(1);
  return (
    <div>
      <h1>CakeContainer - {props.numOfCakes}</h1>
      <input type="text" value={qty} onChange={(e) => setQty(e.target.value)} />
      <button onClick={() => props.buyCake(qty)}>Buy {qty} cake</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (num) => {
      return dispatch(buyCake(num));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
