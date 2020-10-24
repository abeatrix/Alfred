import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
// import { Link as LinkScroll } from 'react-scroll'

export const NavbarStyle = styled.nav`
    background: #000000;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 5;
`

export const NavLogo = styled(LinkRouter)`
    color: white;
    justify-self: flex-start;
    display: flex;
    align-item: center;
    margin-left: 25px;
`
