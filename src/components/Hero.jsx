import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import cpLeft from '../assets/images/logo-circle-left.png';
import cpRight from '../assets/images/logo-circle-right.png';

function Hero() {
    const [show, setShow] = useState(false);
    const [opacity, setOpacity] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const [moveRight, setMoveRight] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
            setOpacity(true);
            setMoveLeft(true);
            setMoveRight(true);
        }, 500);
        return () => clearTimeout(timer);
    });

    return (
        <OuterWrapper>
            <InnerWrapper>
                <TextWrapper show={show} opacity={opacity}>
                    <Name>CLAIRE PRICE</Name>
                </TextWrapper>
                <LogoWrapper>
                    <LogoLeftWrapper moveLeft={moveLeft}>
                        <LogoLeft src={cpLeft} alt='Logo' moveLeft={moveLeft} />
                    </LogoLeftWrapper>
                    <LogoRightWrapper moveRight={moveRight}>
                        <LogoRight src={cpRight} alt='Logo' moveRight={moveRight} />
                    </LogoRightWrapper>
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
    opacity: ${({ opacity }) => (opacity ? '1' : '0')};
    transition: opacity 1s ease-in-out;
`;

const Name = styled.h1`
    color: white;
    margin: 3rem;
    letter-spacing: 0.6rem;
    z-index: 10;
`;

const LogoWrapper = styled.div`
    position: absolute;
    display: flex;
    width: 60%;
`;

const LogoLeftWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: ${({ moveLeft }) => (moveLeft ? 'flex-start' : 'flex-end')};
`;

const LogoRightWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: ${({ moveRight }) => (moveRight ? 'flex-end' : 'flex-start')};
`;

const LogoLeft = styled.img`
`;

const LogoRight = styled.img` 
`;

export default Hero;