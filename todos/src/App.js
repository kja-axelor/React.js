import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from "./Plan";
import { useState } from "react";

function App() {
  //declare state
  const [textInput, settextInput] = useState({"text":"","items":[]});

  //handle change event
  const changeHandler = (event)=>{
    const {name,value} = event.target;
    settextInput({...textInput,[name]:value});
    // here we get array of items and we have to pass it one by one so we use map function.
  }

  //handle click event
  const clickHandler = () =>{
    if(textInput.text !== ""){
      // Add into text into userInput
      const item = [...textInput.items,textInput.text];
      // set state
      settextInput({["items"]:item,["text"]:""});
    }
  }

  // delete Handler
  const delHandler = (id)=>{
    const oldItems = [...textInput.items];
    // filter acording id
    // filter(value,index,array)
    const newItems = oldItems.filter((values,index) => index !== id);

    // set state 
    settextInput({["items"]:newItems});
  }
  
  //Edit handler
  const editHandler = (id)=>{
    console.log("editing is done here",id);
    const oldItems = [...textInput.items];
    // filter according id
    const newItems = oldItems.filter((value,index)=> index !== id);
    const editItem = oldItems.find((value,index)=> index === id);
    settextInput({["items"]:oldItems,"text":editItem});
  }
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 mx-auto text-white shadow-lg">
          <h1 className="text-center">What's plan for today?</h1>

          <div className="container-fluid">
            <div className="row">
              <div className="col-9">
                <input type="text" className="form-control my-2" name="text" value={textInput.text} placeholder="write your task here!!!" onChange={changeHandler} autoFocus />
              </div>
              <div className="col-2 my-2">
                <button className="btn btn-secondary px-5 fw-bold text-white" onClick={clickHandler} >
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
                    {textInput.items.map((value, i) => {
                      return ( 
                      <Plan value={value} key={i} id={i} delHandler={delHandler} editHandler={editHandler} 
                      /> );
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
