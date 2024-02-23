import React from 'react';
import Card from './CardPA';

function ContainerPS( {jsonData} ) {
    return (
        <div>
            {jsonData.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </div>
    );
}

export default ContainerPA;