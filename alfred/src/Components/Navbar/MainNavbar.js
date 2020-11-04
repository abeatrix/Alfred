import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { isAuth, userInfoSearch } from '../../config/auth'
import { ToastContainer, toast } from 'react-toastify';
import {Navbar, Nav, Dropdown, Form, Modal, Button, Row, Col } from 'react-bootstrap'
import {GreenBtn, NavLogo} from './NavbarEle'
import Avatar from 'react-avatar';
import useFindUserInfo from '../../hooks/userFindUserInfo'
import { useRecoilState } from "recoil";
import {userState} from '../../recoil/atoms'
import {Cloudinary} from 'cloudinary-core';
import axios from 'axios';

const url = process.env.REACT_APP_CLOUDINARY_API_URL
const preset = process.env.REACT_APP_CLOUDINARY_PRESETS

function MyVerticallyCenteredModal(props) {

  const [formData, setFormData] = useState({
    username: props.user.data.username,
    password: '',
    profilePic: props.user.data.profilePic,
  });

  const { email, username, password, profilePic} = formData

  const handleInput = text => e => {
      setFormData({...formData, [text]: e.target.value, submitted: false,})
  }

  const handleSubmit = (e) => {
    console.log('submit')
    e.preventDefault();
    axios.put(`${process.env.REACT_APP_BACKEND_USER_API_URL}/${props.user.data._id}`, {
        email,
        username,
        password,
        profilePic
    }).then(res => {
      props.setUser({
        ...props.user,
        username: username,
      })
      props.setUserInfo(props.user.data._id)
    }).catch(err => {
        {(err.response) ? toast.error(err.response.data.errors) : toast.error('Try Again')}
        return <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        console.log(err)
    });


}


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editing Profile Info for {props.user.data.username}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{textAlign: "center"}}>
          <Avatar size="200" src={props.user.data.profilePic} />
        </div>
        <p>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly name="email" defaultValue={props.user.data.email} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextUsername">
              <Form.Label column sm="2">
                Username
              </Form.Label>
              <Col sm="10">
                <Form.Control  type="text" name="username" placeholder={props.user.data.username} onChange={handleInput('username')} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" name="password" placeholder="Password" onChange={handleInput('password')} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicPic">
              <Form.Label column sm="2">
                Profile Picture
              </Form.Label>
              <Col sm="10">
                <Form.Control  type="url" name="profilePic" placeholder="" onChange={handleInput('profilePic')} />
              </Col>
            </Form.Group>
            {/* <Form.Group as={Row} controlId="formBasicPic">
              <Form.Label column sm="2">
                Profile Picture
              </Form.Label>
              <Col sm="10">
              <Form.File data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}" onChange={handleInput('profilePic')} name="profilePic" type="file" id="exampleFormControlFile1" data-cloudinary-field="image_id" />
              </Col>
            </Form.Group> */}
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
            </Form.Group>
            <div style={{textAlign: "center"}}>
            <Button variant="primary" onClick={props.onHide} type="submit">
              Submit
            </Button>
            </div>
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
                setUser={setUser}
                setUserInfo={setUserInfo}
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
