import styled from "styled-components";
import {Link} from 'react-router-dom'

export const FooterContainer = styled.div`
  background: #010606;
`
export const FooterWrap = styled.div`
  padding: 48px 24px;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 820px){
    padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  
  @media screen and (max-width: 820px){
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width: 420px){
    width: 100%;
    grid-template-columns: 1fr;
  }
`

export const FooterLinkItem = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 16px;
  text-align: left;
  width: 250px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 14px;
  
  &:hover
  {
   color: #4BB5E6;
    transition: .3s ease-in-out;
  }
`

export const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  
  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  text-decoration: none;
  color: #fff;
  justify-self: start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  
  &:hover
  {
    transition: .2s ease-in-out;
    color: #4BB5E6;
  }
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  align-items: center;
`

export const SocialIcon = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  &:hover
  {
    transition: .2s ease-in-out;
    color: #4BB5E6;
  }
`