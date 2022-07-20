import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'react-bootstrap/Image'
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';

import { useTodoContext } from "../Provider/TodoProvider";

function NavBar() {
  const { getAllData } = useTodoContext();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>
        <Image
          src="/logo-demo.png"
          width={60}
          height={50}
          alt="171x180" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav >
            <Nav.Link>
              <Button variant="info" onClick={() => getAllData()}>Info</Button>{' '}
            </Nav.Link>
            <Nav.Link eventKey={2}  as={Link} to={"/TodoForm"}>
              <h4>+</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;