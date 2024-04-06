import React, { useState, useEffect } from 'react';
import ContainerPA from '../components/Container';

function Projects() {
   const [jsonData, setJsonData] = useState([]);

   useEffect(() => {
    fetch('/project-data.json')
    .then((response) => response.json())
    .then((data) => setJsonData(data))
    .catch((error) => console.error('Error fetching data: ', error));
   }, []);

    return (
        <>
           <ContainerPA jsonData={ jsonData } />
        </>
    );
}

export default Projects;