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
        <Card>
            <TextH3>{data.title}</TextH3>
            <Image src={`./src/assets/images/${data.image}`} />
            <TextWrapper>
                
                <LinkA href={data.linkDeployed} target="_blank" rel="noreferrer noopener"><TextP>Deployed application</TextP></LinkA> 
                <LinkA href={data.linkRepo} target="_blank" rel="noreferrer noopener"><TextP>GitHub repository</TextP></LinkA>
            </TextWrapper>
            <Button type="button" onClick={(e) => handleClick(e)}>MORE INFO</Button>
        </Card>
    );
}

const Card = styled.div`
    background-color: lightblue;
    border: 5px solid black;
    width: 25%;
    margin: 1% 1%;
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
        
    }
    `;

const Image = styled.img`
    width: 20%;
    height: auto;
    padding: 20px 0px;
`;

const TextWrapper = styled.div`
    background-color: none;
    padding: 0px 10px;
    border-radius: 5px
    `;

const TextH3 = styled.h3`
    color: black;
    text-align: center;
    `;

const TextP = styled.p`
color: black;
text-align: center;
`;

const LinkA = styled.a`
    text-decoration: none;
    `;

const Button = styled.button`
    width: 90%;
    border: none;
    padding: 10px 0px;
    background-color: yellow;
    outline: 4px solid white;
    &:hover {
        outline: 4px solid black;
        background-color: lightgrey;
    }
`;

export default CardProjects;