import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// import Toast from 'react-bootstrap/Toast'
import { authenticate, isAuth } from '../../config/auth'
import axios from 'axios';
import { NavLink, Link, Redirect, withRouter, useHistory} from 'react-router-dom';
import { Container, FormWrap, Icon, FormContent, Form, SignupLogo, SigninLogo, FormLabel, FormInput, FormButton, Text, TitleWrapper } from './SingupElements'

const Signup = () => {
    const history = useHistory();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
    })

    const { username, email, password1, password2 } = formData
    // Handle changes from inputs
    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }

    // Submit data to backend
    const handleSubmit = e => {
        e.preventDefault()
        if (username && email && password1 && password2) {
            if(password1 === password2) {
                axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/signup`, {
                    username, email, password: password1
                }).then(res=> {
                    setFormData({
                        ...formData,
                        username: '',
                        email: '',
                        password: '',
                    })
                    toast.success(res.data.message)
                    history.push('/')
                })
            } else{
                toast.error('Password not match');
            }
        } else {
            toast.error('All fields are required')
        }
    }

    return (
        <>
            <Container>
                {isAuth() ? <Redirect to='/' /> : null }
                <ToastContainer />
                <FormWrap>
                    <NavLink to='/'><Icon>alfred</Icon></NavLink>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <TitleWrapper>
                                <NavLink to='/signin'><SigninLogo>Sign In</SigninLogo></NavLink><NavLink to='/signup'><SignupLogo>Sign Up</SignupLogo></NavLink>
                            </TitleWrapper>
                            {/* <FormLabel htmlFor='for'>Username</FormLabel> */}
                            <FormInput type='text' name='username' placeholder='Username' onChange={handleChange('username')} required/>
                            {/* <FormLabel htmlFor='for'>Email</FormLabel> */}
                            <FormInput type='email' name='email' placeholder='email' onChange={handleChange('email')} required/>
                            {/* <FormLabel htmlFor='for'>Password</FormLabel> */}
                            <FormInput type='password' name='password' placeholder='Password' onChange={handleChange('password1')} required />
                            {/* <FormLabel htmlFor='for'>Confirm Password</FormLabel> */}
                            <FormInput type='password' placeholder='Confirm Password' onChange={handleChange('password2')} required />
                            <FormButton type='submit'>Sign Up</FormButton>
                            <Text>Already have an account?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signup;
