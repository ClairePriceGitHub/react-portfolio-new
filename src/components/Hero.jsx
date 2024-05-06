import React from 'react';
import styled, { keyframes } from 'styled-components';
import cp from '../assets/images/logo-cp.png';

function Hero() {
    return (
        <OuterWrapper>
            <InnerWrapper>
            {/* <FirstName>CLAIRE</FirstName> */}
            <LastName> CLAIRE PRICE</LastName>
                <Logo src={cp} alt='Photo of Claire Price' />
                {/* <HeroImage src={hero} alt='Photo of Claire Price' /> */}
                {/* <Logo2 src={cp} alt='Photo of Claire Price' />
                <Logo3 src={cp} alt='Photo of Claire Price' /> */}
                {/* <Logo4 src={cp} alt='Photo of Claire Price' /> */}
                
            </InnerWrapper>
        </OuterWrapper>
    )
}

const OuterWrapper = styled.div`
    background-color: ${({ theme }) => theme.tertiaryLight};
    height: calc(100vh - 260px);
    border: 20px solid white;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        height: calc(100vh - 210px);
    }
`;

const InnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (max-width: 767px) {
        
    }
`;

const logoAnimation = keyframes`
    0% { transform: rotate(0deg); }
    13% { transform: rotate(90deg); }
    25% { transform: rotate(180deg); }
    38% { transform: rotate(270deg); }
    50% { transform: rotate(360deg); }
    63% { transform: rotate(450deg) scale(0.7); }
    75% { transform: rotate(540deg) scale(0.7); }
    88% { transform: rotate(630deg) scale(0.7); }
    95% { transform: scale(0.9); }
    100% { transform: rotate(720deg); }
`;

const FirstName = styled.h1`
    grid-area: firstName;
    text-align: right;
`;
const Logo = styled.img`
// max-width: 1000px;
    // grid-area: logo;
    animation-name: ${logoAnimation};
    animation-delay: 750ms;
    animation-timing-function: linear;
    animation-duration: 1500ms;
    animation-iteration-count: 1;
`;
const LastName = styled.h1`
    // grid-area: lastName;
    color: white;
`;

export default Hero;