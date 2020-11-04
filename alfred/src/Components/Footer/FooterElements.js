import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background: black;
`
export const FooterWrapper = styled.div`
    padding: 50px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const FooterLinksWrapper = styled.div`
    display: flex;
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 200px;
    box-sizing: border-box;
    color: white;
`
export const FootLinkItem = styled.h1`
    font-size: 15px;
    margin-bottom: 16px;
    font-weight: bold;
`

export const FooterLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 15px;

    &:hover {
        color: #65E082;
        transition: 0.3s ease-out;
    }
`

export const FooterSocialContainer = styled.section`
    width: 100%;
`

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 50px auto;
`

export const SocialLogo = styled(Link)`
    color: white;
    justify-self: start;
    text-decoration: none;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-weight: bold;

    &:hover {
        color: #6FFFB0;
        transition: 0.3s ease-out;
    }
`

export const CopyRights = styled.small`
    color: white;
    margin-bottom: 15px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
`

export const SocialIconLink = styled.a`
    color: white;
    font-size: 20px;

    &:hover {
        color: #6FFFB0;
        transition: 0.3s ease-out;
    }
`
