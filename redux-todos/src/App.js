import { useState } from "react";
import { add, removeAll, del } from "./actions";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const [text, setText] = useState("");
  const dataList = useSelector((state) => state.reducers.dataList);
  const dispatch = useDispatch();

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
                  placeholder="write your task here!!!"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                  autoFocus
                />
              </div>
              <div className="col-2 my-2">
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(add(text), setText(""))}
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <h4>Tasks</h4>
            <div className="row">
              <div className="col-sm-10">
                <ul className="row list-unstyled">
                  {dataList.map((item) => {
                    console.log(item.id);
                    return (
                      <>
                        <li key={item.id} className="shadow p-2 my-2 col-sm-9">
                          {item.text}
                        </li>
                        <button
                          className="btn btn-danger my-2 col-sm-1 mx-4"
                          onClick={() => dispatch(del(item.id))}
                        >
                          X
                        </button>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary my-2"
            onClick={() => dispatch(removeAll())}
          >
            removeAll
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
