import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from "./Plan";
import { useState } from "react";
import { click } from '@testing-library/user-event/dist/click';

function App() {
  // const [itemList, setItemList] = useState([]);
  // const [item, setItem] = useState({text: '', id: itemList.length + 1, editItem:false});

  //declare state
  const [textInput, settextInput] = useState({text:"",items:[],editItem:false,id:Date.now()});
  // const [id,setId] = useState([textInput.items.length]);
  const[isEditItem,setIsEditItem] = useState(null);

  //handle change event
  const changeHandler = (event)=>{
    const {name,value} = event.target;
    settextInput({...textInput,[name]:value});
    // here we get array of items and we have to pass it one by one so we use map function.
  }

  //handle Add event
  const clickHandler = () =>{
    // if item.id
    
    // setItemList(items => {
    //   const existingItemIndex = items.findIndex(record => record.id === item.id);
    //   if(existingItemIndex !== -1) {
    //     items[existingItemIndex] = {...items[existingItemIndex], text: item.text};
    //   } else {
    //     items.push({...item});
    //   }
    //   return items;
    // })

    if(textInput.text !== "") {
        if(!textInput.editItem)
        {
          const id = textInput.id;
          const item = [...textInput.items,{id:id,text:textInput.text}];
          settextInput({["items"]:item,["text"]:"",["id"]:Date.now()}); 
        }
        else{
          const id = isEditItem;
          const item = [...textInput.items,{id:id,text:textInput.text}];
          settextInput({ ["items"]: item, ["text"]: "", ["id"]: Date.now()}); 
        }
      // else{
      //   settextInput(
      //     textInput.items.map((item)=>{
      //       if(item.id === isEditItem)
      //       {
      //         return {...item, text:textInput.text,id:isEditItem}
      //       }
      //       return item;
      //     })
      //   )
      // }
      }
      // assing id to newly created item 
       
      // Add text into userInput
      // set state
  }

  // delete Handler
  const delHandler = (id)=>{
    const oldItems = [...textInput.items];
    // filter acording id
    // filter(value,index,array)
    const newItems = oldItems.filter(values => values.id !== id);

    // set state 
    settextInput({["items"]:newItems,"text":""});
  }
  
  //Edit handler
  const editHandler = (id)=>{
    console.log("editing is done here",id);
    const oldItems = [...textInput.items];
    // filter according id
    const newItems = oldItems.filter(value => value.id !== id);
    const editItem = oldItems.find(value => value.id === id);
    setIsEditItem(id)
    settextInput({["items"]:newItems,"text":editItem.text,"editItem":true,"id":id});
  }
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
                  disabled={textInput.text === ""? true: false}
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
                        id ={value.id}
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
