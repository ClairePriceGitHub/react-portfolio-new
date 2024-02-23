import React, { useState, useEffect } from 'react';
import ContainerPS from '../components/ContainerPS';

function ProjectSelected() {
   const [jsonData, setJsonData] = useState([]);

   useEffect(() => {
    fetch('/project-data.json')
    .then((response) => response.json())
    .then((data) => setJsonData(data))
    .catch((error) => console.error('Error fetching data: ', error));
   }, []);

    return (
        <div>
           <ContainerPS jsonData={jsonData} />
           <Card key={index} data={item} />



        </div>
    );
}

export default ProjectSelected;