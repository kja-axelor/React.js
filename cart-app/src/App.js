import Items from "./components/Items";
import Cartlist from "./components/ItemCard/Cartlist";
import { useEffect, useMemo, useContext } from "react";
import { Container, Row, ToastContainer, Col } from "react-bootstrap";
import Notification from "./components/Notification";
import Menu from "./components/Menu";
import { myContext } from "./context/Context";

function App() {
  const data = useContext(myContext);
  const [cartItems, SetCartItems] = data.cartItems;
  const [products, setProducts] = data.products;
  const [notifications, setNotifications] = data.notifications;
  const [category, setCategory] = data.category;
  const [sort, setSort] = data.sort;

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  });

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

  const sortData = (sort, $product) => {
    const { name, order } = sort;
    return $product.sort((a, b) => {
      if (a[name] > b[name]) return order === "asc" ? 1 : -1;
      if (a[name] < b[name]) return order === "asc" ? -1 : 1;
      return 0;
    });
  };

  const $product = useMemo(() => {
    const $product = getFilterProducts(products, category);
    if (sort) {
      sortData(sort, $product);
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
    setNotifications([
      ...notifications,
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
    setNotifications([
      ...notifications,
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
    return setNotifications(notifications.filter((item) => item.id !== id));
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
            notifications={notifications}
          />
        </ToastContainer>
      </Container>
    </div>
  );
}

export default App;
