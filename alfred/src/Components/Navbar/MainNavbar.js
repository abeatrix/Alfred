import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { isAuth, userInfoSearch } from '../../config/auth'
import {Navbar, Nav, Dropdown, Form, Modal, Button, Row, Col } from 'react-bootstrap'
import {GreenBtn, NavLogo} from './NavbarEle'
import Avatar from 'react-avatar';
import useFindUserInfo from '../../hooks/userFindUserInfo'
import { useRecoilState } from "recoil";
import {userState} from '../../recoil/atoms'
import UserModel from '../../Model/UserModel'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editing Profile Info
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.user.data.username}</h4>
        <p>
          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={props.user.data.email} />
              </Col>
            </Form.Group>
            <Form.Group controlId="username">
              <Form.Control type="username" name="username" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" name="passowrd" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
            </Form.Group>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Profile Picture" />
            </Form.Group>
            <Button variant="primary" onClick={props.onHide} type="submit">
              Submit
            </Button>
          </Form>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <small>We'll never share your account info with anyone else - The Alfred Team</small>
      </Modal.Footer>
    </Modal>
  );
}


const MainNavbar = (props) => {

  const [userInfo, setUserInfo] = useFindUserInfo(props.userId);

  const [user, setUser] = useRecoilState(userState);

  const [modalShow, setModalShow] = React.useState(false);

  const history = useHistory();


  const logout = () => {
    setUser(null);
    localStorage.clear();
    if(!isAuth()){
        history.push('/')
        setUser(null);
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
              { user && user.data ?  <Avatar size="50" round={true} src={user.data.profilePic} /> : <Avatar name="A"  size="50" round={true}  />}
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item onClick={() => setModalShow(true)}>Profile</Dropdown.Item>
              <MyVerticallyCenteredModal
                show={modalShow}
                user={user}
                onHide={() => setModalShow(false)}
              />
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
