import React from "react";
import ExpenseList from "../expenseList/ExpenseList";
import Topfold from "../topfold/Topfold";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Topfold />
      <ExpenseList />
    </div>
  );
};

export default Home;
