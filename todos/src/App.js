import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Plan from "./Plan";
import { useState } from "react";

function App() {
  const [textInput, settextInput] = useState({
    text: "",
    items: [],
    editItem: false,
    id: Date.now(),
  });
  const [isEditItem, setIsEditItem] = useState(null);

  //handle change event
  const changeHandler = (event) => {
    const { name, value } = event.target;
    settextInput({ ...textInput, [name]: value });
  };

  //handle Add event
  const clickHandler = () => {
    if (textInput.text !== "" && !isEditItem) {
      const id = textInput.id;
      const item = [...textInput.items, { id: id, text: textInput.text }];
      settextInput({ ["items"]: item, ["text"]: "", ["id"]: Date.now() });
    }
    if (textInput.text !== "" && isEditItem) {
      settextInput(
        textInput.items.map((item) => {
          console.log(item);
          if (item.id === isEditItem)
            return { ...item, text: textInput.text, id: isEditItem };
          return item;
        })
      );
    }
  };

  // delete Handler
  const delHandler = (id) => {
    const oldItems = [...textInput.items];
    const newItems = oldItems.filter((values) => values.id !== id);
    settextInput({ ["items"]: newItems, text: "" });
  };

  //Edit handler
  const editHandler = (id) => {
    console.log("editing is done here", id);
    const oldItems = [...textInput.items];
    // filter according id
    const newItems = oldItems.filter((value) => value.id !== id);
    const editItem = oldItems.find((value) => value.id === id);
    setIsEditItem(id);
    settextInput({
      ["items"]: oldItems,
      text: editItem.text,
      editItem: true,
      id: id,
    });
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
                  value={textInput.text}
                  placeholder="write your task here!!!"
                  onChange={changeHandler}
                  autoFocus
                />
              </div>
              <div className="col-2 my-2">
                <button
                  disabled={textInput.text === "" ? true : false}
                  className={
                    textInput.editItem
                      ? "btn btn-primary px-5 fw-bold text-white"
                      : "btn btn-success px-5 fw-bold text-white"
                  }
                  onClick={clickHandler}
                >
                  {textInput.editItem ? "Edit" : "Add"}
                </button>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <h4>Tasks</h4>
            <div className="row">
              <div className="col-sm-10">
                <ul className="row list-unstyled">
                  {textInput.items.map((value, index) => {
                    return (
                      <Plan
                        value={value.text}
                        key={index}
                        num={index}
                        id={value.id}
                        delHandler={delHandler}
                        editHandler={editHandler}
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
