import React from 'react';
import '../index.css'
import styled from 'styled-components';

function Hamburger() {
    return (
        <OuterWrapper>
            <InnerWrapper>
                <Burger />
                <Burger />
                <Burger />
            </InnerWrapper>
        </OuterWrapper>
    )
}

const OuterWrapper = styled.ul`
display: none;

@media (max-width: 767px) {
    display: block;
}
`;

const InnerWrapper = styled.div`
width: 2rem;
height: 2rem;
background-color: red;
display: flex;
flex-flow: column;
justify-content: space-around;
`;

const Burger = styled.div`
width: 2rem;
height: 0.25rem;
border-radius: 10px;
background-color: black;
// transform-origin: 1px;
// transition: all 0.3s linear;
`;

export default Hamburger;