import React from 'react';
import hero from '../assets/images/hero.png';


function Hero() {
    return (
        <div className='hero'>
            <img src={hero} alt='Black and white abstract image' />
            <h1 className="text-8xl underline">Claire Price</h1>
        </div>
    )
}

export default Hero;