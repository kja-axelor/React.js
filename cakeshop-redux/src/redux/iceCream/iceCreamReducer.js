import { BUY_ICECREAM } from "./iceCreamActionTypes";

const inintialState = {
  numOfIceCream: 20,
};

const iceCreamReducer = (state = inintialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
