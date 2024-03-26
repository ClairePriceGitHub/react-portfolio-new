import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function CardPA(props) {

    // function selectProject({ data }) {
        

        

    // }

    const [projectData, setProjectData] = useState(props.data);

    // function handleClick(event) {
    //     event.preventDefault();
    //     const selectProject = () => {
    //         setProjectData(event);

    //     }
    //     function selectProject() {
            
    //     }
    //     const selectedProject = this.data;
    //     setProjectData(selectedProject);
    //     console.log(selectedProject);
    //     console.log(projectData);

    //    }

    //    
    
    // const selectedProject = this.data;
    //     setProjectData(selectedProject);
    //     console.log(selectedProject);

    

    const handleClick = (e) => {
        const selectedData = e.target.value;
        setProjectData(selectedData);
        console.log(projectData);
        
    }

    // const allData = props.data;
    // console.log(allData);

    return (
        <div>
            <img scr={props.data.image} />
            <h5>{props.data.title}</h5>
            <a href={props.data.linkDeployed} target="_blank" rel="noreferrer noopener">Deployed application</a>
            <a href={props.data.linkRepo} target="_blank" rel="noreferrer noopener">GitHub repository</a>
            <button type="button" onClick={handleClick}><Link to="/Detail" >View more</Link></button>
        </div>
    );
}

export default CardPA;