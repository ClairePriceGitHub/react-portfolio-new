import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cp from '../assets/images/logo-cp.png';

function Menu() {
    return (
        <OuterWrapper>
            <Link to="/"><Logo src={cp} alt="Claire Price Logo" /></Link>
            <InnerWrapper>
                <li><StyledLink to="/About"><Header>ABOUT</Header></StyledLink></li>
                <li><StyledLink to="/Projects"><Header>PROJECTS</Header></StyledLink></li>
                <li><StyledLink to="/Contact"><Header>CONTACT</Header></StyledLink></li>
            </InnerWrapper>
        </OuterWrapper>
    )
}

const OuterWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
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
    list-style: none;
    padding-right: ${({theme}) => theme.primarySpacing};

    li {
        &:hover {
            transform: scale(90%);
            transform-origin: center;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const Header = styled.h1`
    color: ${({ theme }) => theme.primaryDark};
    padding-left: ${({theme}) => theme.primarySpacing};
    padding-bottom: 10px;
`;

// const logoAnimation = keyframes`
//     0% { transform: scale(0deg); }
//     25% { transform: scale(0deg); }
//     50% { transform: scale(0deg); }
//     75% { transform: scale(0deg); }
//     100% { transform: scale(0deg); }
// `;

const Logo = styled.img`
    
    // animation-delay: 750ms;
    // animation-timing-function: linear;
    // animation-duration: 1500ms;
    // animation-iteration-count: 1;
    width: auto;    
    height: 80px;
    padding-left: ${({theme}) => theme.primarySpacing};

    &:hover {
        transform: scale(90%);
        transform-origin: center;
    }
`;

export default Menu;