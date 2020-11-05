import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { authenticate, isAuth} from '../../config/auth'
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { NavLink, Redirect, useHistory} from 'react-router-dom';
import { Divider } from 'rsuite';
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormButton, Text, SignupLogo, SigninLogo, TitleWrapper } from './SigninElements'
import { useSetRecoilState } from "recoil";
import { userState } from '../../recoil/atoms'

const SignIn = () => {
    const history = useHistory();

    const setUser = useSetRecoilState(userState);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        status: 'Sign In',
    });

    const { email, password} = formData

    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }

    const sendGToken = tokenId => {
        axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/google`, {
            idToken: tokenId
        }).then(res => {
            console.log(res.data);
            gLoginSuccess(res)
        }).catch(error=>{
            console.log('GOOGLE SIGNIN ERROR', error.response);
            toast.error('Cannot signin with google. Email is not signed up with Alfred.')
        })
    }

    const gLoginSuccess = response => {
        authenticate(response, () => {
            if(isAuth()){
                history.push('/')
            }
        })
    }

    const responseGoogle = response => {
        console.log(response);
        sendGToken(response.tokenId)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (email && password) {
            setFormData({ ...formData, status: 'signing in'});
                axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/signin`, {
                    email, password
                }).then(res=> {
                    authenticate(res,()=>{
                        setFormData({
                            ...formData,
                            email: '',
                            password: '',
                        })
                    })
                    if(isAuth()){
                        const userId = isAuth()._id
                        setUser(userId)
                        toast.success(`Signin Sucessfully! Welcome back!`);
                        history.push('/')
                    }
                })
                .catch(err => {
                    console.log(err.response)
                    {(err.response) ? toast.error(err.response.data.error) : toast.error('Please try again')}
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
                    <NavLink to='/'><Icon>alfred</Icon></NavLink>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <TitleWrapper>
                            <hr />
                            <NavLink to='/signin'><SigninLogo>Sign In</SigninLogo></NavLink><NavLink to='/signup'><SignupLogo>Sign Up</SignupLogo></NavLink>
                            </TitleWrapper>
                            <FormInput type='email' name='email' placeholder='email' onChange={handleChange('email')} required/>
                            <FormInput type='password' name='password' placeholder='password' onChange={handleChange('password')} required />
                            <FormButton type='submit'>Sign In</FormButton>
                            <Text> <Divider>Or Signin with Google</Divider></Text>
                                <GoogleLogin
                                    clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
