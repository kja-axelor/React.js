import { ActionTypes } from "../constants/Action-types";

const initialList = () => {
  const list = localStorage.getItem("expense-list");
  let expenseList = [];
  if (list) {
    expenseList = JSON.parse(list);
  }
  return expenseList;
};
const initialState = {
  expense: initialList(),
  query: "",
};
export const addExpenseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_EXPENSE:
      localStorage.setItem(
        "expense-list",
        JSON.stringify([...state.expense, payload])
      );
      return {
        ...state,
        expense: [...state.expense, payload],
      };
    case ActionTypes.DELETE_EXPENSE:
      const data = payload;
      const updatedList = state.expense.filter(
        (item) => item.createdAt !== data.createdAt
      );
      localStorage.setItem("expense-list", JSON.stringify(updatedList));
      return { ...state, expense: updatedList };
    case ActionTypes.SEARCH_EXPENSE: {
      return {
        ...state,
        query: payload,
      };
    }
    default:
      return state;
  }
};
