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
        min-height: calc(100vh - 280px);
        height: auto;
    }
    @media (max-width: 385px) {
        min-height: calc(100vh - 310px);
        padding-top: 30px;
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
    @media (max-width: 385px) {
        width: 100%;
    }
`;

const TextWrapper = styled.div`
    position: relative;
    opacity: ${({ opacity }) => (opacity ? '1' : '0')};
    transition: opacity 1s ease-in-out;

    @media (max-width: 385px) {
        position: static;
        opacity: 1;
    }
`;

const Name = styled.h1`
    color: white;
    margin: 3rem;
    letter-spacing: 0.6rem;
    z-index: 10;
    text-align: center;
`;

const LogoWrapper = styled.div`
    position: absolute;
    display: flex;
    width: 60%;

    @media (max-width: 767px) {
        width: 75%;
    }
    @media (max-width: 385px) {
        position: static;
    }
`;

const LogoLeftWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: ${({ moveLeft }) => (moveLeft ? 'flex-start' : 'flex-end')};

    @media (max-width: 385px) {
        justify-content: flex-end;
    }
    `;

const LogoRightWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: ${({ moveRight }) => (moveRight ? 'flex-end' : 'flex-start')};

    @media (max-width: 385px) {
        justify-content: flex-start;
    }
    `;

const LogoLeft = styled.img`
    @media (max-width: 767px) {
        width: 130px;
        height: 250px;
    }
    @media (max-width: 385px) {
        width: 100px;
        height: 190px;
    }
`;

const LogoRight = styled.img`
    @media (max-width: 767px) {
        width: 130px;
        height: 250px;
    } 
    @media (max-width: 385px) {
        width: 100px;
        height: 190px;
    }
`;

export default Hero;