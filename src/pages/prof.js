import React from 'react';
import StudentsList from '../components/StudentsList';
import styled from 'styled-components'
import Code from '../components/Code';


const Prof = () => {
    
    return (
        <Div>
            <Divv><StudentsList/></Divv>
            <Code/>
        </Div>
    );
};

const Div = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    column-gap: 30px;

    @media (max-width: 700px) {
    grid-template-columns: 1fr
  }
`

const Divv = styled.div`
    @media (max-width: 700px) {
    grid-row: 2;
  }
`

export default Prof;