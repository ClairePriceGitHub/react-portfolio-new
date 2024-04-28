import React from 'react';
import styled, { keyframes } from 'styled-components';
import cp from '../assets/images/logo-cp.png';
import hero from '../assets/images/hero.png';


function Hero() {
    return (
        <div>
            <Container>
                <h1>CLAIRE</h1>
                <Wrapper>
                    <Logo1 src={cp} alt='Photo of Claire Price' />
                    {/* <HeroImage src={hero} alt='Photo of Claire Price' /> */}
                    {/* <Logo2 src={cp} alt='Photo of Claire Price' />
                    <Logo3 src={cp} alt='Photo of Claire Price' /> */}
                    {/* <Logo4 src={cp} alt='Photo of Claire Price' /> */}
                </Wrapper>
                <h1>PRICE</h1>
            </Container>
        </div>
    )
}

const Container = styled.div`
    background-color: lightgrey;
    border-left: 20px solid white;
    border-right: 20px solid white;
`;

const wrapperAnimation = keyframes`
    0% { justify-content: left; }
    
  
    100% { justify-content: center; }
`;

const Wrapper = styled.div`
    animation-name: ${wrapperAnimation};
    animation-delay: 750ms;
    animation-timing-function: linear;
    animation-duration: 2s;
    padding: 40px;
    display: flex;
    justify-content: center;
`;

const logo1Animation = keyframes`
    0% { transform: rotate(0deg); }
    25% { transform: rotate(90deg); }
    50% { transform: rotate(180deg); }
    75% { transform: rotate(270deg); }
    100% { transform: rotate(360deg); }
`;

const Logo1 = styled.img`
    animation-name: ${logo1Animation};
    animation-delay: 750ms;
    animation-timing-function: linear;
    animation-duration: 2s;
    animation-iteration-count: 2;
`;

// const HeroImage = styled.img`
//     width: 500px;
// `;

// const logo2Animation = keyframes`
//     0% { opacity: 0; }
//     25% { opacity: 0; }
//     50% { opacity: 0.5; }
//     75% { opacity: 0; }
//     100% { opacity: 0; }
// `;

// const Logo2 = styled.img`
//     position: absolute;
//     opacity: 0;
//     transform: rotate(90deg);
//     animation-name: ${logo2Animation};
//     animation-delay: 750ms;
//     animation-duration: 2s;
//     animation-iteration-count: 2;
// `;

// const logo3Animation = keyframes`
//     0% { opacity: 0; }
//     25% { opacity: 0; }
//     50% { opacity: 0.0; }
//     75% { opacity: 0.5; }
//     100% { opacity: 0; }
// `;

// const Logo3 = styled.img`
//     opacity: 0;
//     transform: rotate(180deg);
//     animation-name: ${logo3Animation};
//     animation-delay: 750ms;
//     animation-duration: 2s;
//     animation-iteration-count: 2;
`;

// const Logo3 = styled.img`
//     animation-name: ${logoAnimation};
//     animation-delay: 750ms;
//     animation-timing-function: linear;
//     animation-duration: 2s;
//     animation-iteration-count: 2;
// `;

// const Logo4 = styled.img`
//     animation-name: ${logoAnimation};
//     animation-delay: 750ms;
//     animation-timing-function: linear;
//     animation-duration: 2s;
//     animation-iteration-count: 2;
// `;



export default Hero;