import { Provider } from "./Context";
import React, { useState } from "react";

export default function State(props) {
  const [cartItems, SetCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState(null);

  const context = {
    cartItems: [cartItems, SetCartItems],
    products: [products, setProducts],
    notifications: [notifications, setNotifications],
    category: [category, setCategory],
    sort: [sort, setSort],
  };
  return <Provider value={context}>{props.children}</Provider>;
}
