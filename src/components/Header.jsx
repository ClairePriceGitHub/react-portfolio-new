import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import Hamburger from './Hamburger';

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Border />
            <Menu />
            <div>
                <Hamburger open={open} setOpen={setOpen} />
                <MenuMobile open={open} setOpen={setOpen} />
            </div>
        </>
    )
}

const Border = styled.div`
height: 20px;
background-color: ${({ theme }) => theme.primaryDark};
`;

export default Header;