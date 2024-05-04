import React from 'react';
import CardProjects from './CardProjects';
import styled from 'styled-components';

function Container({ jsonData }) {
    return (
        <Wrapper>
            {jsonData.map((item, index) => (
                <CardProjects key={index} data={item} />
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: ${({theme}) => theme.primarySpacing};
`;

export default Container;