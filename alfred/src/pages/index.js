import React, { useEffect } from 'react'
import Landing from '../Components/Landing/index';
import Footer from '../Components/Footer/index'
import { isAuth } from '../config/auth'
import useFindUserInfo from '../hooks/userFindUserInfo'

const LandingPage= () => {


    const user = isAuth();

    return (
        <>
            <Landing />
            <Footer />
        </>
    )
}

export default LandingPage;
