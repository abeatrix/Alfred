import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarStyle, NavLogo } from './NavbarEle'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to ='/'>Alfred</NavLink>
                </li>
                <li>
                    <NavLink to ='/'>Search</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
