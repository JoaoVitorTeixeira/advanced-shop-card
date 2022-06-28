import React from 'react';
import {
  Navbar as NavbarBs, Container, Nav, NavLink, Button,
} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          style={{ width: '3rem', height: '3rem', position: 'relative' }}
          className="rounded-circle"
        >
          <FaShoppingCart />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: 'white',
              width: '1.5rem',
              height: '1.5rem',
              position: 'absolute',
              top: '0',
              right: '0',
              transform: 'translate(50%, 120%)',
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
