import { BUY_CAKE } from "./cakeActionType";

export const buyCake = (qty = 1) => {
  return {
    type: BUY_CAKE,
    payload: qty,
  };
};
