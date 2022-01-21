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
import { Cart } from "react-bootstrap-icons";
import Cartlist from "../Cartlist/Cartlist";

export default function Menu(props) {
  const {
    countCartItems,
    getFilterProducts,
    category,
    onAdd,
    onRemove,
    cartItems,
    sortProducts,
  } = props;
  const sortCategories = [
    {
      eventKey: "title",
      title: "By Title",
    },
    {
      eventKey: "price",
      title: "By Price",
    },
    {
      eventKey: "category",
      title: "By Category",
    },
  ];
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
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
          </Nav>
          <Nav>
            <NavDropdown
              title="Sort"
              id="nav-dropdown"
              onSelect={(key) => sortProducts(key)}
            >
              {sortCategories.map(({ eventKey, title }) => {
                return (
                  <NavDropdown.Item eventKey={eventKey} key={eventKey}>
                    {title}
                  </NavDropdown.Item>
                );
              })}
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => sortProducts("id")}>
                Clear
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

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
                      <Cartlist
                        onAdd={onAdd}
                        cartItems={cartItems}
                        onRemove={onRemove}
                      />
                    </Popover.Body>
                  </Popover>
                }
              >
                <span
                  tabIndex="1"
                  style={{ cursor: "pointer" }}
                  className="me-2"
                >
                  <Cart />
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
        </Container>
      </Navbar>
    </>
  );
}
