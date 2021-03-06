import React from "react";
import { isAuth } from '../../config/auth'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {WhiteBtn, GreenBtn} from './NavbarEle'

const TopNavbar = () => {
  return (
    <Navbar style={{backgroundColor: 'black'}} variant='dark' expand="lg">
      <Navbar.Brand href="/">Alfred</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {isAuth() ?
        <WhiteBtn>Sign Out</WhiteBtn>
        // <Form inline>
        //   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        //   <Button variant="outline-light">Search</Button>
        // </Form>
        :
        <GreenBtn>Sign In</GreenBtn>
        }

      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
