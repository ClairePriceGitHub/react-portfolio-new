import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import iconEmail from '../assets/images/logo-email.png';
import iconGithub from '../assets/images/logo-github.png';
import iconLinkedin from '../assets/images/logo-linkedin.png';

function Footer() {
    return (
        <Wrapper>
            <Inner>
                <Link to="" target="_blank" rel="noreferrer noopener"><Image src={iconEmail} alt='Email icon' /></Link>
                <Link to="https://github.com/ClairePriceGitHub" target="_blank" rel="noreferrer noopener"><Image src={iconGithub} alt='GitHub icon' /></Link>
                <Link to="https://www.linkedin.com/in/claire-price-a6847832/" target="_blank" rel="noreferrer noopener"><Image src={iconLinkedin} alt='LinkedIn icon' /></Link>
            </Inner>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    `;

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
    padding: 30px 0px;
    `;

const Image = styled.img`
    height: 40px;
    `;

export default Footer;