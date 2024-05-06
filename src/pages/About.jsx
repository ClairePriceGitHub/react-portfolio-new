import React from 'react';
import styled from 'styled-components';
import profile from '../assets/images/01-claire-price.jpg';

function About() {
    return (
        <Container>
            {/* <BgImage src={bgRecycledMah} alt="textured background" /> */}
            <InnerWrapper>
                
                <Text>
                    <h1>CLAIRE PRICE</h1>
                    <DetailsWrapper>
                        <p>I'm a front-end web developer with a background in design.</p>
                        <p>I would like to make a positive impact on people and businesses through web development.</p>
                        <p>I'm motivated to keep learning and to keep developing new skills.</p>
                    </DetailsWrapper>
                    <DetailsWrapper>
                        <h4>claire.price@mail.com</h4>
                        <h4>Cheshire, UK</h4>
                    </DetailsWrapper>
                </Text>
                <Photo src={profile} alt='Photo of Claire Price' />
            </InnerWrapper>
        </Container>
    )
}

const Container = styled.div`
    height: calc(100vh - 320px);
    background-color: ${({theme}) => theme.tertiaryLight};
    border: 20px solid ${({theme}) => theme.background};
    padding: 20px;
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
        min-height: calc(100vh - 300px);
        height: auto;
     }
`;

const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 90%;

    @media (max-width: 767px) {
       flex-direction: column-reverse;
    }
`;

const Photo = styled.img`
    flex: 1;
    width: 100px;
    max-width: 300px;
    height: auto;
    aspect-ratio: 1/1;
    padding: 20px;
    filter: grayscale(80%);
    object-fit: cover;
    border-radius: 50%;

    @media (max-width: 767px) {
       flex: none;
       width: 200px;
    }
`;

const Text = styled.div`
    flex: 2;
    padding: 20px;

    @media (max-width: 767px) {
        text-align: center;
        flex: 4;
        padding: 0;
    }

    h3, h5, p, s {
        margin: 0.5rem;
        font-weight: normal;
        color: white;
    }

    h1, h2 {
        margin: 0.5rem;
        font-weight: bold;
        letter-spacing: 0.2rem;
        color: white;
    }

    h4 {
        margin: 0.5rem;
        font-weight: bold;
        color: white;
        letter-spacing: 0.2rem;
    }
   `;

const DetailsWrapper = styled.div`
    padding-top: 10px;
`;

export default About;