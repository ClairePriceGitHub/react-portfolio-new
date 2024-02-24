import React from 'react';
import CardPS from './CardPS';

function ContainerPS( {jsonData} ) {
    return (
        <div>
            {jsonData.map((item, index) => (
                <CardPS key={index} data={item} />
            ))}
        </div>
    );
}

export default ContainerPS;