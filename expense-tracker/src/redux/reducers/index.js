import { combineReducers } from "redux";
import { addExpenseReducer } from "./expenseReducer";

export const reducer = combineReducers({
  addExpense: addExpenseReducer,
});
