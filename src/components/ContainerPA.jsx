import React from 'react';
import CardPA from './CardPA';

function ContainerPA( {jsonData} ) {

  

    return (
        <div>
            {jsonData.map((item, index) => (
                <CardPA key={index} data={item} />
            ))}
        </div>
    );
}

export default ContainerPA;