import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import NavMenuData from '../data/NavMenuData'
import { Button } from './Button'

function Navbar() {
    return (
        <Nav>
            <Logo to="/">AsacHomez</Logo>
            <NavMenuBars />
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
background: red;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%

`


const NavMenuBars = styled.i`


`;


const NavLink = css`
 color: #fff;
 display: flex;
 align-items: center;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 text-decoration: none;


`

const Logo = styled(Link)`
${NavLink}
font-style: italic;
    font-weight: 800;
    font-size: 20px;
`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;

`
const NavBtn = styled.div`
 display: flex;
 align-items: center;
 margin-right: 50px;

`
