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
            <TextH3>{data.title}</TextH3>
            <Image src={`./src/assets/images/${data.image}`} />
            <TextWrapper>
                
                <LinkA href={data.linkDeployed} target="_blank" rel="noreferrer noopener"><TextP>Deployed Application</TextP></LinkA> 
                <LinkA href={data.linkRepo} target="_blank" rel="noreferrer noopener"><TextP>GitHub Repository</TextP></LinkA>
            </TextWrapper>
            <Button type="button" onClick={(e) => handleClick(e)}><h3>MORE INFO</h3></Button>
        </Card>
    );
}

const Card = styled.div`
    background-color: ${({theme}) => theme.tertiaryDark};
    border: 5px solid black;
    width: 25%;
    margin: 1% 1%;
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    // @media (max-width: 767px) {
    //     flex-wrap: wrap;
    // }
`;

const Image = styled.img`
    width: 20%;
    height: auto;
    padding: 20px 0px;
`;

const TextWrapper = styled.div`
    background-color: none;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    border-radius: 5px
    `;

const TextH3 = styled.h3`
    color: black;
    text-align: center;
    `;

const TextP = styled.p`
    color: black;
    text-align: center;
`;

const LinkA = styled.a`
    // text-decoration: none;
    `;

const Button = styled.button`
    width: 90%;
    border: none;
    padding: 10px 0px;
    background-color: ${({theme}) => theme.secondaryLight};
    outline: 4px solid black;
    padding: 0px;

    &:hover {
        outline: 4px solid white;
        background-color: ${({theme}) => theme.secondaryDark};
        color: white
    }
`;

export default CardProjects;