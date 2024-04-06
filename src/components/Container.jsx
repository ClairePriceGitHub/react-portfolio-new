import React from 'react';
import CardProjects from './CardProjects';

function Container({ jsonData }) {
    return (
        <>
            {jsonData.map((item, index) => (
                <CardProjects key={index} data={item} />
            ))}
        </>
    );
}

export default Container;