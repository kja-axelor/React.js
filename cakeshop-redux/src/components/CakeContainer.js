import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h1>CakeContainer - {props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy a cake</button>
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
    buyCake: () => {
      return dispatch(buyCake());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
