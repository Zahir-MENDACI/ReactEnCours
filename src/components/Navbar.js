import React from 'react';
import styled from 'styled-components'
import BtnToggle from './BtnToggle/BtnToggle';
import {useTranslation} from 'react-i18next'
import fire from '../firebase/firebase'
import Deconnexion from './Deconnexion';

const Navbar = () => {

    const {t, i18n} = useTranslation()


    
    return (
        <Div>
            <Divv>
                <Button onClick={() => i18n.changeLanguage('fr')}>Fr</Button>
                <Button onClick={() => i18n.changeLanguage('en')}>En</Button>
            </Divv>
            <Divv>
                <Deconnexion/>
                <BtnToggle/>
            </Divv>
        </Div>
    );
};

const Div = styled.div`
    display: flex;
    height: 80px;
    background-color: #000;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`
const Divv = styled.div`
    display: flex;
    align-items: center;
    column-gap: 30px;
`

const Button = styled.button`
    height: 40px;
    width: 40px;
`

export default Navbar;