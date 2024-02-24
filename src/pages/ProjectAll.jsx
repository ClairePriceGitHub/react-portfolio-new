import React, { useState, useEffect } from 'react';
import ContainerPA from '../components/ContainerPA';

function ProjectAll() {
   const [jsonData, setJsonData] = useState([]);

   useEffect(() => {
    fetch('/project-data.json')
    .then((response) => response.json())
    .then((data) => setJsonData(data))
    .catch((error) => console.error('Error fetching data: ', error));
   }, []);

   



  

    return (
        <div>
           <ContainerPA jsonData={jsonData} />
        </div>
    );
}

export default ProjectAll;