import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { isAuth, userInfoSearch } from '../../config/auth'
import {Navbar, Nav, NavDropdown, Form, Button, FormControl, DropdownButton, Dropdown} from 'react-bootstrap'
import {WhiteBtn, GreenBtn, NavLogo} from './NavbarEle'
import Avatar from 'react-avatar';

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
      <Navbar.Brand href="/"><NavLogo>Alfred</NavLogo></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        {isAuth() ?
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              { userInfoSearch() ? <Avatar name="{userInfo.data.username}" size="150" /> : <Avatar size="50" round={true} src={"https://www.flaticon.com/svg/static/icons/svg/595/595555.svg"} />}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/portfolio">Portfolio</Dropdown.Item>
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
