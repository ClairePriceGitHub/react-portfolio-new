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
            <img scr={data.image} />
            <h5>{data.title}</h5>
            <p><a href={data.linkDeployed} target="_blank" rel="noreferrer noopener">Deployed application</a></p>
            <p><a href={data.linkRepo} target="_blank" rel="noreferrer noopener">GitHub repository</a></p>
            <button type="button" onClick={(e) => handleClick(e)}>View more</button>
        </Card>
    );
}

const Card = styled.div`
    background-color: lightgrey;
    width: 25%;
    margin: 0 1%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

export default CardProjects;