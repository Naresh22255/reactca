import React, { Component } from "react";
import { Navlink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" expands="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Navlink className="d-inline p-2 bg-dark-gray text-white" to="/">
              Home
            </Navlink>
            <Navlink
              className="d-inline p-2 bg-dark-gray text-white"
              to="/contact"
            >
              Contact
            </Navlink>
          </Nav>
        </Navbar.Collapse>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
    );
  }
}
