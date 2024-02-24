import React, { useState, useEffect } from 'react';
import ContainerPS from '../components/ContainerPS';
import CardPS from '../components/CardPS';

function ProjectSelected() {
//    const [jsonData, setJsonData] = useState([]);

//    useEffect(() => {
//     fetch('/project-data.json')
//     .then((response) => response.json())
//     .then((data) => setJsonData(data))
//     .catch((error) => console.error('Error fetching data: ', error));
//    }, []);

    return (
        <div>
           {/* <ContainerPS jsonData={jsonData} />
           <Card key={index} data={item} /> */}
           <p>link test</p>
           < CardPS />



        </div>
    );
}

export default ProjectSelected;