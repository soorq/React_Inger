import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute
} from './SideBarElement'

const SideBar = ({isOpen, toggle}) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/'>Home</SidebarLink>
                    <SidebarLink to='about'>About</SidebarLink>
                    <SidebarLink to='contact'>Contact</SidebarLink>
                    <SidebarLink to='news'>News</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='/signup'>
                        Sign Up
                    </SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar