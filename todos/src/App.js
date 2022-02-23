import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Plan from "./Plan";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const addItem = () => {
    if (isEdit) {
      setItems(
        items.map((item) => {
          if (item.id === editId) {
            return {
              ...item,
              text: input,
            };
          }
          return item;
        })
      );
      setInput("");
      setIsEdit(false);
      setEditId(null);
    } else {
      const itemData = { id: new Date().getTime().toString(), text: input };
      setItems([...items, itemData]);
      setInput("");
    }
  };

  const delItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const editItem = (id) => {
    setIsEdit(true);
    let curEditItem = items.find((item) => item.id === id);
    setInput(curEditItem.text);
    setEditId(curEditItem.id);
  };
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 mx-auto text-white shadow-lg">
          <h1 className="text-center">What's plan for today?</h1>

          <div className="container-fluid">
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control my-2"
                  name="text"
                  value={input}
                  placeholder="write your task here!!!"
                  onChange={(e) => setInput(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="col-2 my-2">
                <button
                  disabled={input === "" ? true : false}
                  onClick={addItem}
                  className={
                    isEdit
                      ? "btn btn-primary px-5 fw-bold text-white"
                      : "btn btn-success px-5 fw-bold text-white"
                  }
                >
                  {isEdit ? "Edit" : "Add"}
                </button>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <h4>Tasks</h4>
            <div className="row">
              <div className="col-sm-10">
                <ul className="row list-unstyled">
                  {items.map((item, index) => {
                    return (
                      <Plan
                        value={item.text}
                        key={item.id}
                        id={item.id}
                        num={index + 1}
                        delItem={delItem}
                        editItem={editItem}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
