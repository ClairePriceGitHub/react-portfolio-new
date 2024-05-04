import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useOnClickOutside } from '../hooks';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import Hamburger from './Hamburger';

function Header() {
    const [open, setOpen] = useState(false);
    
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <>
            <Border />
            <Menu />
            <div ref={node}>
                <Hamburger open={open} setOpen={setOpen} />
                <MenuMobile open={open} setOpen={setOpen} />
            </div>
        </>
    )
}

const Border = styled.div`
    height: ${({theme}) => theme.primarySpacing};
    background-color: ${({ theme }) => theme.primaryDark};
`;

export default Header;