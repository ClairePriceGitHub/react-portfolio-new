import React from 'react';
import iconEmail from '../assets/images/logo-email.png';
import iconGithub from '../assets/images/logo-github.png';
import iconLinkedin from '../assets/images/logo-linkedin.png';

function Footer() {
    return (
        <div>
            <div>
                <a href="" target="_blank" rel="noreferrer noopener"><img src={iconEmail} alt='Email icon' /></a>
                <a href="https://github.com/ClairePriceGitHub" target="_blank" rel="noreferrer noopener"><img src={iconGithub} alt='GitHub icon' /></a>
                <a href="https://www.linkedin.com/in/claire-price-a6847832/" target="_blank" rel="noreferrer noopener"><img src={iconLinkedin} alt='LinkedIn icon' /></a>
            </div>
        </div>
    );
}

export default Footer;