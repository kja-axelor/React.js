import { ActionTypes } from "../constants/Action-types";

export const addExpenses = (expense) => {
  console.log(expense);
  return {
    type: ActionTypes.ADD_EXPENSE,
    payload: expense,
  };
};

export const deleteExpense = (expense) => {
  return {
    type: ActionTypes.DELETE_EXPENSE,
    payload: expense,
  };
};

export const searchExpense = (query) => {
  return {
    type: ActionTypes.SEARCH_EXPENSE,
    payload: query,
  };
};
