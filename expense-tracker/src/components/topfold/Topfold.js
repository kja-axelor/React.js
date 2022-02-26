import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchExpense } from "../../redux/actions/expenseAction";
import "./Topfold.css";

const Topfold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i className="fi-rr-search"></i>
            <input
              type="text"
              placeholder="search for expenses"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                dispatch(searchExpense(e.target.value));
              }}
            />
          </div>
          <Link to="/add-expense">
            <div className="add-button">
              <i className="fi-rr-add"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
              <i className="fi-rr-angle-left"></i>
              <label>Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-button">
              <i className="fi-rr-cross-circle"></i>
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Topfold;
