import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  // useSelector hook === mapStateToProps
  //   useSelector(mapStateToProps)
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  //  useDispatch hook === mapDispatchToProps
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Cakeshop {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>BuyCake</button>
    </div>
  );
};

export default HooksCakeContainer;
