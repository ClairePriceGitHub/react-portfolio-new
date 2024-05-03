import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MenuMobile({ open }) {
    return (
        <OuterWrapper open={open}>
            <InnerWrapper>
                    <li><StyledLink to="/"><Header>HOME</Header></StyledLink></li>
                    <li><StyledLink to="/About"><Header>ABOUT</Header></StyledLink></li>
                    <li><StyledLink to="/Projects"><Header>PROJECTS</Header></StyledLink></li>
                    <li><StyledLink to="/Contact"><Header>CONTACT</Header></StyledLink></li>
            </InnerWrapper>
        </OuterWrapper>
    )
}

MenuMobile.propTypes = {
    open: bool.isRequired,
};

const OuterWrapper = styled.div`
    display: none;
    transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(-120%)'};
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);
    margin-left: 0px;
    padding-left: 0px;
    padding-right: 20px;
    cursor: pointer;
    Z-index: 10;

    @media (max-width: 767px) {
    display: flex;
    }
`;

const InnerWrapper = styled.ul`
    display: flex;
    justify-content: left;
    flex-direction: column;
    text-align: left;
    list-style: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;    
`;

const Header = styled.h2`
    color: black;
`;

export default MenuMobile;