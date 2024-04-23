import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';


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