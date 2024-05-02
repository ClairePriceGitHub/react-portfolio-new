import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cp from '../assets/images/logo-cp.png';

function Menu() {
    return (
        <OuterWrapper>
            <Link to="/"><Header><Logo src={cp} alt="Claire Price Logo" /></Header></Link>
            <InnerWrapper>
                <li><Link to="/About"><Header>ABOUT</Header></Link></li>
                <li><Link to="/Projects"><Header>PROJECTS</Header></Link></li>
                <li><Link to="/Contact"><Header>CONTACT</Header></Link></li>
            </InnerWrapper>
        </OuterWrapper>
    )
}

const OuterWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: none;
    height: 100px;
    border-left: ${({ theme }) => theme.primaryBorder};
    border-right: ${({ theme }) => theme.primaryBorder};
    
    @media (max-width: 767px) {
    display: none;
    }
`;

const InnerWrapper = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
`;

const Header = styled.h1`
    color: black;
    padding: 20px;
`;

const Logo = styled.img`
    width: auto;    
    height: 70px;
`;

export default Menu;