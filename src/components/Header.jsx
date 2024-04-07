import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';


function Header() {
    return (
        <>
            <Border />
            <Navbar />
        </>
    )
}

const Border = styled.div`
height: 20px;
background-color: black;
`;

export default Header;