import React from 'react'
import styled from 'styled-components'
import NavMenuData from '../data/NavMenuData'
import { Button } from './Button'
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'

const DropdowContainer = styled.div`

position: fixed;
z-index: 990;
width: 60%;
height: 100%;
background: #cd853f;
display: grid;
align-items: center;
left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
top: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};


`

function Dropdown({ isOpen, toggle }) {
    return (
        <DropdowContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {NavMenuData.map((item, index) => (

                        <DropdownLink to={item.link} key={index}>
                            {item.title}

                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary='true' round='true' big='true' to='/contact-us'>
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
            <h1>Drop</h1>

        </DropdowContainer>
    )
}

export default Dropdown


const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

`;
const CloseIcon = styled(FaTimes)`
color: #000d1a;
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);
}

`;
const DropdownLink = styled(Link)`
display:flex;
align-items: center;
justify-content:center;
color: #fff;
font-size: 1.5rem;
text-decoration: none;
cursor: pointer;
transition: 0.2s ease-in-out;

&:hover{
    color: #000d1a;
}
`;
const BtnWrap = styled.div`


display: flex;
justify-content: center;
`