import React, { useContext } from 'react';
import StudentsList from '../components/StudentsList';
import styled from 'styled-components'
import Deconnexion from '../components/Deconnexion';
import Code from '../components/Code';
import './home.css'
import { ThemeContext } from '../config/Context/ThemeContext';


const Prof = () => {

    const {theme} = useContext(ThemeContext)
    
    return (
        <Div className={theme ? "contenu light" : "contenu dark"}>
            <Deconnexion/>
            <StudentsList/>
            <Code/>
        </Div>
    );
};

const Div = styled.div`
    
`

export default Prof;