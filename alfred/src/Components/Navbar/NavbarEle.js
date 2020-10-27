import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
// import { Link as LinkScroll } from 'react-scroll'

export const NavLinkStyle = styled(LinkRouter)`
    font: white;
`
export const WhiteBtn = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    background: white
    color: black;
    white-space: nowrap;
    padding: 14px 50px;
`

export const GreenBtn = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    background: #50E68C;
    color: white;
    white-space: nowrap;
    padding: 14px 50px;
`

// export const NavLogo = styled(LinkRouter)`
//     color: white;
// `
