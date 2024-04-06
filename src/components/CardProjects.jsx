import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CardProjects(props) {
    
    const navigateTo = useNavigate();
    const [projectData, setProjectData] = useState(props.data);
    const data = projectData;

    const handleClick = (e) => {
        setProjectData(e.target.value);
        navigateTo("/Detail", { state: data })
    }

    return (
        <div>
            <img scr={data.image} />
            <h5>{data.title}</h5>
            <a href={data.linkDeployed} target="_blank" rel="noreferrer noopener">Deployed application</a>
            <a href={data.linkRepo} target="_blank" rel="noreferrer noopener">GitHub repository</a>
            <button type="button" onClick={(e) => handleClick(e)}>View more</button>
        </div>
    );
}

export default CardProjects;