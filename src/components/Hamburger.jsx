import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

function Hamburger({ open, setOpen }) {
    return (
        <OuterWrapper open={open} onClick={() => setOpen(!open)}>
            <InnerWrapper>
                <div style={{
                    transform: open ? 'rotate(45deg)' : 'rotate(0)',
                    transformOrigin: '1px'
                }}/>
                <div style={{
                    opacity: open ? '0' : '1'
                }}/>
                <div style={{
                    transform: open ? 'rotate(-45deg)' : 'rotate(0)',
                    transformOrigin: '1px'
                }}/>
            </InnerWrapper>
        </OuterWrapper>
    )
}

Hamburger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

const OuterWrapper = styled.div`
    display: none;
    height: 30px;
    padding-top: 20px;
    padding-left: 20px;
    border-left: ${({ theme }) => theme.primaryBorder};
    border-right: ${({ theme }) => theme.primaryBorder};

    @media (max-width: 767px) {
        display: flex;
    }
`;

const InnerWrapper = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    
    div {
        height: 0.25rem;
        border-radius: 10px;
        background-color: black;
    }
`;



export default Hamburger;