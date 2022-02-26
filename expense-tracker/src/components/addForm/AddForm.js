import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { categoryList } from "../../categories";
import { addExpenses } from "../../redux/actions/expenseAction";
import "react-toastify/dist/ReactToastify.css";
import "./AddForm.css";
import SuccessModal from "./SuccessModal";

const AddForm = () => {
  const categories = categoryList;
  const [catOpen, setCatOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const handleCategory = (cat) => {
    setCategory(cat);
    setCatOpen(false);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter a valid detail");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpenses(data));
    setModalOpen(true);
  };
  return (
    <div className="add-form">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="form-item">
        <label>Title</label>
        <input
          type="text"
          placeholder="Give a name to your expendeture"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-item">
        <label>Amout ₹</label>
        <input
          type="text"
          placeholder="Enter expense amount"
          value={amount}
          className="amount-input"
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            if (isNaN(value)) {
              setAmount("");
              return;
            }
            setAmount(value);
          }}
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCatOpen(!catOpen)}
          >
            <label>{category ? `${category.title}` : "Category"}</label>
            <i className="fi-rr-angle-down"></i>
          </div>
          {catOpen ? (
            <div className="category-container">
              {categories.map((cat) => {
                return (
                  <div
                    className="category-item"
                    style={{ borderRight: `5px solid ${cat.color}` }}
                    key={cat.id}
                    onClick={() => handleCategory(cat)}
                  >
                    <label>{cat.title}</label>
                    <img src={cat.icon} alt={cat.title} />
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i className="fi-rr-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
