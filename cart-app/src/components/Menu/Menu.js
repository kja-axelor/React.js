import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Badge,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import Cart from "../Cart/Cart";
export default function Menu(props) {
  const {
    countCartItems,
    filterCategory,
    category,
    onAdd,
    onRemove,
    cartItems,
  } = props;
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Axelor POS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => filterCategory("All")}
              active={category === "All"}
            >
              All
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                filterCategory("fruit");
              }}
              active={category === "fruit"}
            >
              Fruits
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                filterCategory("vegetable");
              }}
              active={category === "vegetable"}
            >
              Vegetables
            </Nav.Link>
          </Nav>
        </Container>

        <Container className="justify-content-end navbar-collapse collapse">
          <span className="navbar-text">
            <span>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover>
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
                <span
                  className="cart-icon"
                  tabIndex="1"
                  style={{ cursor: "pointer" }}
                >
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
                        fontSize: ".65rem!important",
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
            </span>
          </span>
        </Container>
      </Navbar>
    </>
  );
}
