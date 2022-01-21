import Items from "./components/Items";
import Cartlist from "./components/Cartlist";
import { useState, useEffect } from "react";
import { Container, Row, ToastContainer, Col } from "react-bootstrap";
import Tost from "./components/Tost";
import Menu from "./components/Menu";

function App() {
  const [cartItems, SetCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [tostItems, setTostItems] = useState([]);
  const [isAdd, setIsAdd] = useState(null);
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        let dataCategory = [];
        data.map((item) => {
          if (!dataCategory.includes(item.category)) {
            dataCategory.push(item.category);
          }
          return 0;
        });
        setData(data);
        setProducts(data);
        setCategory(dataCategory);
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

  const getFilterProducts = (key) => {
    if (key === "All") {
      return setProducts(data);
    }
    const result = data.filter((item) => {
      return item.category === key;
    });
    setProducts(result);
  };

  const sortProducts = (choice) => {
    setProducts((prevProduct) => {
      let listItems = [...prevProduct];
      listItems.sort((a, b) => {
        if (a[choice] < b[choice]) return -1;
        if (a[choice] > b[choice]) return 1;
        return 0;
      });
      return listItems;
    });
    setData((prevProduct) => {
      let listItems = [...prevProduct];
      listItems.sort((a, b) => {
        if (a[choice] < b[choice]) return -1;
        if (a[choice] > b[choice]) return 1;
        return 0;
      });
      return listItems;
    });
  };
  return (
    <div className="App">
      <Menu
        countCartItems={cartItems.length}
        getFilterProducts={getFilterProducts}
        category={category}
        onAdd={onAdd}
        onRemove={onRemove}
        cartItems={cartItems}
        sortProducts={sortProducts}
        products={products}
      />
      <Container fluid>
        <Row>
          <Items onAdd={onAdd} items={products} />
          <Col md={4} className="mt-4 pt-0 p-4">
            <Cartlist onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />
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
