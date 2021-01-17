import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import NavMenuData from '../data/NavMenuData'
import { Button } from './Button'
import { FaAlignRight } from "react-icons/fa";
import { FcHome } from "react-icons/fc";

function Navbar({ toggle }) {
    return (
        <Nav>
            <Logo to="/"> <LogoIcon /> AsacHomez</Logo>
            <NavMenuBars onClick={toggle} />
            <NavMenu>
                {
                    NavMenuData.map((item, i) => (

                        <NavMenuLinks to={item.link} key={i}>
                            {item.title}
                        </NavMenuLinks>
                    ))
                }
            </NavMenu>
            <NavBtn>
                <Button to='/contact-us' primary="true">Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar


const Nav = styled.nav`
height: 60px;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;
background-color: #E65922;



`
const LogoIcon = styled(FcHome)`

margin-right: 5px;
margin-left: -25px;
height: 40px;
width: 40px;
background-size: contain;


`

const NavMenuBars = styled(FaAlignRight)`

display: none;
color: #fff;


 @media screen and (max-width: 668px){
        display: block;
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
        
    }


`;


const NavLink = css`
 color: #fff;
 display: flex;
 align-items: center;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 text-decoration: none;

  &:hover{
     transform: translateY(-2px)
 }


`

const Logo = styled(Link)`
    ${NavLink}
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    font-family: 'Montserat', sans-serif;
`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -50px;

    @media screen and (max-width: 668px){
        display: none
    }

`
const NavBtn = styled.div`
 display: flex;
 align-items: center;
 margin-right: 50px;

 @media screen and (max-width: 668px){
   
        display: none
    
 }

  @media screen and (max-width: 1025px){

    margin-right: 0;
   
    
 }


`
