import styled from "styled-components";
import {Link} from 'react-scroll';


export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  transition: all .2s ease-in-out;
  white-space: nowrap;
  
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#4BB5E6')};
  background: ${({primary}) => (primary ? '#4BB5E6' : '#010606')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  
  &.hover{
    transition: all .2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#4BB5E6')};
  }
`