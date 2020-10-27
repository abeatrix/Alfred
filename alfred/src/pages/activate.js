import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import jwt from 'jsonwebtoken';
import { authenticate, isAuth } from '../config/auth'
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from '../Components/Signup/SingupElements'

const ActivatePage = ({match}) => {
    const [formData, setFormData] = useState({
        username: '',
        token: '',
        show: true
    })

    useEffect(() => {
        let token = match.params.token
        let username = jwt.decode(token)

        if(token) {
            setFormData({...formData, username, token})
        }
    }, [])

    const {username, show, token} = formData

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/activate`, {
            token
        }). then(res => {
            setFormData({...formData, show: false })
            toast.success(res.data.message);
        })
        .catch(err=> {
            toast.error(err.response.data.error);
        });
    }
    return(
        <>
            <Container>
                {isAuth() ? <Redirect to='/' /> : null }
                <ToastContainer />
                <FormWrap>
                    <Icon to='/'>alfred</Icon>
                    <FormContent>
                        <Form action='#' onSubmit={handleSubmit}>
                            <FormH1>Welcome to Alfred</FormH1>
                            <FormButton type='submit'>Activate Here</FormButton>
                            <Text>Already have an account?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default ActivatePage;
