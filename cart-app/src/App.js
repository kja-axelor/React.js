import Items from "./components/Items";
import Cartlist from "./components/ItemCard/Cartlist";
import { useState, useEffect, useMemo } from "react";
import { Container, Row, ToastContainer, Col } from "react-bootstrap";
import Notification from "./components/Notification";
import Menu from "./components/Menu";

function App() {
  const [cartItems, SetCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [tostItems, setTostItems] = useState([]);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState(null);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  function toCamelCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const $categories = useMemo(() => {
    let dataCategory = [];
    products.forEach((product) => {
      if (!dataCategory.find((c) => c.id === product.category)) {
        dataCategory.push({
          title: toCamelCase(product.category) + "s",
          id: product.category,
        });
      }
    });
    dataCategory.push({
      title: "All",
      id: "All",
    });
    return dataCategory;
  }, [products]);

  const getFilterProducts = (products, category) => {
    if (category === "All") {
      return products;
    }
    const result = products.filter((product) => {
      return product.category === category;
    });
    return result;
  };

  const $product = useMemo(() => {
    const $product = getFilterProducts(products, category);
    if (sort) {
      const { name, order } = sort;
      return $product.sort((a, b) => {
        if (a[name] > b[name]) return order === "asc" ? 1 : -1;
        if (a[name] < b[name]) return order === "asc" ? -1 : 1;
        return 0;
      });
    }
    return $product;
  }, [products, category, sort]);

  const onLinkClick = (id) => {
    setCategory(id);
  };

  const onSortClick = (obj) => {
    setSort(obj);
  };
  const onAdd = (item) => {
    setTostItems([
      ...tostItems,
      {
        id: item.title + Math.random(),
        name: item.title,
        description: "Added successfully!",
      },
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
    setTostItems([
      ...tostItems,
      {
        id: item.title + Math.random(),
        name: item.title,
        description: "Removed successfully!",
      },
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

  const renderCart = () => {
    return <Cartlist onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />;
  };

  return (
    <div className="App">
      <Menu
        countCartItems={cartItems.length}
        categories={$categories}
        renderCart={renderCart}
        products={products}
        onLinkClick={onLinkClick}
        setSort={setSort}
        sort={sort}
        category={category}
        onSortClick={onSortClick}
      />
      <Container fluid>
        <Row>
          <Col md={8} className="p-4 pt-0">
            <Items onAdd={onAdd} items={$product} />
          </Col>
          <Col md={4} className="mt-4 pt-0 p-4">
            {renderCart()}
          </Col>
        </Row>
        <ToastContainer position="bottom-end">
          <Notification
            handleToastClose={handleToastClose}
            tostItems={tostItems}
          />
        </ToastContainer>
      </Container>
    </div>
  );
}

export default App;
