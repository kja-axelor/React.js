import React from "react";
import AddForm from "../addForm/AddForm";
import Topfold from "../topfold/Topfold";
import "./AddExpense.css";

const AddExpense = () => {
  return (
    <div className="add-expense">
      <Topfold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
