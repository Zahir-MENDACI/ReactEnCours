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
            <Divv><StudentsList/></Divv>
            <Code/>
            <Deconnexion/>
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