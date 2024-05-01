import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import Hamburger from './Hamburger';

function Header() {
    return (
        <>
            <Border />
            <Menu />
            <Hamburger />
            <MenuMobile />
        </>
    )
}

const Border = styled.div`
height: 20px;
background-color: ${({ theme }) => theme.primaryDark};
`;

export default Header;