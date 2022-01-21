import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./menu.css";
import {
  Badge,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import Cart from "../Cart/Cart";
export default function Menu(props) {
  const {
    countCartItems,
    getFilterProducts,
    category,
    onAdd,
    onRemove,
    cartItems,
    sortProducts,
    products,
  } = props;
  console.log(category);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Axelor POS</Navbar.Brand>
          <Nav
            className="me-auto"
            onSelect={(key) => getFilterProducts(key)}
            defaultActiveKey={"All"}
          >
            <Nav.Link eventKey={"All"}>All</Nav.Link>
            {category.map((cat) => {
              return (
                <Nav.Link key={cat} eventKey={cat}>
                  {cat}
                </Nav.Link>
              );
            })}
            <NavDropdown
              title="Sort"
              id="nav-dropdown"
              onSelect={(key) => sortProducts(key)}
            >
              <NavDropdown.Item eventKey="title">By Title</NavDropdown.Item>
              <NavDropdown.Item eventKey="price">By Price</NavDropdown.Item>
              <NavDropdown.Item eventKey="category">
                By Category
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4">Clear</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={
                <Popover
                  style={{
                    minWidth: "320px",
                  }}
                >
                  <Popover.Header as="h3">Cart</Popover.Header>
                  <Popover.Body>
                    <Cart
                      onAdd={onAdd}
                      cartItems={cartItems}
                      onRemove={onRemove}
                    />
                  </Popover.Body>
                </Popover>
              }
            >
              <span tabIndex="1" style={{ cursor: "pointer" }} className="me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                {countCartItems ? (
                  <Badge
                    pill
                    bg="danger"
                    style={{
                      fontSize: ".65rem",
                      left: "-5px",
                      position: "relative",
                      top: "-10px",
                      cursor: "pointer",
                    }}
                  >
                    {countCartItems}
                  </Badge>
                ) : (
                  ""
                )}
              </span>
            </OverlayTrigger>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
