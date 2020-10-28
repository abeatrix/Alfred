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
                            <FootLinkItem>MAIN</FootLinkItem>
                            <FooterLink to='/'>Blog</FooterLink>
                            <FooterLink to='/'>About Us</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FootLinkItem>PRODUCT</FootLinkItem>
                            <FooterLink to='/'>Portfolio Tracker</FooterLink>
                            <FooterLink to='/'>Paper Trade</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FootLinkItem>SUPPORT</FootLinkItem>
                            <FooterLink to='/'>FAQs</FooterLink>
                            <FooterLink to='/'>Contact Us</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FootLinkItem>LEGAL</FootLinkItem>
                            <FooterLink to='/'>Privacy Policy</FooterLink>
                            <FooterLink to='/'>Disclaimer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <FooterSocialContainer>
                    <SocialMediaWrapper>
                        <SocialLogo to='/'>
                        © {new Date().getFullYear()} Alfred
                        </SocialLogo>
                        <CopyRights>An Internet Company.</CopyRights>
                        <SocialIcons>
                            <SocialIconLink href='https://github.com/abeatrix' target='_blank' aria-label='GitHub'><FaGithub/></SocialIconLink>
                            <SocialIconLink href='https://twitter.com/imbeatrix_x' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
                            <SocialIconLink href='https://facebook.com' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                            <SocialIconLink href='https://instagram.com' target='_blank' aria-label='Facebook'><FaInstagram/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </FooterSocialContainer>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
