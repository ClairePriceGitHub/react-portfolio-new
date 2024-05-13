import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import cp from '../assets/images/logo-cp.png';
import cpBlack from '../assets/images/logo-cp-black.png';
import cpLeft from '../assets/images/logo-circle-left.png';
import cpRight from '../assets/images/logo-circle-right.png';
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
                    <LogoLeftWrapper>
                        <LogoLeft src={cpLeft} alt='Logo' />
                    </LogoLeftWrapper>
                    <LogoRightWrapper>
                        <LogoRight src={cpRight} alt='Logo' />
                    </LogoRightWrapper>
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
    width: 90%;

    @media (max-width: 767px) {
        flex-direction: column-reverse;
    }
`;

const TextWrapper = styled.div`
    position: relative;
`;

const textAnimation = keyframes`
    0% { opacity: 0%; }
    100% { opacity: 100%; }
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
    display: flex;
    width: 60%;
`;

const logoLeftAni = keyframes`
    0% { justify-content: flex-end; }
    100% { justify-content: flex-start; }
`;

const LogoLeftWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    justify-content: flex-end;

    animation-name: ${logoLeftAni};
    animation-delay: 750ms;
    animation-timing-function: linear;
    animation-duration: 1500ms;
    animation-iteration-count: 1;
`;

const logoRightAni = keyframes`
    0% { justify-content: flex-start; }
    100% { justify-content: flex-end; }
`;

const LogoRightWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;

    animation-name: ${logoRightAni};
    animation-delay: 750ms;
    animation-timing-function: linear;
    animation-duration: 1500ms;
    animation-iteration-count: 1;
`;



const LogoLeft = styled.img`
    
`;

const LogoRight = styled.img`
    
`;

export default Hero;