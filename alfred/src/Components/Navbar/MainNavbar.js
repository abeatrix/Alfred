import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { isAuth } from '../../config/auth'
import {Navbar, Nav, NavDropdown, Form, Button, FormControl, DropdownButton, Dropdown} from 'react-bootstrap'
import {WhiteBtn, GreenBtn, NavLogo} from './NavbarEle'

const MainNavbar = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    if(!isAuth()){
        history.push('/')
    }
  }

  return (
    <Navbar style={{backgroundColor: 'black'}} variant='dark' expand="lg">
      <Navbar.Brand href="#home"><NavLogo>Alfred</NavLogo></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        {isAuth() ?
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              Profile Picture
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Portfolio</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Paper Trade</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        :
        <GreenBtn>Sign In</GreenBtn>
        }
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
