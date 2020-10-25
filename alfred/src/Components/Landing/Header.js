import React from "react";
import { HeaderContainer, HeaderBG, VideoBG, HeaderContent, HeaderH1  } from './HeaderElements'
import Video from '../../assets/video.mp4'

function Header() {
    return (
        <HeaderContainer>
            <HeaderBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
            </HeaderBG>
            <HeaderContent>
                    <HeaderH1>Alfred</HeaderH1>
            </HeaderContent>
	    </HeaderContainer>
    );
}

export default Header;
