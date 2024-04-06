import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CardPA(props) {
    
    const [projectData, setProjectData] = useState(props.data);
    const navigateTo = useNavigate();
    const data = projectData;

    const handleClick = (e) => {
        e.preventDefault();
        setProjectData(e.target.value);
        navigateTo("/Detail", { state: data })
    }

    return (
        <div>
            <img scr={props.data.image} />
            <h5>{props.data.title}</h5>
            <a href={props.data.linkDeployed} target="_blank" rel="noreferrer noopener">Deployed application</a>
            <a href={props.data.linkRepo} target="_blank" rel="noreferrer noopener">GitHub repository</a>
            <button type="button" onClick={handleClick}>View more</button>
        </div>
    );
}

export default CardPA;