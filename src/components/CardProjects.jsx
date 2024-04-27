import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function CardProjects(props) {
    const navigateTo = useNavigate();
    const [projectData, setProjectData] = useState(props.data);
    const data = projectData;

    const handleClick = (e) => {
        setProjectData(e.target.value);
        navigateTo("/Detail", { state: data });
    } 

    return (
        <Card>
            <Image src={`./src/assets/images/${data.image}`} />
            <TextWrapper>
                <TextP>{data.title}</TextP>
                {/* <LinkA href={data.linkDeployed} target="_blank" rel="noreferrer noopener"><TextP>Deployed application</TextP></LinkA> */}
                {/* <LinkA href={data.linkRepo} target="_blank" rel="noreferrer noopener"><TextP>GitHub repository</TextP></LinkA> */}
            </TextWrapper>
            <Button type="button" onClick={(e) => handleClick(e)}>view project</Button>
        </Card>
    );
}

const Card = styled.div`
    background-color: grey;
    width: 25%;
    margin: 1% 1%;
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
        background-color: yellow;
    }
    `;

const Image = styled.img`
    width: 40%;
    height: auto;
    padding: 20px 0px;
`;

const TextWrapper = styled.div`
    background-color: none;
    padding: 0px 10px;
    border-radius: 5px
    `;

const TextP = styled.p`
    color: black;
    text-align: center;
    `;

const LinkA = styled.a`
    text-decoration: none;
    `;

const Button = styled.button`
    width: 90%;
    border: none;
    padding: 10px 0px;
    &:hover {
        outline: 4px solid black;
        background-color: lightgrey;
    }
`;

export default CardProjects;