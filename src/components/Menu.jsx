import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Menu() {
    return (
        <nav>
            <OuterWrapper>

                <InnerWrapper>
                    <li>
                        <Link to="/"><Header>HOME</Header></Link>
                    </li>
                    <li>
                        <Link to="/About"><Header>ABOUT</Header></Link>
                    </li>
                    <li>
                        <Link to="/Projects"><Header>PROJECTS</Header></Link>
                    </li>
                    <li>
                        <Link to="/Contact"><Header>CONTACT</Header></Link>
                    </li>
                </InnerWrapper>

            </OuterWrapper>
        </nav>
    )
}

const OuterWrapper = styled.div`
    display: block;
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
    flex-direction: row;
    justify-content: center;
    text-align: center;
    list-style: none;
    margin: 0px;
    padding-inline-start: 0px;
`;

const Header = styled.h1`
    color: black;
    padding: 20px;
`;

export default Menu;