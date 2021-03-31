import React, { useContext }  from 'react';
import {useTranslation} from 'react-i18next'
import { ThemeContext } from '../config/Context/ThemeContext';
import CodeReader from '../components/CodeReader';
import './home.css'

const Home = () => {
    console.log('--------')
    const {t, i18n} = useTranslation()

    const {theme} = useContext(ThemeContext)
    
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <h1>{t('home')}</h1>
            {/* <CodeReader/> */}
        </div>
    );
};

export default Home;