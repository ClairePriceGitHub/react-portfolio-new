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
            <img src={`./src/assets/images/${data.image}`} />
            <TextWrapper>
                <TextP>{data.title}</TextP>
                <LinkA href={data.linkDeployed} target="_blank" rel="noreferrer noopener"><TextP>Deployed application</TextP></LinkA>
                <LinkA href={data.linkRepo} target="_blank" rel="noreferrer noopener"><TextP>GitHub repository</TextP></LinkA>
            </TextWrapper>
            <Button type="button" onClick={(e) => handleClick(e)}>more info</Button>
        </Card>
    );
}

const Card = styled.div`
    background-color: black;
    width: 25%;
    margin: 1% 1%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

const TextWrapper = styled.div`
    background-color: black;
    padding: 0px 10px;
    border-radius: 5px
    `;

const TextP = styled.p`
    color: white;
    text-align: center;
    `;

const LinkA = styled.a`
    text-decoration: none;
    `;

const Button = styled.button`
    padding: 0px 50px;
`;

export default CardProjects;