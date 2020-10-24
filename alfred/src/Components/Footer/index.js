import React from 'react';
import {FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FootLinkItem, FooterLink, FooterSocialContainer, SocialMediaWrapper, SocialLogo, CopyRights, SocialIcons, SocialIconLink} from './FooterElements';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FootLinkItem>About Us</FootLinkItem>
                            <FooterLink to='/'>Sing In</FooterLink>
                            <FooterLink to='/'>Sing In</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FootLinkItem>About Us</FootLinkItem>
                            <FooterLink to='/'>Sing In</FooterLink>
                            <FooterLink to='/'>Sing In</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FootLinkItem>About Us</FootLinkItem>
                            <FooterLink to='/'>Sing In</FooterLink>
                            <FooterLink to='/'>Sing In</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FootLinkItem>About Us</FootLinkItem>
                            <FooterLink to='/'>Sing In</FooterLink>
                            <FooterLink to='/'>Sing In</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <FooterSocialContainer>
                    <SocialMediaWrapper>
                        <SocialLogo to='/'>
                            Alfred
                        </SocialLogo>
                        <CopyRights>alfred {new Date().getFullYear()} All rights reserved.</CopyRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='GitHub'><FaGithub/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaInstagram/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </FooterSocialContainer>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
