import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderBG, VideoBG, HeaderContent, HeaderH1, WhiteBtn, GreenBtn  } from './HeaderElements'
import { isAuth } from '../../config/auth'
import Video from '../../assets/video.mp4'

function Header() {
    return (
        <>
            <HeaderContainer>
                <HeaderBG>
                    <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
                </HeaderBG>
                {isAuth() ? <NavLink to={"/signout"}><WhiteBtn>Sign Out</WhiteBtn></NavLink> : <NavLink to={"/signin"}><GreenBtn>Sign In</GreenBtn></NavLink>}
                <HeaderContent>
                        <HeaderH1>Alfred</HeaderH1>
                </HeaderContent>
            </HeaderContainer>
        </>
    );
}

export default Header;
