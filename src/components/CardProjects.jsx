import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function CardProjects(props) {
    const navigateTo = useNavigate();
    const [projectData, setProjectData] = useState(props.data);
    const data = projectData;

    const handleClick = (e) => {
        setProjectData(e.target.value);
        navigateTo("/Detail", { state: data });
    } 

    return (
        <Card onClick={(e) => handleClick(e)}>
            <Title>{data.title}</Title>
            <Image src={`./src/assets/images/${data.image}`} />
            <TextWrapper>
                <LinkA href={data.linkDeployed} target="_blank" rel="noreferrer noopener"><TextP>Deployed Application</TextP></LinkA> 
                <LinkA href={data.linkRepo} target="_blank" rel="noreferrer noopener"><TextP>GitHub Repository</TextP></LinkA>
            </TextWrapper>
        </Card>
    );
}

const Card = styled.div`
    background-color: ${({theme}) => theme.background};
    min-width: 25%;
    margin: 1% 1%;
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 20px solid ${({theme}) => theme.tertiaryDark};

    &:hover {
        background-color: ${({theme}) => theme.primaryLight};
        border: 20px solid ${({theme}) => theme.primaryDark};
    }

    @media (max-width: 907px) {
        width: 40%;
    }
    @media (max-width: 720px) {
        width: 100%;
    }
`;

const Image = styled.img`
    width: 20%;
    height: auto;
    padding: 20px 0px;
`;

const TextWrapper = styled.div`
    background-color: none;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    border-radius: 5px
    `;

const Title = styled.h3`
    color: ${({theme}) => theme.primaryDark};
    text-align: center;
    `;

const TextP = styled.p`
    color: black;
    text-align: center;
`;

const LinkA = styled.a`
    text-decoration-color: black;
    `;

const Button = styled.button`
    width: 90%;
    border: none;
    border-radius: 10px;
    padding: 10px 0px;
    color: ${({theme}) => theme.primaryLight};
    background-color: ${({theme}) => theme.tertiaryDark};
    outline: 2px solid white;
    padding: 0px;

    &:hover {
        outline: 2px solid white;
        background-color: ${({theme}) => theme.tertiaryLight};
        color: white
    }
`;

export default CardProjects;