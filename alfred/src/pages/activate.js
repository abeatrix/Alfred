import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import jwt from 'jsonwebtoken';
import { isAuth } from '../config/auth'
import axios from 'axios';
import { NavLink, Redirect, useHistory} from 'react-router-dom';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormButton, Text } from '../Components/Signup/SingupElements'

const ActivatePage = ({match}) => {
    const history = useHistory();

    const [formData, setFormData] = useState({
        username: '',
        token: '',
        show: true
    })

    useEffect(() => {
        let token = match.params.token
        let {username} = jwt.decode(token)

        if(token) {
            setFormData({...formData, username, token})
        }
    }, [match.params])

    const {username, token, show } = formData

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/activate`, {
            token
        }). then(res => {
            setFormData({...formData, show: false })
            console.log(res)
            toast.success('account signed up successfully');
            toast.success(res.data.message);
            history.push('/signin')
        })
        .catch(err=> {
            toast.error(err.details);
        });
    }
    return(
        <>
            <Container>
                {isAuth() ? <Redirect to='/' /> : null }
                <ToastContainer />
                <FormWrap>
                <NavLink to='/'><Icon>alfred</Icon></NavLink>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
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
