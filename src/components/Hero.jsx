import React from 'react';
import hero from '../assets/images/hero.png';
import styled from 'styled-components';


function Hero() {

    const circleSize = (Math.floor(Math.random))*50;

    return (
        <div>
            {/* <img src={hero} alt='Black and white abstract image' /> */}
            <h1>Claire Price</h1>
            {/* <Circle></Circle> */}
        </div>
    )
}




const Circle = styled.div`
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
`;

export default Hero;