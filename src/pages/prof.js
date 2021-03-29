import React from 'react';
import StudentsList from '../components/StudentsList';
import styled from 'styled-components'
import Deconnexion from '../components/Deconnexion';
import Code from '../components/Code';


const Prof = () => {
    return (
        <Div>
            <Deconnexion/>
            <StudentsList/>
            <Code/>
        </Div>
    );
};

const Div = styled.div`
    margin: 3%;
`

export default Prof;