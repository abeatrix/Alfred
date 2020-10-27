import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { authenticate, isAuth} from '../../config/auth'
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        status: 'Sign In',
    });

    const { email, password, status} = formData

    // Handle changes from form inputs
    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }

    // Submit form data to backend
    const handleSubmit = e => {
        e.preventDefault()
        if (email && password) {
            setFormData({ ...formData, status: 'signing in'});
                axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/signin`, {
                    email, password
                }).then(res=> {
                    setFormData({
                        ...formData,
                        email: '',
                        password: '',
                        status: 'Signed In'
                    })
                    console.log(status)

                    toast.success(res.data.message)
                })
                .catch(err => {
                    setFormData({
                        ...formData,
                        email: '',
                        password: '',
                        status: 'Sign In'
                    });
                    console.log(err.response);
                    toast.error(err.response.data.errors);
                });
        } else {
            toast.error('All fields are required.');
        }

    }


    return (
        <>
            <Container>
                {isAuth() ? <Redirect to='/' /> : null }
                <ToastContainer />
                <FormWrap>
                    <Icon to='/'>alfred</Icon>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <FormH1>Sign in here</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' name='email' onChange={handleChange('email')} required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' name='password' onChange={handleChange('password')} required />
                            <FormButton type='submit'>Sign In</FormButton>
                            <Text>Or Signin with Google</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
