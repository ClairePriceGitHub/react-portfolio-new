import React from 'react';
import styled from 'styled-components';
import profile from '../assets/images/01-claire-price.jpg';

function About() {
    return (
        <>
            <Photo src={profile} alt='Photo of Claire Price' />
            <h1>claire.price@mail.com</h1>
            <p>Software Engineer specialising in front-end web development. I have a background in design.</p>
            <p>Claire Price</p>
            <p>Cheshire, UK</p>
        </>
    )
}

const Photo = styled.img`
    width: 200px;
    height: auto;
    filter: grayscale(60%);
`;

export default About;