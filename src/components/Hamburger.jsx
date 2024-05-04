import React from 'react';
import { Link } from 'react-router-dom';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import cp from '../assets/images/logo-cp.png';

function Hamburger({ open, setOpen }) {
    return (
        <OuterWrapper open={open} onClick={() => setOpen(!open)}>
            
            <InnerWrapper>
                <div style={{
                    transform: open ? 'rotate(45deg)' : 'rotate(0)',
                    // backgroundColor: open ? 'black' : 'darkGrey',
                    transformOrigin: '1px',
                }}/>
                <div style={{
                    transform: open ? 'rotate(-45deg)' : 'rotate(0)',
                    // backgroundColor: open ? 'black' : 'darkGrey',
                    transformOrigin: '1px'
                }}/>
            </InnerWrapper>
            <Link to="/"><Logo src={cp} alt="Claire Price Logo" /></Link> 
        </OuterWrapper>
    )
}

Hamburger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

const OuterWrapper = styled.div`
    display: none;
    height: 80px;
    padding-top: ${({theme}) => theme.primarySpacing};
    padding-left: ${({theme}) => theme.primarySpacing};
    padding-right: ${({theme}) => theme.primarySpacing};
    border-left: ${({ theme }) => theme.primaryBorder};
    border-right: ${({ theme }) => theme.primaryBorder};

    @media (max-width: 767px) {
        display: flex;
        justify-content: space-between;

        &::after{content: ''; flex: 1}
    }
`;

const Logo = styled.img`
    width: 80px;
    flex: 1;

    &:hover {
        transform: scale(90%);
        transform-origin: center;
    }
`;

const InnerWrapper = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-flow: column;
    flex: 1;
    justify-content: space-around;

    // &:hover {
    //     justify-content: space-evenly;
    //     transform-origin: center;
    // }
    
    div {
        width: 1.5rem;
        height: 0.15rem;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.primaryDark};
    }
`;



export default Hamburger;