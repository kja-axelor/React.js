import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Cart from "./components/Cart/Cart";
import Data from "./components/Data/Data";
import { useState } from "react";
function App() {
  const [cartItems,SetCartItems] = useState([]);
  
  const onAdd = (item) => {
    const exist = cartItems.find(x => x.id === item.id);
    if(exist)
    {
      SetCartItems(cartItems.map(x => x.id === item.id ? {...exist,qty: exist.qty + 1}: x));
    }
    else{
      SetCartItems([...cartItems,{...item,qty:1}]);
    }
  }
  
  const onRemove = (item) => {
    const exist = cartItems.find(x => x.id === item.id);
    if (exist.qty === 1) {
      SetCartItems(cartItems.filter(x => x.id !== item.id));
    } else {
      SetCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <Items onAdd={onAdd} items={Data} />
        <Cart onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}
          countCartItems={cartItems.length}/>
      </div>
    </div>
  );
}

export default App;
