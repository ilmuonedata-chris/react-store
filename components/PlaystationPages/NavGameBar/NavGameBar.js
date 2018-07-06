import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class NavGameBar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <Navbar collapseOnSelect className="custom-nav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                <img src="../../../assets/images/psicon.png" width="60" height="60" alt=""/>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                GAMES
              </NavItem>
              <NavItem eventKey={2} href="#">
                PS4
              </NavItem>
              <NavItem eventKey={3} href="#">
                MOVIES
              </NavItem>
              <NavItem eventKey={4} href="#">
                TV
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="/travel">
                SEARCH
                <FontAwesome name="search" className="right-arrow"/>
              </NavItem>
              <NavItem eventKey={2} href="#">
                CART
                <FontAwesome name="shopping-bag" className="right-arrow" />
              </NavItem>
              <NavItem eventKey={2} href="#">
                LOGIN
                <FontAwesome name="user-circle-o" className="right-arrow" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
        <div className="gradient-line"></div>
      </div>
      
    )
  }
}

export default NavGameBar;