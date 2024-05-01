import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MenuMobile() {
    return (
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
    )
}

const OuterWrapper = styled.div`
display: none;


@media (max-width: 767px) {
    display: block;
}
`;

const InnerWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: left;
    list-style: none;
    padding-inline-start: 0px;
`;

const Header = styled.h1`
    color: black;
`;

export default MenuMobile;