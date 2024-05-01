import React from 'react';
import styled from 'styled-components';
import profile from '../assets/images/01-claire-price.jpg';

function About() {
    return (
        <Container>
            <Photo src={profile} alt='Photo of Claire Price' />
            <h1>claire.price@mail.com</h1>
            <p>Software Engineer specialising in front-end web development. I have a background in design.</p>
            <p>Claire Price</p>
            <p>Cheshire, UK</p>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${({theme}) => theme.tertiaryLight};
    border: 20px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Photo = styled.img`
    width: 200px;
    height: auto;
    filter: grayscale(60%);
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
    padding-top: 40px;
    
`;

export default About;