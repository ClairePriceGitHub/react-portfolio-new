import React from 'react';


function CardPS({ data }) {

    

    return (
        <div>
            <img scr={data.image} />
            <Link to="/Detail"><h5>{data.title}</h5></Link>
            <a href={data.linkDeployed} target="_blank" rel="noreferrer noopener">Deployed application</a>
            <a href={data.linkRepo} target="_blank" rel="noreferrer noopener">GitHub repository</a>
        </div>
    );
}

export default CardPS;