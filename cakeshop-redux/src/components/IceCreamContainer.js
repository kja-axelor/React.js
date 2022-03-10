import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h1>IceCreamContainer - {props.numOfIceCream}</h1>
      <button onClick={props.buyIceCream}>Buy a IceCream</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => {
      return dispatch(buyIceCream());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
