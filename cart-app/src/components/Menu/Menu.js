import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";
import {
  Badge,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Cart, SortDown, SortUp } from "react-bootstrap-icons";

export default function Menu(props) {
  const {
    countCartItems,
    categories,
    renderCart,
    onLinkClick,
    onSortClick,
    sort,
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

          <Nav className="me-auto" defaultActiveKey="All">
            {categories.map((cat) => {
              return (
                <Nav.Link
                  key={cat.id}
                  onClick={() => onLinkClick(cat.id)}
                  eventKey={cat.id}
                >
                  {cat.title}
                </Nav.Link>
              );
            })}
          </Nav>

          <Nav>
            <NavDropdown title="Sort" id="nav-dropdown">
              {sortCategories.map(({ eventKey, title }) => {
                const active = sort && sort.name === eventKey;
                return (
                  <NavDropdown.Item
                    key={eventKey}
                    className={active ? "active" : ""}
                    onClick={() => {
                      onSortClick({
                        name: eventKey,
                        order: active && sort.order === "asc" ? "desc" : "asc",
                      });
                    }}
                  >
                    {title}{" "}
                    {active &&
                      (sort.order === "asc" ? <SortUp /> : <SortDown />)}
                  </NavDropdown.Item>
                );
              })}
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() =>
                  onSortClick({
                    name: "id",
                    order: "asc",
                  })
                }
              >
                Clear
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ cursor: "pointer" }}>
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
                    <Popover.Body>{renderCart()}</Popover.Body>
                  </Popover>
                }
              >
                <span tabIndex="1" className="me-2">
                  <Cart />
                  {countCartItems ? (
                    <Badge pill bg="danger" className="badge-icon">
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
