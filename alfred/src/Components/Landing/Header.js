import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { HeaderContainer, HeaderBG, VideoBG, HeaderContent, HeaderH1, WhiteBtn, GreenBtn, HeaderBtn  } from './HeaderElements'
import { isAuth } from '../../config/auth'
import Video from '../../assets/video.mp4'

const Header = () => {
    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        if(!isAuth()){
            history.push('/')
        }
    }


    return (
        <>
            <HeaderContainer>
                <HeaderBG>
                    <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
                </HeaderBG>
                {isAuth() ? <WhiteBtn onClick={logout}>Sign Out</WhiteBtn> : <NavLink to={"/signin"}><GreenBtn>Sign In</GreenBtn></NavLink>}
                <HeaderContent>
                        <HeaderH1>Alfred</HeaderH1>
                        {isAuth() ? <NavLink to={"/portfolio"}><HeaderBtn>Your Portfolio</HeaderBtn></NavLink> : <NavLink to={"/signup"}><HeaderBtn>Sign Up</HeaderBtn></NavLink> }
                </HeaderContent>
            </HeaderContainer>
        </>
    );
}

export default Header;
