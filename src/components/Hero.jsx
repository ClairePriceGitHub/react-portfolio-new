import React from 'react';
import hero from '../assets/images/hero.png';
import styled from 'styled-components';


function Hero() {
    return (
        <div>
            <img src={hero} alt='Black and white abstract image' />
            <h1>Claire Price</h1>
        </div>
    )
}

export default Hero;