import {
    Nav,
    NavContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    MobileIcon,
    NavBtn,
    NavBtnLink
} from './NavElements'
import React from "react";
import { FaBars } from 'react-icons/fa'

const NavBar = ({toggle}) => {
    return(
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'>Dolla</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='news'>News</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink>Sign Up</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default NavBar