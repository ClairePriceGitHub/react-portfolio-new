import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function CardPA({ data }) {

    function handleClick() {
        console.log(data);
       }

    function selectProject() {
        const [projectData, setProjectData] = useState();
    }

    



    return (
        <div>
            <img scr={data.image} />
            <Link to="/Detail" onClick={handleClick}><h5>{data.title}</h5></Link>
            <a href={data.linkDeployed} target="_blank" rel="noreferrer noopener">Deployed application</a>
            <a href={data.linkRepo} target="_blank" rel="noreferrer noopener">GitHub repository</a>
        </div>
    );
}

export default CardPA;