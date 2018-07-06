import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import {HashRouter as Router, Link} from 'react-router-dom'


class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Travelly</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/travel">
              Travel
            </NavItem>
            <NavItem eventKey={2} href="#">
              Profile
            </NavItem>
            <NavItem eventKey={3} href="#">
              My Booking
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar;