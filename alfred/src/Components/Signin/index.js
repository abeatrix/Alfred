import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { authenticate, isAuth} from '../../config/auth'
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { NavLink, Link, Redirect, withRouter} from 'react-router-dom';

import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, SignupLogo, SigninLogo, TitleWrapper } from './SigninElements'

const SignIn = (props) => {
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

    const sendGToken = tokenId => {
        axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/google`, {
            idToken: tokenId
        }).then(res => {
            console.log(res.data);
            gLoginSuccess(res)
        }).catch(error=>{
            console.log('GOOGLE SIGNIN ERROR', error.response);
            toast.error('cannot signin with google')
        })
    }

    const gLoginSuccess = response => {
        authenticate(response, () => {
            if(isAuth()){
                this.props.history.push('/')
            }
        })
    }

    const responseGoogle = response => {
        console.log(response);
        sendGToken(response.tokenId)
    }

    // Submit form data to backend
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
                        toast.success(`Hey ${res.data.user.username}, Welcome back!`);
                    })
                    if(isAuth()){
                        this.props.history.push('/')
                    }

                })
                // .catch(err => {
                //     setFormData({
                //         ...formData,
                //         email: '',
                //         password: '',
                //         status: 'Sign In'
                //     });
                //     console.log(err.res);
                //     // toast.error(err.res.data.errors);
                // });
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
                            <NavLink to='/signin'><SigninLogo>Sign In</SigninLogo></NavLink><NavLink to='/signup'><SignupLogo>Sign Up</SignupLogo></NavLink>
                            </TitleWrapper>
                            {/* <FormLabel htmlFor='for'>Email</FormLabel> */}
                            <FormInput type='email' name='email' value='email' onChange={handleChange('email')} required/>
                            {/* <FormLabel htmlFor='for'>Password</FormLabel> */}
                            <FormInput type='password' name='password' value={password} onChange={handleChange('password')} required />
                            <FormButton type='submit'>Sign In</FormButton>
                            <Text>Or Signin with Google</Text>
                            <div></div>
                            <GoogleLogin
                                clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />,
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
