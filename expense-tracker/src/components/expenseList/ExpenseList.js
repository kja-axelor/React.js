import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Card from "./Card";
import "./ExpenseList.css";

const ExpenseList = () => {
  const { expense, query } = useSelector((state) => state.addExpense);
  const filteredList = expense.filter((item) => item.title.includes(query));
  const notifySuccess = () => toast.success("Expense Deleted!");
  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((item, index) => (
          <Card key={index} item={item} notifySuccess={notifySuccess} />
        ))
      ) : (
        <div className="empty-state">
          <img
            src={require("../../assets/images/empty.png")}
            alt="empty list"
            className="empty-image"
          ></img>
          <label>Uh No! Your ExpenseList is empty!</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
