import React from "react";
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook,FaInstagram,FaUber,FaYoutube,FaTwitter} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItem,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIcon
} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='signup'>How it works</FooterLink>
                                <FooterLink to='signup'>Test</FooterLink>
                                <FooterLink to='signup'>Careers</FooterLink>
                                <FooterLink to='signup'>IventorsrLink></FooterLink>
                                <FooterLink to='signup'>Terms Of Item</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='signup'>How it works</FooterLink>
                            <FooterLink to='signup'>Test</FooterLink>
                            <FooterLink to='signup'>Careers</FooterLink>
                            <FooterLink to='signup'>IventorsrLink></FooterLink>
                            <FooterLink to='signup'>Terms Of Item</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='signup'>Отзывы</FooterLink>
                            <FooterLink to='signup'>Проекты</FooterLink>
                            <FooterLink to='signup'>Продукт</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Контакт с нами</FooterLinkTitle>
                            <FooterLink to='signup'>Адрес:  423800, Республика Татарстан, г. Набережные Челны, БСИ, ул.Профильная, 69</FooterLink>
                            <FooterLink to='signup'>Телефон: (8552) 77-83-07</FooterLink>
                            <FooterLink to='signup'>E-mail:  info@inger.ru</FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Инжер</SocialLogo>
                        <WebsiteRights>soorq © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIcon href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook/>
                            </SocialIcon>
                            <SocialIcon href='/' target='_blank' aria-label='FaInstagram'>
                                <FaInstagram/>
                            </SocialIcon>
                            <SocialIcon href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter/>
                            </SocialIcon>
                            <SocialIcon href='/' target='_blank' aria-label='YouTube'>
                                <FaYoutube/>
                            </SocialIcon>
                            <SocialIcon href='/' target='_blank' aria-label='Uber'>
                                <FaUber/>
                            </SocialIcon>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer