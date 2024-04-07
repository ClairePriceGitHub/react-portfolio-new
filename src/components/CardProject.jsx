import React from 'react';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';

function CardProject() {

    const location = useLocation();
    const data = location.state;

    return (
        <div>
            <img scr={data.image} />
            <h5>{data.title}</h5>
            <a href={data.linkDeployed} target="_blank" rel="noreferrer noopener">Deployed application</a>
            <a href={data.linkRepo} target="_blank" rel="noreferrer noopener">GitHub repository</a>
        </div>
    );
}

export default CardProject;