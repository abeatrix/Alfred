import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { authenticate, isAuth} from '../../config/auth'
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'

const SignIn = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const { username, email, password } = formData
    // Handle changes from inputs
    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }

    // Submit data to backend
    const handleSubmit = e => {
        e.preventDefault()
        if (username && email && password) {
            // if(password1 === password2) {
                axios.post(`${process.env.REACT_APP_API_URL}/register`, {
                    // username, email, password: password1
                    username, email, password
                }).then(res=> {
                    setFormData({
                        ...formData,
                        name: '',
                        email: '',
                        password: '',
                    })

                    toast.success(res.data.message)
                })
            // } else{
            //     toast.error('Password not match');
            }
        // } else {
        else {
            toast.error('All fields are required')
        }
    }



    return (
        <>
        {isAuth() ? <Redirect to='/' /> : null }
            <Container>
                <FormWrap>
                    <Icon to='/'>alfred</Icon>
                    <FormContent>
                        <Form action='#' onSubmit={handleSubmit}>
                            <FormH1>Sign in here</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Sign In</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
