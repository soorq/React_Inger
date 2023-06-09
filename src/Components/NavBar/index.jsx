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
import React, {useState, useEffect} from "react";
import { FaBars } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const NavBar = ({toggle}) => {
    const [scrolled, setScrolled] = useState(false)

    const scrolling = () => {
        window.scrollY >= 80 ? setScrolled(true) : setScrolled(false)
    }

    useEffect(()=>{
        window.addEventListener('scroll', scrolling)
    },[])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return(
        <>
            <Nav scrolled={scrolled}>
                <NavContainer>
                    <NavLogo to='/' onClick={toggleHome}>Инжер</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true'
                                      offset={-80}
                                      activeClass='active'
                            >Главная</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true'
                                      offset={-80}
                                      activeClass='active'
                            >О нас</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true'
                                      offset={-80}
                                      activeClass='active'
                            >Контакт</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='news'
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true'
                                      offset={-80}
                                      activeClass='active'
                            >Проекты</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink>Заказать Конвейер</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default NavBar