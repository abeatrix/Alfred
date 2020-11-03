import React from "react";
import { useHistory } from "react-router-dom";
import { isAuth, userInfoSearch } from '../../config/auth'
import {Navbar, Nav, Dropdown} from 'react-bootstrap'
import {GreenBtn, NavLogo} from './NavbarEle'
import Avatar from 'react-avatar';
import useFindUserInfo from '../../hooks/userFindUserInfo'

const MainNavbar = (props) => {

  const [userInfo, setUserInfo] = useFindUserInfo(props.userId);

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
            <Dropdown.Toggle variant="noCaret" id="dropdown-basic">
              { userInfo.data ?  <Avatar size="50" round={true} src={userInfo.data.profilePic} /> : <Avatar name="A"  size="50" round={true}  />}
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
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
