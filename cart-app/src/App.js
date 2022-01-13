import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Cart from "./components/Cart/Cart";
import Data from "./components/Data/Data";
import { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Tost from "./components/Tost/Tost";

function App() {
  const [cartItems, SetCartItems] = useState([]);
  const [tostItems, setTostItems] = useState([]);
  const [isAdd, setIsAdd] = useState(null);

  const onAdd = (item) => {
    setIsAdd(true);
    setTostItems([
      ...tostItems,
      { id: item.name + Math.random(), name: item.name },
    ]);
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      SetCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      SetCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const onRemove = (item) => {
    setIsAdd(false);
    setTostItems([
      ...tostItems,
      { id: item.name + Math.random(), name: item.name },
    ]);
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      SetCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      SetCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const handleToastClose = (id) => {
    return setTostItems(tostItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <Items onAdd={onAdd} items={Data} />
        <Cart
          onAdd={onAdd}
          cartItems={cartItems}
          onRemove={onRemove}
          countCartItems={cartItems.length}
        />
      </div>
      <ToastContainer position="top-end" className="p-1">
        <Tost
          handleToastClose={handleToastClose}
          tostItems={tostItems}
          isAdd={isAdd}
        />
      </ToastContainer>
    </div>
  );
}

export default App;
