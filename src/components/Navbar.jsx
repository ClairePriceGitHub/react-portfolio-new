import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../index.css'
import Hamburger from './Hamburger';


function Navbar() {
    return (
        <nav>
            <Wrapper>

                <ListWrapper>
                    <li>
                        <Link to="/"><Header>HOME</Header></Link>
                    </li>
                    <li>
                        <Link to="/Projects"><Header>PROJECTS</Header></Link>
                    </li>
                    <li>
                        <Link to="/Contact"><Header>CONTACT</Header></Link>
                    </li>
                </ListWrapper>

                <BurgerWrapper>
                    <Hamburger />
                </BurgerWrapper>

            </Wrapper>
        </nav>
    )
}


const Wrapper = styled.div`
    background-color: none;
    border-left: 20px solid black;
    border-right: 20px solid black;
    `;

const ListWrapper = styled.ul`
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

const BurgerWrapper = styled.ul`
display: none;

@media (max-width: 767px) {
    display: block;
}
`;


    
export default Navbar;