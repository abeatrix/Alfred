import React from 'react';
import SignIn from '../Components/Signin';
import TopNavbar from '../Components/Navbar/TopNavbar'
import Footer from '../Components/Footer/index'

const SigninPage = () => {
    return (
        <>
            <TopNavbar />
            <SignIn />
            <Footer />
        </>
    )
}

export default SigninPage;
