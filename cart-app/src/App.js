import Items from "./components/Items/Items";
import Cart from "./components/Cart/Cart";
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  ToastContainer,
  Col,
  ListGroupItem,
} from "react-bootstrap";
import Tost from "./components/Tost/Tost";
import Menu from "./components/Menu/Menu";

function App() {
  const [cartItems, SetCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [tostItems, setTostItems] = useState([]);
  const [isAdd, setIsAdd] = useState(null);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const onAdd = (item) => {
    setIsAdd(true);
    setTostItems([
      ...tostItems,
      { id: item.title + Math.random(), name: item.title },
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
      { id: item.title + Math.random(), name: item.title },
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

  const filterCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const getFilterProducts = () => {
    if (category === "All") {
      return products;
    }
    return products.filter((item) => {
      return item.category === category;
    });
  };

  const sortProducts = (choice) => {
    const listItems = getFilterProducts();
    if (choice === "title") {
      listItems.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      });
      console.log(listItems);
    }
    if (choice === "category") {
      listItems.sort((a, b) => {
        if (a.category.toLowerCase() < b.category.toLowerCase()) return -1;
        if (a.category.toLowerCase() > b.category.toLowerCase()) return 1;
        return 0;
      });
      console.log(listItems);
    }
    if (choice === "price") {
      listItems.sort((a, b) => {
        return a.price - b.price;
      });
      console.log(listItems);
    }
  };
  return (
    <div className="App">
      <Menu
        countCartItems={cartItems.length}
        filterCategory={filterCategory}
        category={category}
        onAdd={onAdd}
        onRemove={onRemove}
        cartItems={cartItems}
        sortProducts={sortProducts}
      />
      <Container fluid>
        <Row>
          <Items onAdd={onAdd} items={getFilterProducts()} />
          <Col md={4} className="mt-4 pt-0 p-4">
            <Cart onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />
          </Col>
        </Row>
        <ToastContainer position="bottom-end">
          <Tost
            handleToastClose={handleToastClose}
            tostItems={tostItems}
            isAdd={isAdd}
          />
        </ToastContainer>
      </Container>
    </div>
  );
}

export default App;
