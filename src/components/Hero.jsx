import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import cp from '../assets/images/logo-cp.png';
import cpBlack from '../assets/images/logo-cp-black.png';
import cpGreen from '../assets/images/logo-cp-green.png';
import cpPink from '../assets/images/logo-cp-pink.png';

function Hero() {
    
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 2000);
        return () => clearTimeout(timer);
    });

    return (
        <OuterWrapper>
            <InnerWrapper>
                <TextWrapper>
                    {show && <Name>CLAIRE PRICE</Name>}
                </TextWrapper>
                <LogoWrapper>
                    <LogoBlack src={cpBlack} alt='Logo' />
                    {/* <LogoGreen src={cpGreen} alt='Logo' /> */}
                    {/* <LogoPink src={cpPink} alt='Logo' /> */}
                </LogoWrapper>
            </InnerWrapper>
        </OuterWrapper>
    )
}

const OuterWrapper = styled.div`
    background-color: ${({ theme }) => theme.tertiaryDark};
    height: calc(100vh - 280px);
    border: 20px solid ${({ theme }) => theme.background};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        height: calc(100vh - 230px);
        height: auto;
    }
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        flex-direction: column-reverse;
    }
`;

const TextWrapper = styled.div`
    position: relative;
`;

const textAnimation = keyframes`
    0% { transform: scale(1); }
    25% { transform: scale(1); }
    38% { transform: scale(1); }
    50% { transform: scale(1); }
    63% { transform: scale(1); }
    68% { transform: scale(1); }
    88% { transform: scale(1); }
    95% { transform: scale(1.2); }
    100% { transform: scale(1); }
`;

const Name = styled.h1`
    animation-name: ${textAnimation};
    animation-delay: 750ms;
    animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
    animation-duration: 1500ms;
    animation-iteration-count: 1;
    color: white;
    margin: 3rem;
    letter-spacing: 0.2rem;
    z-index: 10;
`;

const LogoWrapper = styled.div`
    position: absolute;
`;

const logoAnimation = keyframes`
    0% { transform: scale(1); }
    25% { transform: scale(1); }
    38% { transform: scale(1); }
    50% { transform: scale(1); }
    63% { transform: scale(1); }
    68% { transform: scale(1); }
    88% { transform: scale(1); }
    95% { transform: scale(1); }
    100% { transform: scale(1); }
`;

const LogoBlack = styled.img`
    
    position: relative;
    animation-name: ${logoAnimation};
    animation-delay: 750ms;
    animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
    animation-duration: 1500ms;
    animation-iteration-count: 1;
`;

export default Hero;